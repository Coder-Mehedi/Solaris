$(() => {

    $("nav h6").click(function() {
        $(this).addClass('text-active').siblings().removeClass('text-active');

    });
    $('.one').on('click', function() {
        $('#one').siblings().hide();
        $('#one').css('display', 'flex')
    })

    $('.two').on('click', function() {
        $('#two').siblings().hide();
        $('#two').css('display', 'flex')
    })

    $('.three').on('click', function() {
        $('#three').siblings().hide();
        $('#three').css('display', 'flex')
    })

    $('.four').on('click', function() {
        $('#four').siblings().hide();
        $('#four').css('display', 'flex')
    })

    $('.five').on('click', function() {
        $('#five').siblings().hide();
        $('#five').css('display', 'flex')
    })





    // method method metho

    $("#section-1").on("click", function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#top').offset().top)
        }, 1000);
    })
    $("#section-2").on("click", function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#about-us').offset().top)
        }, 1000);
    })
    $("#section-3").on("click", function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#core-value').offset().top)
        }, 1000);
    })
    $("#section-4").on("click", function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#clients').offset().top)
        }, 1000);
    })
    $("#section-5").on("click", function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#social').offset().top)
        }, 1000);
    })
});