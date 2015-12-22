$(function() {

// L.mapbox.accessToken = 'pk.eyJ1IjoiYWRhbWN3ZWl0em1hbiIsImEiOiJjaWlobWd2dXcwMGFkdHBrcDZjN3pyNWF5In0.b59dgwDArrXvBD_1JJDI1g';
// var map = L.mapbox.map('map', 'mapbox.streets')
//     .setView([0, 0], 2);

// var coordinates = document.getElementById('coordinates');

// var marker = L.marker([0, 0], {
//     icon: L.mapbox.marker.icon({
//       'marker-color': '#f86767'
//     }),
//     draggable: true
// }).addTo(map);

// // every time the marker is dragged, update the coordinates container
// marker.on('dragend', ondragend);

// // Set the initial marker coordinate on load.
// ondragend();

// function ondragend() {
//     var m = marker.getLatLng();
//     coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
// }
var map = L.map('map').setView([40, -99], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40, -99]).addTo(map)


























});


















