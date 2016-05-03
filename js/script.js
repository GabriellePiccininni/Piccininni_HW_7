//GOAL: background image changes when a user selects a city in the dropdown
//1. user clicks dropdown
//2. user selects city
//3. background changes to selected city


$(document).ready(function(){
	
    
    $('form').submit(cityBackground);

    //when a user clicks on thr dropdown, view all options
    $('#city-type').click(function(){
        var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
        $("#city-type").append(" <option>Los Angeles</option>, <option>New York City</option>,<option>San Francisco</option>, <option>Sydney</option>, ").unbind();
    });
   
    //when user selects a city in the dropdown, get the value of that city
    function cityBackground(event){
		event.preventDefault();
		var cities = $('#city-type').val(); 

		console.log(cities)
	}

	//match the value of that city with the relevant index

	if (cities === 'NYC') {
		// Show the NYC background
		$('body').addClass('nyc');
	} else if (cities === 'SF') {
		// Show the SF background
		$('body').addClass('sf');
	} else if (cities === 'LA') {
		// Show the LA background
		$('body').addClass('la');
	} else if (cities === 'ATX') {
		// Show the LA background
		$('body').addClass('austin');
	} else if (cities === 'SYD') {
		// Show the LA background
		$('body').addClass('sydney');
	} else {
		// Remove all classes from body to show the default background.
		$('body').removeClass();
	}

	
});

