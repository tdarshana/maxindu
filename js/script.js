$(document).ready(function() {
    // disable inage download
    $("body").on("contextmenu", "img", function(e) {
      return false;
    });

    // Scrolling to specific location
    $("#navHome").click(function() {
        $('html,body').animate({
            scrollTop: $(".mainCont").offset().top},
            'slow');
    });
});