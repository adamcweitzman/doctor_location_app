
$(function() {

	$.ajax({
		url: '/data',
		dataType: "json",
		method: "GET",
		success: function(data, textStatus, jqXHR) {
			console.log(data);
			console.log(data[3].zip)
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
	        alert("Status: " + textStatus); alert("Error: " + errorThrown);
		}
	});

	var map = L.map('map').setView([38, -122], 4)

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	$('#addressParams').on('click', function() {
		var zip = {
			zipcode: $('#zipcodeID').val()
		};
		console.log('this is the zip', zip)
	    $.ajax({
		    url: '/upload',
		    data: zip,
		    type: 'POST',
		    success: function(data) {
		    	console.log(data);
		        //first get lat/lng for each zip
		        //var marker = new L.marker([39.5, -77.3], { opacity: 0.01 });
				// marker.bindLabel("My Label", {noHide: true, className: "my-label", offset: [0, 0] });
				// marker.addTo(map);
				var keys = Object.getOwnPropertyNames(data)
				var amount = [];
				for (var prop in data) {
					amount.push(data[prop])
				}
				for (i = 0; i < keys.length; i++) {
					console.log('this is the data', amount)
					getCoordinates(keys[i], amount[i])
				}






		    }
		});
		var zipParam = $('#zipcodeID').val()
		getCoordinates(zipParam)
	});

	var fake = "1000 mission street san francisco CA"

	function getCoordinates (address, zipNumber) {

		var zipString = zipNumber.toString()

		geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: address}, function (results, status) {
		coordinatesA = results[0].geometry.location.lat()
		coordinatesB = results[0].geometry.location.lng()
		map.setView(L.latLng([coordinatesA, coordinatesB]))
		map.setView([coordinatesA, coordinatesB], 12)

		console.log(coordinatesA, coordinatesB)

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    }).addTo(map);

	    L.marker([coordinatesA, coordinatesB]).bindLabel(address + ": " + zipString,{ noHide: true }).addTo(map)

	    var circle = L.circle([coordinatesA, coordinatesB], 500, {
	    color: 'red',
	    fillColor: '#f03',
	    fillOpacity: 0.5,
	    title: 'ziiiip'
		}).addTo(map);

		});
	};
});