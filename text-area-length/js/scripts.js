$( "textarea[maxsize]" ).keydown(function(e) {
  var maxLength = $(this).attr( "maxsize" );
  var charRemaining = maxLength - $(this).val().length - 1;

  if( this.value.length > maxLength - 1 ) {
    $( ".characters-remaining" ).text( "Too Verbose! Brevity is the key here!!!");
    $(this).val( $(this).val().substring(0, maxLength - 1) );
  }

  else {
    $( ".characters-remaining" ).text( charRemaining + " characters remaining.");
    if( e.keyCode === 46 || e.keyCode === 8 ) {
      charRemaining = maxLength - $(this).val().length + 1;
      $( ".characters-remaining" ).text( charRemaining + " characters remaining." );
    }
  }


});
