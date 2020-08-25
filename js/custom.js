$(function () {
    // 1. Aos initialize
    AOS.init();

    //2. Back top button fadein fadeout / menu add class  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.navbar').addClass('navauto');
        } else {
            $('.navbar').removeClass('navauto');
        }
        if (scrolling > 250) {
            $('.back-to-top').fadeIn(500);
        } else {
            $('.back-to-top').fadeOut(500);
        }
    });

    //3. Recent house slick-slider  
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        speed: 500,
        nextArrow: '.fa-angle-right',
        prevArrow: '.fa-angle-left',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    //4. Back to Top    
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // //5. Animation scroll js
    // var html_body = $('html, body');
    // $('.navbar a').on('click', function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             html_body.animate({
    //                 scrollTop: target.offset().top - 50
    //             }, 1500, );
    //             return false;
    //         }
    //     }
    // });


});