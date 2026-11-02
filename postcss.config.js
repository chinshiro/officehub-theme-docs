// Local PostCSS config for the docs site ONLY.
// This shadows the parent project's postcss.config.js (which uses the Tailwind v3
// `tailwindcss: {}` plugin — invalid under Tailwind v4 and fatal to Docusaurus's CSS).
// The docs are plain CSS, so autoprefixer is all we need.
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
