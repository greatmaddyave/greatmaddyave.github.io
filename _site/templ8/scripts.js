$(document).ready(function() {

  //This checks if content should be inside the window
  function contentCheck() {

    if ( $('#htmlShell').hasClass("button2") ) {
      //do something it does have the protected class!
      $(".html").show(500);
      $(".html").fadeIn(500);
    } else {
      $(".html").hide(500);
    };

    if ( $('#jQueryShell').hasClass("button2") ) {
      //do something it does have the protected class!
      $(".jquery").show(500);
    } else {
      $(".jquery").hide(500);
    };

    if ( $('#bootstrapShell').hasClass("button2") ) {
      //do something it does have the protected class!
      $(".bootstrap").show(500);
    } else {
      $(".bootstrap").hide(500);
    };

    if ( $('#jQueryUIShell').hasClass("button2") ) {
      //do something it does have the protected class!
      $(".jqueryui").show(500);
      $(".jquery").show(500);
    } else {
      $(".jqueryui").hide(500);
    };

    if ( $('#bootstrapJsShell').hasClass("button2") ) {
      //do something it does have the protected class!
      $(".bootstrapjs").show(500);
    } else {
      $(".bootstrapjs").hide(500);
    };

  };
    //Styling buttons on click
    $('button').on('click', function() {
      $(this).toggleClass('button2');
      contentCheck();
    });
    //initial check to see if content should load
    contentCheck();
});
