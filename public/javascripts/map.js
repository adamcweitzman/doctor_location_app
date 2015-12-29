
$(function() {

	//send ajax to get data and 

	$.ajax({
		url: '/data',
		dataType: "json",
		method: "GET",
		success: function(data, textStatus, jqXHR) {
			console.log(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
    	}
	});

	var map = L.map('map').setView([38, -122], 4)

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	$('#addressParams').on('click', function() {
		var house = $('#houseNumberID').val()
		var street = $('#streetID').val()
		var city = $('#cityID').val()
		var state = $('#stateID').val()
		fullAddress = house.concat(" " + street + " " + city + " " + state)
		getCoordinates(fullAddress)
	});

	var fake = "1000 mission street san francisco CA"

	function getCoordinates (address) {
		geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: address}, function (results, status) {
		coordinatesA = results[0].geometry.location.lat()
		coordinatesB = results[0].geometry.location.lng()
		map.setView(L.latLng(coordinatesA, coordinatesB))

		console.log(coordinatesA, coordinatesB)

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    }).addTo(map);

	    var circle = L.circle([coordinatesA, coordinatesB], 500, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5
		}).addTo(map);

		});
	};

	






	

	// $('#addressParams').on('click', function() {
	// 	$.ajax({
	// 	  url: "/coordinates",
	// 	  type: "post",
	// 	  data: houseNumber: houseNumber.value
	// 	})
	// });

// google geocdoe API KEY
// AIzaSyCfX95ESW8DqYM6CewKAD20ArPD4ZN0Jdc 


























});


















