---
title: "3D model"
sidebar_position: 15
---

# 3D model

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Product | `product` | product |  |  |
| Model position | `model_position` | range | 1 |  |
| Ratio (desktop) | `ratio` | select | 1.0 |  |
| Ratio (mobile) | `ratio_mob` | select | 1.0 |  |
| Corner radius | `radius` | select | rounded-none |  |
| Initial display scale | `initial_scale` | range | 100 |  |
| Load model | `reveal` | select | auto |  |
| Enable camera controls | `camera_controls` | checkbox | true | Lets shoppers drag to rotate and pinch to zoom. |
| Show the viewer tool buttons | `show_controls` | checkbox | true | Shows the zoom (+/-) and fullscreen buttons overlaid on the model. Turning it off also hides them on mobile. |
| Automatic rotation | `auto_rotate` | checkbox | false |  |
| Rotation speed | `rotation_speed` | range | 0 | Percentage of a full turn per second. Negative numbers rotate the other way. |
| Play model animations | `autoplay` | checkbox | false | Only applies to models that contain animations. |
| Show the augmented reality button | `enable_ar` | checkbox | true |  |
| Block class | `class` | text |  |  |

### Option values

- **Ratio (desktop)** (`ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Ratio (mobile)** (`ratio_mob`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Corner radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Load model** (`reveal`): Automatically when in view (`auto`), On click (show poster first) (`interaction`)

## Presets

- 3D model

