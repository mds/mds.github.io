$( document ).ready(function() {

  // activate float labels
  new Floatl(document.querySelectorAll('.js-floatl')[0])
  new Floatl(document.querySelectorAll('.js-floatl')[1])
  new Floatl(document.querySelectorAll('.js-floatl')[2])
  new Floatl(document.querySelectorAll('.js-floatl')[3])

  // // ----------------------------------------------
  // // random colors
  // var randomColorArray = ['red','blue','green'],
  // useThisColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)];

  // // find and replace colors
  // function colorReplace(findHexColor, replaceWith) {
  //   // Convert rgb color strings to hex
  //   function rgb2hex(rgb) {
  //     if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  //     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  //     function hex(x) {
  //       return ("0" + parseInt(x).toString(16)).slice(-2);
  //     }
  //     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  //   }

  //   // Select and run a map function on every tag
  //   $('*').map(function(i, el) {
  //     // Get the computed styles of each tag
  //     var styles = window.getComputedStyle(el);

  //     // Go through each computed style and search for "color"
  //     Object.keys(styles).reduce(function(acc, k) {
  //       var name = styles[k];
  //       var value = styles.getPropertyValue(name);
  //       if (value !== null && name.indexOf("color") >= 0) {
  //         // Convert the rgb color to hex and compare with the target color
  //         if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
  //           // Replace the color on this found color attribute
  //           $(el).css(name, replaceWith);
  //         }
  //       }
  //     });
  //   });
  // }

  // // Call like this for each color attribute you want to replace
  // colorReplace("#be02e8", useThisColor);
  // // End find and replace colors
  // // ----------------------------------------------

});

