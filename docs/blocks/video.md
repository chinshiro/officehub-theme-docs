---
title: "Video"
sidebar_position: 28
---

# Video

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Video (upload) | `video` | video |  | Highest priority. Shopify-hosted file, played with native controls. |
| HLS stream URL | `video_m3u8` | text |  |  |
| YouTube or Vimeo link | `video_external` | video_url | https://www.youtube.com/watch?v=_9VUPq3SxOc |  |
| Cover image | `poster` | image_picker |  | Shown before playback. When left empty, the uploaded video's own preview frame is used. |
| Ratio | `ratio` | select | 1.78 |  |
| Video (upload) | `video_mob` | video |  | Falls back to the desktop video when empty. |
| HLS stream URL | `video_m3u8_mob` | text |  |  |
| YouTube or Vimeo link | `video_external_mob` | video_url |  |  |
| Cover image | `poster_mob` | image_picker |  |  |
| Ratio | `ratio_mob` | select | 0.56 |  |
| Show controls | `controls` | checkbox | true |  |
| Autoplay | `autoplay` | checkbox | false |  |
| Mute | `muted` | checkbox | false |  |
| Loop | `loop` | checkbox | false |  |
| Show play badge | `show_play` | checkbox | true | A round play button in the center of the video. Works for an uploaded file, an HLS stream and a YouTube / Vimeo link. Turn it off to let the poster show on its own. |
| Corner radius | `radius` | select | rounded-none |  |
| Block class | `class` | text |  |  |

### Option values

- **Ratio** (`ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Ratio** (`ratio_mob`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Corner radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

## Presets

- Video

