$(document).ready(function(){

    var stepBoxLen = $(".easy_step_slider .swiper-slide").length;    
    if ($(window).width() > 1024){
        if(stepBoxLen > 4){
            $(".easy_step .arrow-navigation").show();
        }
        else{
            $(".easy_step .arrow-navigation").hide();
        }
    }

    var cardBenefitSlider = new Swiper('.easy_step_slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        freeMode: true,
        freeModeFluid: true,
        autoplay: false,
        speed: 1200,
        grabCursor: true,
        // init: false,
        pagination: {
            el: '.swiper-pagination-info',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            360: {
                slidesPerView: 1,
                spaceBetween: 40,
            }
        }
    });
});