

// Count the icons in each group and append size to h2 span
$('.group-count').each(function(){
  var $this = $(this);
  $this.find('h2').append('<span class="appended">&nbsp;&nbsp;' + $this.find('ul li').length + ' Icons</span>');
});

// Sets active button
var $btns = $(".btn").on("click", function() {
    $btns.removeClass("active")
      .filter(this)
      .addClass("active")
      .data("filter");
});


// This gets called on button press to show the correct sizes. Dynamic FTW!
function replaceIcons(size){

  // Finds the size in the img src and replaces it with new size
  $('img').each(function(){
    var $this = $(this);
    $this.attr('src',$this.attr('src').replace('16', size));
    $this.attr('src',$this.attr('src').replace('24', size));
    $this.attr('src',$this.attr('src').replace('32', size));
    $this.attr('src',$this.attr('src').replace('48', size));

    // Check for error and loads a sad face if icon isn't there
    $this.on("error", function(){
      $(this).attr('src', '../assets/img/unicons-people-48px-face-sad.svg');
    });

  });

}

// Changes icon size to 16px
$("#btn-small").on("click", function() {

  // Change img src to correct size
  replaceIcons(16);

  // Change to the proper size
  $("ul").removeClass().addClass("group-16");

  // removes 3col class possibly left over from 48px
  $("li").removeClass("xlarge");

});

// Changes icon size to 24px 
$("#btn-medium").on("click", function() {

  // Change img src to correct size
  replaceIcons(24);

  // change to the proper size
  $("ul").removeClass().addClass("group-24");

  // removes 3col class possibly left over from 48px
  $("li").removeClass("xlarge");

});

// Changes icon size to 32px
$("#btn-large").on("click", function() {

  // Change img src to correct size
  replaceIcons(24);

  // Change to the proper size
  $("ul").removeClass().addClass("group-32");
  
  // Removes 3col class possibly left over from 48px
  $("li").removeClass("xlarge");

});

// Changes icon size to 48px
$("#btn-xlarge").on("click", function() {

  // Change img src to correct size
  replaceIcons(48);

  // Change to the proper size
  $("ul").removeClass().addClass("group-48");

  // 3 col layout so the big guys can have more space
  $("li").addClass("xlarge");

});
