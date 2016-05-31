$( "textarea[maxsize]" ).keypress(function(e) {
  var maxLength = $(this).attr( "maxsize" );
  var charRemaining = 24 - $(this).val().length;

  if( this.value.length > maxLength - 1 ) {
    $( ".characters-remaining" ).text( "Too Verbose! Brevity is the key here!!!");
    $(this).val($(this).val().substring(0, maxLength - 1));
  }

  else {
    $( ".characters-remaining" ).text( charRemaining + " characters remaining.");
    if( e.keyCode === 46 || e.keyCode === 8 ) {
      charRemaining = $(this).val().length;
      $( ".characters-remaining" ).text( charRemaining + " characters remaining." );
    }
  }


});
