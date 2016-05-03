//GOAL: background image changes when a user selects a city in the dropdown
//1. user clicks dropdown
//2. user selects city
//3. background changes to selected city


$(document).ready(function(){
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
    
    $('form').submit(cityBackground);

    //when a user clicks on thr dropdown, view all options
    $("#city-type").click(function(){
        $("#city-type").append(" <option>Los Angeles</option>, <option>New York City</option>,<option>San Francisco</option>, <option>Sydney</option>, ").unbind();
    });
   
    //when user selects a city in the dropdown, get the value of that city
    function cityBackground(event){
		event.preventDefault();
		cities = $('#city-type').val(); 

		console.log(city-type)

		
		if (city === "New York City") {
				$('body').removeClass();
				$('body').addClass('nyc');
			}			

	}

	
});

