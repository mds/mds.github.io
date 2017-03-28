
// Appends correct pixel value to headers
function appendPixelValue(size){
  $(".appended").remove(); // In case it's already there
  $('h2').append('<span class="appended">&nbsp;&nbsp;'+size+'px</span');
}

// Set 24px as default
appendPixelValue(24);

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
  appendPixelValue(12);
  $("li").removeClass();

});

// Small - 16px
$("#btn-small").on("click", function() {

  $("ul").removeClass().addClass("group-s");
  appendPixelValue(16);
  $("li").removeClass();

});

// Medium – 24px 
$("#btn-medium").on("click", function() {

  $("ul").removeClass().addClass("group-m");
  appendPixelValue(24);
  $("li").removeClass();

});

// Large – 32px
$("#btn-large").on("click", function() {

  $("ul").removeClass().addClass("group-l");
  appendPixelValue(32);
  $("li").removeClass();

});

// X Large – 48px
$("#btn-xlarge").on("click", function() {

  $("ul").removeClass().addClass("group-xl");
  appendPixelValue(48);
  // 3 col layout for the big guys
  $("li").addClass("xlarge");

});
