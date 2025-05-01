// Initialize map
const gedungSateCoor = [-6.9025, 107.6191];
const myMap = L.map('map', {
  zoom: 15,
  center: gedungSateCoor,
  scrollWheelZoom: false,
});

// Set base map
const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmTile = L.tileLayer(osmTileUrl, {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
// osmTile.addTo(myMap);

// Add MapTiler layer
const mtLayer = L.maptilerLayer({
  apiKey: 'zBk7mH0I7aaYykOjeixR',
  style: 'https://api.maptiler.com/data/01968a64-d6d7-7025-9c80-6b02eda9ca81/features.json?key=5UR7yW87ydzQtdq88DT1', // Optional
});
mtLayer.addTo(myMap);
