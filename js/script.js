$(function()
{
	// window.addEventListener('load', function() {
	// 	document.body.addEventListener('touchmove', function(e) {
	// 		e.preventDefault();
	// 	}, false);
	// }, false);
		
	// window.localStorage.clear();
	
	// search on key up
	$("#input").keyup(function(key)
	{	
		$("#result").empty(); // clear previous results
				
		var $input = $("#input").val();
	
		for (var c = 0; c < dictionary.length; c++) 
		{
			// dothraki input
			if (dictionary[c].dothraki.indexOf($input) != -1) 
			{
				$("#result").append("<h4>English Translation: " + dictionary[c].english + "</h4>");
				break;
			}
			// english input
			else if (dictionary[c].english.indexOf($input) != -1)
			{
				$("#result").append("<h4>Dothraki Translation: " + dictionary[c].dothraki + "</h4>");
				break;
			}
			
		}
	});
	
	// clear button
	$("#clear").click(function()
	{			
		$("#input").val(""); // clear input
		$("#result").empty(); // clear results
	});
		
});