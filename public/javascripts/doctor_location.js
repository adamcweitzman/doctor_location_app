$(function() {

	console.log('document ready');
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

			// var x = d3.scale.linear()
			//     .domain([0, d3.max(data)])
			//     .range([0, 500]);

			// 	d3.select(".chart")
			// 	  .selectAll("div")
			// 	    .data(data)
			// 	  .enter().append("div")
			// 	    .style("width", function(d) { return x(d) + "px"; })
			// 	    .text(function(d) { return d; });



































});