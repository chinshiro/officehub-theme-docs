// gen-docs.mjs
// 从主题的真实 schema 抽取，生成 Docusaurus 文档。
// 用法：node gen-docs.mjs   （在 officehub-theme-docs 根目录运行）
// 主题根目录默认取 ../theme
//
// 目录归属规则：
//   - blocks/*.liquid             → 每个 block 一页，挂在 /blocks 分类下
//   - blocks/_*.liquid            → 私有块：不单独成页，在“允许它的父级 block/section”页面里展开说明
//   - sections/main-*.liquid      → 不进 /sections 分类，归入对应 /templates-settings 模板页
//   - sections/*.liquid（其余）    → /sections 分类（或 header-group / footer-group / overlay-group）

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const THEME = path.resolve(__dirname, "../theme");
const DOCS = path.join(__dirname, "docs");

// ---------- 文本工具 ----------
const stripComment = (s) => s.replace(/^\s*\/\*[\s\S]*?\*\//, "");

function extractSchema(text) {
  const m = text.match(
    /{%\s*-?\s*schema\s*-?\s*%}([\s\S]*?){%\s*-?\s*endschema\s*-?\s*%}/i
  );
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch (e) {
    console.error("schema parse fail:", e.message);
    return null;
  }
}

// 扁平化 locales 为 dotted path -> value
function flatten(obj, prefix = "", out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

let LOCALE = {};
const localePath = path.join(THEME, "locales", "en.default.json");
if (fs.existsSync(localePath)) {
  try {
    LOCALE = flatten(JSON.parse(stripComment(fs.readFileSync(localePath, "utf8"))));
  } catch (e) {
    console.error("locale parse fail:", e.message);
  }
}

function resolveT(val) {
  if (typeof val !== "string") return val;
  if (val.startsWith("t:")) {
    const key = val.slice(2).trim();
    const found = LOCALE[key] ?? LOCALE[key.replace(/\./g, "_")];
    return found != null ? found : key;
  }
  return val;
}

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();

// ---------- 文档写入 ----------
const written = [];
function write(relPath, content) {
  const full = path.join(DOCS, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
  written.push(relPath);
}

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
const hashes = (n) => "#".repeat(clamp(n, 1, 6));
const slugify = (name) =>
  String(name)
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function settingsTable(settings, level = 2, withOptions = true) {
  const rows = (settings || []).filter(
    (s) => s.type && s.type !== "header" && s.type !== "paragraph"
  );
  if (!rows.length) return "_This group has no configurable settings._\n\n";
  let out = `${hashes(level)} Settings\n\n`;
  out += "| Setting | ID | Type | Default | Description |\n";
  out += "|---|---|---|---|---|\n";
  for (const s of rows) {
    const def =
      s.default == null
        ? ""
        : typeof s.default === "object"
        ? JSON.stringify(s.default)
        : String(s.default);
    out += `| ${esc(resolveT(s.label))} | \`${esc(s.id)}\` | ${esc(s.type)} | ${esc(def)} | ${esc(resolveT(s.info))} |\n`;
  }
  // options 明细（深层私有块省略，避免页面过长）
  const withOpts = withOptions
    ? rows.filter((s) => Array.isArray(s.options) && s.options.length)
    : [];
  if (withOpts.length) {
    out += `\n${hashes(level + 1)} Option values\n\n`;
    for (const s of withOpts) {
      out += `- **${esc(resolveT(s.label))}** (\`${esc(s.id)}\`): `;
      out += s.options
        .map((o) => `${esc(resolveT(o.label))} (\`${esc(o.value)}\`)`)
        .join(", ");
      out += "\n";
    }
  }
  return out + "\n";
}

function presetMarkdown(presets) {
  if (!Array.isArray(presets) || !presets.length) return "";
  const items = presets.map((p) => `- ${resolveT(p.name ?? "")}`).join("\n");
  return `## Presets\n\n${items}\n\n`;
}

function fm(title, position, extra = "") {
  const safeTitle = JSON.stringify(String(title));
  return `---\ntitle: ${safeTitle}\nsidebar_position: ${position}\n${extra}---\n\n`;
}

// ---------- 块注册表 ----------
// type 即 blocks 目录下的文件名（含下划线前缀），与 schema 里 "type" 完全一致。
// “允许的块”= schema.blocks ∪ 代码里 content_for 'block', type: '...'（隐式渲染的私有块）
function autoTypesOf(text) {
  return [
    ...text.matchAll(/content_for\s+['"]block['"],\s*type:\s*['"]([^'"]+)['"]/g),
  ].map((m) => m[1]);
}

function mergeAllowed(schemaBlocks, autoTypes = []) {
  const out = [];
  const seen = new Set();
  for (const b of schemaBlocks || []) {
    const type = typeof b === "string" ? b : b.type;
    if (!type || seen.has(type)) continue;
    seen.add(type);
    out.push({ type, name: typeof b === "object" ? b.name : undefined });
  }
  for (const type of autoTypes) {
    if (!type || seen.has(type)) continue;
    seen.add(type);
    out.push({ type });
  }
  return out;
}

function loadBlocks() {
  const dir = path.join(THEME, "blocks");
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".liquid"))) {
    const type = f.replace(/\.liquid$/, "");
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const sch = extractSchema(text);
    if (!sch) continue;
    out[type] = {
      type,
      schema: sch,
      isPrivate: type.startsWith("_"),
      auto: autoTypesOf(text),
    };
  }
  return out;
}

const BLOCKS = loadBlocks();

const blockTitle = (entry, fallback) =>
  resolveT(entry?.schema?.name) || fallback || entry?.type || "";

// 私有块：在父级页面内原地展开说明（递归，depth>=2 起压缩为精简表格 + 不再列 option 明细）
const documentedPrivate = new Set();
function renderPrivateBlock(entry, headingLevel, depth, seen) {
  if (!entry || seen.has(entry.type)) return "";
  seen.add(entry.type);
  documentedPrivate.add(entry.type);
  const title = blockTitle(entry, entry.type);
  const h = hashes(headingLevel);
  let out = `${h} \`${entry.type}\` — ${title}\n\n`;
  const info = resolveT(entry.schema.info);
  if (info && depth === 1) out += `${info}\n\n`;
  out += settingsTable(entry.schema.settings || [], headingLevel + 1, depth === 1);

  const children = mergeAllowed(entry.schema.blocks, entry.auto);
  if (children.length) {
    const kids = children
      .map((c) => ({ type: c.type, named: c.name }))
      .filter((c) => c.type);
    const privateKids = kids.filter((c) => BLOCKS[c.type]?.isPrivate);
    const publicKids = kids.filter((c) => c.type && !BLOCKS[c.type]?.isPrivate);

    if (publicKids.length) {
      out += `${hashes(headingLevel + 1)} Blocks inside ${esc(title)}\n\n`;
      for (const c of publicKids) {
        const known = BLOCKS[c.type];
        out += known
          ? `- [${esc(blockTitle(known, c.type))}](/blocks/${c.type}) — \`${esc(c.type)}\`\n`
          : `- \`${esc(c.type)}\`${c.named ? ` — ${esc(resolveT(c.named))}` : ""}\n`;
      }
      out += "\n";
    }
    for (const c of privateKids) {
      out += renderPrivateBlock(BLOCKS[c.type], headingLevel + 1, depth + 1, seen);
    }
  }
  return out;
}

// “Supported blocks”：可直接添加的块给链接；私有块就地递归展开
function supportedBlocks(blocks, headingLevel = 2) {
  if (!Array.isArray(blocks) || !blocks.length) return "";
  const direct = [];
  const privates = [];
  for (const b of blocks) {
    const type = typeof b === "string" ? b : b.type;
    if (!type) continue;
    const entry = BLOCKS[type];
    if (entry && entry.isPrivate) privates.push(entry);
    else direct.push({ type, title: b.name ? resolveT(b.name) : blockTitle(entry, type) });
  }

  let out = `${hashes(headingLevel)} Supported blocks\n\n`;
  if (direct.length) {
    out += "These blocks can be added directly from the editor:\n\n";
    for (const d of direct) {
      const label = d.title || d.type;
      const known = BLOCKS[d.type] && !BLOCKS[d.type].isPrivate;
      out += known
        ? `- [${esc(label)}](/blocks/${d.type}) — \`${esc(d.type)}\`\n`
        : `- \`${esc(d.type)}\`${d.title ? ` — ${esc(d.title)}` : ""}\n`;
    }
    out += "\n";
  }
  if (privates.length) {
    out +=
      "Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:\n\n";
    for (const p of privates) {
      out += `- \`${p.type}\` — ${esc(blockTitle(p, p.type))}\n`;
    }
    out += "\n";
    const seen = new Set();
    for (const p of privates) {
      out += renderPrivateBlock(p, headingLevel + 1, 1, seen);
    }
  }
  return out;
}

// ---------- 1. Theme settings (settings_schema.json) ----------
function genThemeSettings() {
  const raw = stripComment(
    fs.readFileSync(path.join(THEME, "config", "settings_schema.json"), "utf8")
  );
  const schema = JSON.parse(raw);
  // 第 0 项是 theme_info，跳过
  let pos = 1;
  const groups = schema.slice(1);
  let out = fm("Theme settings", 1) + "# Theme settings\n\n";
  out +=
    "Global configuration applied to every page via **Shopify Admin → Online Store → Themes → Customize → Theme settings**. The following groups are available:\n\n";
  out += groups.map((g) => `- ${resolveT(g.name)}`).join("\n") + "\n\n";
  write("theme-settings/index.md", out);

  for (const g of groups) {
    const title = resolveT(g.name);
    let doc = fm(title, pos++) + `# ${title}\n\n`;
    if (g.info) doc += `${resolveT(g.info)}\n\n`;
    doc += settingsTable(g.settings || []);
    doc += "> 💡 Available under **Theme settings** in the editor.\n";
    write(`theme-settings/${slugify(title)}.md`, doc);
  }
  console.log(`theme-settings: ${groups.length} groups`);
}

// ---------- 2. Sections ----------
// main-* 不在这里产出：它们归入模板页（见 genTemplates）。
function genSections(groupMembers) {
  const dir = path.join(THEME, "sections");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".liquid") && !f.startsWith("main-"));
  const docPaths = {};
  let pos = 1;
  let skipped = 0;
  const notConfigurable = [];
  for (const f of files) {
    const base = f.replace(/\.liquid$/, "");
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const sch = extractSchema(text);
    if (!sch) continue;
    // 0 设置 0 块 = 内部片段（如 pickup-availability / quick-view），
    // 只能在别的模板里被 {% section %} 渲染，编辑器里没有任何可配置项 → 不进侧边栏。
    if (!(sch.settings || []).length && !(sch.blocks || []).length) {
      notConfigurable.push(base);
      continue;
    }
    const title = resolveT(sch.name) || base;
    // 文件名与所在目录同名（如 sections/sections.md）会被 Docusaurus 折叠成分类索引路由，
    // 与 _category_.json 的 generated-index 撞车并丢失页面 —— 改用标题 slug 命名。
    const target = groupMembers[base]
      ? `${groupMembers[base]}/${base}.md`
      : base === "sections"
      ? `sections/${slugify(title)}.md`
      : `sections/${base}.md`;
    docPaths[base] = target;
    let doc = fm(title, pos++) + `# ${title}\n\n`;
    if (sch.class) doc += `Section class: \`${esc(sch.class)}\`\n\n`;
    if (sch.info) doc += `${resolveT(sch.info)}\n\n`;
    doc += supportedBlocks(mergeAllowed(sch.blocks, autoTypesOf(text)), 2);
    doc += settingsTable(sch.settings || []);
    doc += presetMarkdown(sch.presets);
    doc += "> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.\n";
    write(target, doc);
    skipped++;
  }
  console.log(
    `sections: ${skipped} files` +
      (notConfigurable.length
        ? `, skipped (no settings/blocks): ${notConfigurable.join(", ")}`
        : "")
  );
  return docPaths;
}

// ---------- 3. Blocks（仅公开块） ----------
function genBlocks() {
  const dir = path.join(THEME, "blocks");
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".liquid"));
  let pos = 2; // blocks/overview.md（保留页）占 sidebar_position 1
  let count = 0;
  for (const f of files) {
    const type = f.replace(/\.liquid$/, "");
    if (type.startsWith("_")) continue; // 私有块：在父级页面内说明
    const sch = extractSchema(fs.readFileSync(path.join(dir, f), "utf8"));
    if (!sch) continue;
    const title = resolveT(sch.name) || type;
    let doc = fm(title, pos++) + `# ${title}\n\n`;
    if (sch.info) doc += `${resolveT(sch.info)}\n\n`;
    doc += supportedBlocks(sch.blocks, 2);
    doc += settingsTable(sch.settings || []);
    doc += presetMarkdown(sch.presets);
    write(`blocks/${type}.md`, doc);
    count++;
  }
  console.log(`blocks: ${count} public blocks`);
}

// ---------- 4. Templates（含 main-* section 的说明） ----------
const normalize = (s) => s.replace(/_/g, "-");

function loadMainSections() {
  const dir = path.join(THEME, "sections");
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir)) {
    if (!f.startsWith("main-") || !f.endsWith(".liquid")) continue;
    const key = normalize(f.replace(/^main-/, "").replace(/\.liquid$/, ""));
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const sch = extractSchema(text);
    if (!sch) continue;
    map[key] = {
      file: f,
      base: f.replace(/\.liquid$/, ""),
      schema: sch,
      auto: autoTypesOf(text),
    };
  }
  return map;
}

function loadTemplates() {
  const dir = path.join(THEME, "templates");
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (f.endsWith(".json")) {
      const raw = stripComment(fs.readFileSync(full, "utf8"));
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        continue;
      }
      const secs = data.sections || {};
      out.push({
        base: f.replace(/\.json$/, ""),
        sections: Object.entries(secs).map(([handle, cfg]) => ({
          handle,
          type: cfg.type || "(group)",
        })),
        contentFor: Array.isArray(data.content_for_index) ? data.content_for_index : [],
      });
    } else if (f.endsWith(".liquid")) {
      const text = fs.readFileSync(full, "utf8");
      const sections = [...text.matchAll(/{%-?\s*section\s+'([^']+)'/g)].map((m) => ({
        handle: m[1],
        type: m[1],
      }));
      if (!sections.length) continue;
      out.push({
        base: f.replace(/\.liquid$/, ""),
        sections,
        contentFor: [],
      });
    }
  }
  return out;
}

function genTemplates(sectionDocPaths) {
  const mainSections = loadMainSections();
  const templates = loadTemplates();
  let pos = 1;

  // 每个 main-* section 归属的主模板（base 去掉变体后缀再归一化）
  const primaryOf = (base) => normalize(base.split(".")[0]);

  // 变体模板（product.preorder / page.contact …）不单独成页、不进左侧链接：
  // 同一类型只保留与 main-* section 一一对应的那个主模板，变体在主模板页内列出。
  const variantsByPrimary = new Map();
  for (const t of templates) {
    if (t.base.split(".").length === 1) continue;
    const key = primaryOf(t.base);
    if (!variantsByPrimary.has(key)) variantsByPrimary.set(key, []);
    variantsByPrimary.get(key).push(t);
  }

  for (const t of templates) {
    if (t.base.split(".").length > 1) continue;
    const title = t.base;
    const isPrimary = !!mainSections[primaryOf(t.base)];
    const primaryKey = isPrimary ? primaryOf(t.base) : null;
    let doc = fm(`Template: ${title}`, pos++) + `# Template: ${title}\n\n`;

    if (t.sections.length) {
      doc += "## Sections used\n\n";
      for (const s of t.sections) {
        if (s.type.startsWith("main-")) {
          const key = normalize(s.type.replace(/^main-/, ""));
          const primary = templates.find(
            (x) => x.base.split(".").length === 1 && primaryOf(x.base) === key
          );
          if (isPrimary && primaryKey === key) {
            doc += `- \`${s.handle}\` → \`${s.type}\` — main section, full settings in [Main section](#main-section)\n`;
          } else if (primary) {
            doc += `- \`${s.handle}\` → \`${s.type}\` — main section, see [\`${primary.base}\`](/templates-settings/${primary.base}#main-section)\n`;
          } else {
            doc += `- \`${s.handle}\` → \`${s.type}\`\n`;
          }
        } else if (sectionDocPaths[s.type]) {
          const target = sectionDocPaths[s.type];
          const slug = target.replace(/\.md$/, "").split("/").pop();
          const cat = target.includes("/") ? target.split("/")[0] : "sections";
          doc += `- \`${s.handle}\` → [\`${s.type}\`](/${cat}/${slug})\n`;
        } else {
          doc += `- \`${s.handle}\` → \`${s.type}\`\n`;
        }
      }
      doc += "\n";
    }

    if (t.contentFor.length) {
      doc +=
        "## Content order\n\n" +
        t.contentFor.map((s) => `- ${s}`).join("\n") +
        "\n\n";
    }

    // 主模板：展开 main-* section 的完整说明（设置 + 允许的块）
    if (isPrimary) {
      const main = mainSections[primaryKey];
      if (!main) {
        write(`templates-settings/${t.base}.md`, doc);
        continue;
      }
      const sch = main.schema;
      const name = resolveT(sch.name) || main.base;
      doc += `## Main section\n\n`;
      doc += `This template is driven by **${name}** (\`${main.base}\`). Everything below is configured in the editor for that section only.\n\n`;
      if (sch.info) doc += `${resolveT(sch.info)}\n\n`;
      doc += supportedBlocks(mergeAllowed(sch.blocks, main.auto), 3);
      doc += settingsTable(sch.settings || [], 3);
      if (Array.isArray(sch.presets) && sch.presets.length) {
        doc += `### Presets\n\n` + sch.presets.map((p) => `- ${resolveT(p.name ?? "")}`).join("\n") + "\n\n";
      }
    }

    // 同类型的变体模板：只在主模板页内列出，不单独成页 / 不进左侧链接
    const variants = primaryKey ? variantsByPrimary.get(primaryKey) || [] : [];
    if (variants.length) {
      const baseTypes = new Set(t.sections.map((s) => s.type));
      doc += `### Variant templates\n\n`;
      doc += `\`${t.base}\` is the primary template for this type. The variants below reuse the same main section, so they are documented here instead of having their own page:\n\n`;
      for (const v of variants) {
        const extra = [
          ...new Set(v.sections.map((s) => s.type).filter((x) => !baseTypes.has(x))),
        ];
        const shown = extra.slice(0, 5);
        doc +=
          `- \`${v.base}\`` +
          (shown.length
            ? ` — also uses ${shown.map((e) => `\`${e}\``).join(", ")}${
                extra.length > shown.length ? " …" : ""
              }`
            : "") +
          "\n";
      }
      doc += "\n";
    }

    // Home 模板（templates/index.json）不落成 index.md —— 那会占用目录根路由
    // /templates-settings/，看起来像分类落地页，实际只是 Home 模板说明。
    const fileName = t.base === "index" ? "index-template" : t.base;
    write(`templates-settings/${fileName}.md`, doc);
  }

  // 未匹配到任何模板文件的 main-* section（兜底，避免内容丢失）
  const covered = new Set(
    templates
      .filter((x) => x.base.split(".").length === 1)
      .map((x) => primaryOf(x.base))
  );
  const orphans = Object.entries(mainSections).filter(([k]) => !covered.has(k));
  if (orphans.length) {
    let doc = fm("Unassigned main sections", pos++) + "# Unassigned main sections\n\n";
    for (const [key, main] of orphans) {
      const sch = main.schema;
      doc += `## ${resolveT(sch.name) || main.base}\n\n`;
      doc += supportedBlocks(sch.blocks, 3);
      doc += settingsTable(sch.settings || [], 3);
    }
    write("templates-settings/main-sections.md", doc);
  }

  const primaryCount = templates.filter((x) => x.base.split(".").length === 1).length;
  console.log(
    `templates: ${templates.length} files → ${primaryCount} pages` +
      ` (${templates.length - primaryCount} variant templates folded into their primary page)` +
      `, main sections: ${Object.keys(mainSections).length}`
  );
}

// ---------- 5. Curated top pages ----------
// 说明：以下手工页为 Zephyr 品牌文案，已在 git 中留存，且已加入 PRESERVE 排除清单，
// 故此处不再生成，避免被覆盖：
//   - index.md                                  （hero 封面首页）
//   - getting-started/overview.md               （文档总览 + Functional module 卡片）
//   - theme-basics/understanding-sections-and-blocks.md
//   - contacting-support.md
// 仅保留 advanced-guides/performance.md 这一自动页（已统一为 Zephyr 品牌）。
function genCurated() {
  write(
    "advanced-guides/performance.md",
    fm("Performance architecture", 1) +
      `# Performance architecture\n\n` +
      `Zephyr is engineered to score well on Lighthouse out of the box. Key techniques:\n\n` +
      `- **Responsive \`<picture>\` everywhere** — every image renders a \`<picture>\` with a \`srcset\` ladder calculated from the actual display width (per breakpoint, per column count), so browsers never download oversized files.\n` +
      `- **Lazy rendering** — below-the-fold sections use \`content-visibility: auto\`; heavy resources (3D models, video) defer loading until they enter the viewport.\n` +
      `- **No layout thrash** — measurement of slide-grid dimensions is moved to a post-paint callback so it never forces a synchronous reflow during initial render.\n` +
      `- **Tailwind pipeline** — utilities are tree-shaken into a single \`lib.css\`; only used classes ship.\n` +
      `- **Accessibility-aware media** — decorative images are marked aria-hidden; interactive elements keep visible focus states.\n\n` +
      `## Best practices for merchants\n\n` +
      `- Upload images at the recommended dimensions; let Zephyr generate the responsive variants.\n` +
      `- Keep the number of third-party apps minimal — each app script adds to Total Blocking Time.\n` +
      `- Prefer the theme's built-in filters, mega-menu and reviews over additional apps where possible.\n`
  );
  console.log("curated pages written");
}

// ---------- 分组归属 ----------
function loadGroupMembers() {
  const members = {};
  for (const g of ["header-group", "footer-group", "overlay-group"]) {
    const p = path.join(THEME, "sections", `${g}.json`);
    if (!fs.existsSync(p)) continue;
    const d = JSON.parse(stripComment(fs.readFileSync(p, "utf8")));
    const secs = d.sections || {};
    for (const h of Object.keys(secs)) {
      const type = secs[h].type || h;
      members[type] = g;
    }
  }
  return members;
}

// 手工维护的精选页（hero 首页 + 品牌介绍页 + 旧 Zephyr 文档页），
// gen-docs 不得删除或覆盖。这些文件在 git 中留存为 Zephyr 品牌文案，
// 曾因生成器每次重写而被冲掉。注意：advanced-guides/performance.md 仍由生成器产出，不在此列。
// PRESERVE_FILES 为精确文件名，PRESERVE_DIRS 为整目录前缀（生成器不产出这些路径）。
const PRESERVE_FILES = new Set([
  "index.md",
  "blocks/overview.md",
  "contacting-support.md",
  "advanced-guides/understanding-pagespeed-score.md",
  "advanced-guides/editing-robots-txt.md",
  "advanced-guides/improving-store-performance.md",
  "templates-settings/products.md",
]);
const PRESERVE_DIRS = ["theme-basics/", "getting-started/"];

const isPreserved = (relPath) =>
  PRESERVE_FILES.has(relPath) || PRESERVE_DIRS.some((d) => relPath.startsWith(d));

// ---------- main ----------
function cleanDocs(dir, rel = "") {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    const relPath = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) cleanDocs(p, relPath);
    else if (/\.(md|mdx)$/i.test(ent.name) && !isPreserved(relPath)) fs.rmSync(p, { force: true });
  }
}

function main() {
  cleanDocs(DOCS);
  genThemeSettings();
  const sectionDocPaths = genSections(loadGroupMembers());
  genBlocks();
  genTemplates(sectionDocPaths);
  genCurated();
  console.log(`\n✅ Generated ${written.length} docs into docs/`);

  // 私有块覆盖审计：未被任何页面展开说明的私有块会在这里报出来
  const allPrivate = Object.keys(BLOCKS).filter((t) => BLOCKS[t].isPrivate);
  const missing = allPrivate.filter((t) => !documentedPrivate.has(t));
  console.log(
    `private blocks: ${allPrivate.length}, documented inline: ${documentedPrivate.size}` +
      (missing.length ? `, not reachable (skipped): ${missing.join(", ")}` : "")
  );
}

main();
