$(document).ready(function () {
    $('.parallax-0').css('padding-top', '40vh');
    $('.landing-content').css('opacity', '0');
    $(".parallax-0").animate({
        paddingTop: '20vh'
    }, 1000)
    $('.landing-content').animate({
        opacity: '1'
    }, 1000);

        $(window).scroll( function(){
            $('.fadein').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window + 100 > bottom_of_element ){
                    $(this).animate({'opacity':'1'},1000);
                }
                
            }); 
        });

})