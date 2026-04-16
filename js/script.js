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

    $('#prices-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#prices').offset().top
        }, 1000);
    });
    $('#info-btn').click(function () {
        window.location.href = "./info.html";
    });

    showSlides(slideIndex);

    if($(window).width() >= 1024){
        
      }

   

    if($(window).width() < 680){
        $('.parallax-0').css('background-position', 'center ' + 0 + 'px');
    }

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});
    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        if($(window).width() < 680){
            $('.parallax-0').css('background-position', 'center ' + ((scrolledY)) + 'px');
        }
      });

})
