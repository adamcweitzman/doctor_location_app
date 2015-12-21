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







	// console.log('<%=client_data%>');


	// var x = d3.scale.linear()
 //    .domain([0, d3.max(<%=client_data%>)])
 //    .range([0, 500]);

	// d3.select(".chart")
	//   .selectAll("div")
	//     .data(<%=client_data%>)
	//   .enter().append("div")
	//     .style("width", function(d) { return x(d) + "px"; })
	//     .text(function(d) { return d; });






































});