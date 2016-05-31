$( function() {
  "use strict";
});

$( ".click-me-button" ).click( function(e) {
  $( ".modal" ).show();
  e.preventDefault();
  e.stopPropagation();
});

$( ".close-button, body" ).click( function() {
  $( ".modal" ).hide();
});
