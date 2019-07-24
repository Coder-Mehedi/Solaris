$(() => {
    $("#section-2").on("click", function() {
        $('html, body').animate({
            scrollTop: ($('#about-us').offset().top)
        }, 500);
    })
    $("#section-1").on("click", function() {
        $('html, body').animate({
            scrollTop: ($('#top').offset().top)
        }, 500);


    })

});