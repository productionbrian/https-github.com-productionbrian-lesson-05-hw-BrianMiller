// execute once DOM loads
$(document).ready(function() {
// submit button does not refresh the page
  $('#submit-btn').click(function(){
    event.preventDefault();  // event prevent doesn't seem to be working correctly. clicking submit refreshes the page to the desert.
    var city = $('#city-type').val();
    $('#city-type').val('');



// Using the inequality operator; doesn't work //
    // user inputs one of the four variables
    if(city === 'new york city' || city === 'NEW YORK CITY' || city === 'nyc' || city === 'new york') {

// using the attribute method the background should change to the suggested url
      $('body').css("background", "url(images/nyc.jpg)");

// add / remove method
      // $('body').removeClass();
      // $('body').addClass('nyc');
    }
// san francisco - user inputs
    else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
      $('body').css("background", "url(images/sf.jpg)");

      // $('body').removeClass();
      // $('body').addClass('sf');

    }
// Austin - user inputs
    else if (city === 'austin' || city === 'atx') {
      $('body').css("background", "url(images/austin.jpg)");

      // $('body').removeClass();
      // $('body').addClass('austin');
    }
// los angeles user inputs
    else if (city === 'los angeles' || city === 'la' || city === 'lax') {
      $('body').css("background", "url(images/la.jpg)");

      // $('body').removeClass();
      // $('body').addClass('la');
    }
// sydney user inputs
    else if (city === 'nowhere' || city === 'syd') {
      $('body').css("background", "url(images/sydney.jpg)");

      // $('body').removeClass();
      // $('body').addClass('nowhere');
      }
    else{
      $('body').removeClass();
      $('body').addClass('nowhere');
    }
  });
});
