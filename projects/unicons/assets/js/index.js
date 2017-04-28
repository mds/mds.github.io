// Run this script to make SVG show up in ie11
svg4everybody();

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

  // Finds the size in the <use> attribute and replaces it with new size
  $('use').each(function(){
    var $this = $(this);

    $this.attr('xlink:href',$this.attr('xlink:href').replace('16', size));
    $this.attr('xlink:href',$this.attr('xlink:href').replace('24', size));
    $this.attr('xlink:href',$this.attr('xlink:href').replace('48', size));

  });

}

// Changes icon size to 16px
$("#btn-small").on("click", function() {

  // Change img src to correct size
  replaceIcons(16);

  // Change to the proper size
  $("ul").removeClass().addClass("group-16");

});

// Changes icon size to 24px 
$("#btn-medium").on("click", function() {

  // Change img src to correct size
  replaceIcons(24);

  // change to the proper size
  $("ul").removeClass().addClass("group-24");

});

// Changes icon size to 32px
$("#btn-large").on("click", function() {

  // Change img src to correct size
  // We're using 24 for 32 and scaling with code, FTW!
  replaceIcons(24);

  // Change to the proper size
  $("ul").removeClass().addClass("group-32");


});

// Changes icon size to 48px
$("#btn-xlarge").on("click", function() {

  // Change img src to correct size
  replaceIcons(48);

  // Change to the proper size
  $("ul").removeClass().addClass("group-48");

});

