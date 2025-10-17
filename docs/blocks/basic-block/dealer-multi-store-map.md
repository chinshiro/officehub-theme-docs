---
title: Dealer Multi Store Map
sidebar_position: 81
---

Display a Google Map with multiple dealer or store locations using precise coordinates.

## Map Parameters

- **Google Maps API key**:  
  Required to load the map and plot multiple markers. Obtain a free API key from [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key).  
  > ⚠️ **Note**: Enable the **Maps JavaScript API** and **Places API** in your Google Cloud project, and restrict the key to your domain for security and cost control.

- **Google Maps ID**:  
  Optional. If provided, the map will use the UI style defined in your Google Cloud Console.  
  → To create a Map ID: Sign in to **[Google Cloud Console](https://console.cloud.google.com/)** > **Maps Platform > Map Management** > **Create Map ID**.  
  → **When a Map ID is set, the local “Map style” below is ignored.**

- **Map style**:  
  Custom JSON styling for the map’s appearance (e.g., muted colors, dark mode).  
  → Only active if **no Google Maps ID** is provided.  
  → If using a Map ID, configure styles in Google’s **Map Style Editor** instead.

- **Map zoom**:  
  Default zoom level when the map loads (e.g., `10` for city-level, `15` for neighborhood).

- **Center coordinates**:  
  Initial map center point. Format: `latitude,longitude` (e.g., `40.7128,-74.0060`). Use an English comma with no spaces.

- **Other store or dealer**:  
  List additional locations to display as markers.  
  **Format (one per line)**:  
  ```
  [lat,lng], [Store/Dealer Name], [Full Address]
  ```  
  **Example**:  
  ```
  [22.284430,114.182963], [Hong Kong Flagship Store], [123 Central Avenue, Hong Kong]
  ```

- **Map height**:  
  Initial map height as a percentage of the viewport height (`vh`).  
  Example: `70vh` = 70% of screen height.

---

## Filter Search

- **Search placeholder**:  
  Placeholder text in the location search input (e.g., “Search for a store near you…”).

- **Input style**:  
  Styling preset for the search field.  
  → Defined in **[Theme Settings > Style scheme settings > Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.

---

## Filter Search Result / Address

Customize the appearance of the address suggestion dropdown:

- **Background**: Background color of the results container.  
- **Border color**: Border around the dropdown.  
- **Item text color**: Text color for unselected address suggestions.  
- **Item background (active)**: Background color of the highlighted/matched item.  
- **Item text color (active)**: Text color of the active item.  
- **Item name size**: Font size of the store/dealer name in results.  
- **Item text size**: Font size of the address line in results.