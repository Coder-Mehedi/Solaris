$(() => {

    $("nav h6").click(function() {
        $(this).addClass('text-active').siblings().removeClass('text-active');

    });

    // Menu toggle

    $('.hamburger').on('click', () => {
        $('nav.main-nav').toggleClass('show-nav');
        // alert('clickked');
    })


    // Change Active Menu as you scroll with JQuery


    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + 1,
            sectionOneOffset = $('#top').offset().top,
            sectionTwoOffset = $('#about-us').offset().top,
            sectionThreeOffset = $('#core-value').offset().top,
            sectionFourOffset = $('#clients').offset().top,
            sectionFiveOffset = $('#social').offset().top;

        scroll >= sectionOneOffset ? $("#section-1").addClass("active") : $("#section-1").removeClass("active");

        if (scroll >= sectionTwoOffset) {
            $("#section-2").parent().find('.active').removeClass('active');
            $("#section-2").addClass("active");
        } else {
            $("#section-2").removeClass("active");
        }
        if (scroll >= sectionThreeOffset) {
            $("#section-3").parent().find('.active').removeClass('active');
            $("#section-3").addClass("active");
        } else {
            $("#section-3").removeClass("active");
        }
        if (scroll >= sectionFourOffset) {
            $("#section-4").parent().find('.active').removeClass('active');
            $("#section-4").addClass("active");
        } else {
            $("#section-4").removeClass("active");
        }
        if (scroll >= sectionFiveOffset) {
            $("#section-5").parent().find('.active').removeClass('active');
            $("#section-5").addClass("active");
        } else {
            $("#section-5").removeClass("active");
        }
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
        // $(this).parent().find('.active').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#top').offset().top)
        }, 1000);
    })
    $("#section-2").on("click", function() {
        // $(this).parent().find('.active').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#about-us').offset().top)
        }, 1000);
    })
    $("#section-3").on("click", function() {
        // $(this).parent().find('.active').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#core-value').offset().top)
        }, 1000);
    })
    $("#section-4").on("click", function() {
        // $(this).parent().find('.active').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#clients').offset().top)
        }, 1000);
    })
    $("#section-5").on("click", function() {
        // $(this).parent().find('.active').removeClass('active');
        // $(this).addClass('active');
        $('html, body').animate({
            scrollTop: ($('#social').offset().top)
        }, 1000);
    })
});