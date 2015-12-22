$(function() {

	var canvas = d3.select('#map').append("svg")
		.attr("width", 300)
		.attr("height", 200)

	d3.json("us.geojson", function (data) {
		var group = canvas.selectAll("g")
		.data(data.features)
		.enter()
		.append("g")

	var projection = d3.geo.mercator().scale(200);
	var path = d3.geo.path().projection(projection);

	var areas = group.append("path")
		.attr("d", path)
		.attr("class", "area")
		.attr("fill", "steelblue ")
	});	
});

















