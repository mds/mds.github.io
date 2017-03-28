
// Count the icons in each group
$('.group-count').each(function(){
  var $this = $(this);
  $this.find('h2').append('<span class="appended">&nbsp;&nbsp;' + $this.find('ul li').length + ' Icons</span>');
});

// Appends correct pixel value to headers
// function appendSize(size){
//   $(".appended").remove(); // In case it's already there
//   $("h2").append('<span class="appended">&nbsp;&nbsp;&nbsp;'+size+'px</span');
// }

// Sets active button
var $btns = $(".btn").on("click", function() {
    $btns.removeClass("active")
      .filter(this)
      .addClass("active")
      .data("filter");
});

// Tiny - 12px
$("#btn-tiny").on("click", function() {

  $("ul").removeClass().addClass("group-t");
  //appendSize(12);
  $("li").removeClass();

});

// Small - 16px
$("#btn-small").on("click", function() {

  $("ul").removeClass().addClass("group-s");
  //appendSize(16);
  $("li").removeClass();

});

// Medium – 24px 
$("#btn-medium").on("click", function() {

  $("ul").removeClass().addClass("group-m");
  //appendSize(24);
  $("li").removeClass();

});

// Large – 32px
$("#btn-large").on("click", function() {

  $("ul").removeClass().addClass("group-l");
  //appendSize(32);
  $("li").removeClass();

});

// X Large – 48px
$("#btn-xlarge").on("click", function() {

  $("ul").removeClass().addClass("group-xl");
  //appendSize(48);
  // 3 col layout for the big guys
  $("li").addClass("xlarge");

});
