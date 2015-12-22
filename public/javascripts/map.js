$(function() {

var map = L.map('map').setView([40, -99], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([40, -99], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

//google geocdoe API KEY
//AIzaSyCfX95ESW8DqYM6CewKAD20ArPD4ZN0Jdc 


























});


















