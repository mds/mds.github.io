$(document).ready(function() {

  var now = new Date();
  var hour = now.getHours();
  
  // if between 6am and 6pm, then it is day 
  if (hour > 6 && hour < 18) {
    toggleDay();
  } else {
    toggleNight();
  }

  // function for toggle
  $('.toggle-class').on('click', function() {
      if ($('body').hasClass('day')) {
          toggleNight();        
      } else {
          toggleDay();
      }
      return false; // don't scroll to the top 
  });

  // day 
  function toggleDay(){
    $('body').removeClass('night');
    $('body').addClass('day');
    $('.toggle-class').css('backgroundPosition', '0px 0px'); 
  };

  // night
  function toggleNight(){
    $('body').removeClass('day');
    $('body').addClass('night');
    $('.toggle-class').css('backgroundPosition', '0px 48px'); 
  };

});

// Functions
(function($){

  

})(jQuery);




