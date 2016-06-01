$(function() {
  "use strict";
});


$( ".text-box" ).focus( function() {
  var boxContainer = $( ".text-box-container" );
  var index = $( ".text-box-container p" ).size() + 1;

  $( ".text-box" ).keydown( function(e) {
    var charCount = $(this).val().length;
    console.log(e.which);
    if( this.value.length === 0 && e.keyCode!== 46 && e.keyCode!== 8 ) {
      $( "<p><input type='text' id='box' + index class='text-box'/></p>").appendTo(boxContainer);
    }

    else if( e.keyCode === 46 || e.keyCode === 8 ) {
      console.log("boo");
      charCount--;
      console.log(charCount);
      if ( charCount < 0 ) {
        $( "#box" ).remove();
        this.blur();
      }
    }
  });
});



// var theBox = $( ".text-box" );
// var containerP = $( ".text-box-container p" ).size() + 1;
//
// for( var index = 0; index < theBox.length; index++ ) {
//   theBox[index].focus( function() {
//   var boxContainer = $( ".text-box-container" );
//
//   $( ".text-box" ).keydown( function(e) {
//     var charCount = $(this).val().length;
//     console.log(e.which);
//     if( this.value.length === 0 && e.keyCode!== 46 && e.keyCode!== 8 ) {
//       $( "<p><input type='text' id='box' + containerP class='text-box'/></p>").appendTo(boxContainer);
//     }
//
//     else if( e.keyCode === 46 || e.keyCode === 8 ) {
//       console.log("boo");
//       charCount--;
//       console.log(charCount);
//       if ( charCount < 0 ) {
//         $( "#box" ).remove();
//         this.blur();
//       }
//     }
//   });
// });
// }
