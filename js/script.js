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
})