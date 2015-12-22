$(function() {

var map = L.map('map').setView([40, -99], 4);
// var map = L.map('map').setView([38, -122], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([37.78, -122], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

//geocode address

// var autocomplete = new google.maps.places("1000 mission street");
// 	var places = autocomplete.getPlace();
// 	var location = places.formatted_address
// 	console.log('LAT', places.geometry.location.A)
// 	console.log('LNG', places.geometry.location.B)



geocoder = new google.maps.Geocoder();

address = "1000 mission street"

function getCoordinates (address, callback) {
	var coordinates;
	geocoder.geocode({ address: address}, function (results, status) {
	coordinatesA = results[0].geometry.location.lat()
	coordinatesB = results[0].geometry.location.lng()
	console.log(coordinatesA, coordinatesB)
	})
}

getCoordinates(address)

// google geocdoe API KEY
// AIzaSyCfX95ESW8DqYM6CewKAD20ArPD4ZN0Jdc 


























});


















