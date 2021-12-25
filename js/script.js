$(document).ready(function () {
    $('.join-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact-us').offset().top
        }, 1000);
    });

    $('#about-us-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#about-us').offset().top
        }, 1000);
    });

    $('#gallery-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('.gallery-page').offset().top
        }, 1000);
    });

    $('#contact-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact-us').offset().top
        }, 1000);
    });

    showSlides(slideIndex);

    if($(window).width() >= 1024){
        
      }

   

    if($(window).width() < 680){
        $('.parallax-0').css('background-position', 'center ' + 0 + 'px');
    }


    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        if($(window).width() < 680){
            $('.parallax-0').css('background-position', 'center ' + ((scrolledY)) + 'px');
        }
      });

})