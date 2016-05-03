//GOAL: background image changes when a user selects a city in the dropdown
//1. user clicks dropdown
//2. user selects city
//3. background changes to selected city


$(document).ready(function(){
	
    
    $('form').submit(cityBackground);

    // If you define your array outside of the function, it is not dependent on the function
    var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

    // You want the cities to load when the page loads
    for (var i=0; i<cities.length; i++){
      $("#city-type").append(" <option>"+ cities[i] + "</option>").unbind();

    }

    //when a user clicks on thr dropdown, view all options
    // Change is a great function to use here because it isn't the form submitting when the value gets changed
    // The function to do the changing should also get called here
    $('#city-type').change(cityBackground);
   
    //when user selects a city in the dropdown, get the value of that city
    function cityBackground(event){
      event.preventDefault();
      // You should use a different variable name because you want it to do something different
      var city = $('#city-type').val();
      console.log(city);

      // This if statement needs to be called within the function so it knows when to run.  When it's outside the function, it runs without a trigger
      if (city === 'NYC') {
        // Show the NYC background
        $('body').addClass('nyc');
      } else if (city === 'SF') {
        // Show the SF background
        $('body').addClass('sf');
      } else if (city === 'LA') {
        // Show the LA background
        $('body').addClass('la');
      } else if (city === 'ATX') {
        // Show the Austin background
        $('body').addClass('austin');
      } else if (city === 'SYD') {
        // Show the LA background
        $('body').addClass('sydney');
      } else {
        // Remove all classes from body to show the default background.
        $('body').removeClass();
      }

    }

	//match the value of that city with the relevant index

	
	
});

