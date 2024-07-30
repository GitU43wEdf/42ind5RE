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

    var cardBenefitSlider = new Swiper('.offer_credit_card_slider', {
    slidesPerView: 1,
    spaceBetween: 40,
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
        nextEl: '.swiper-button-next-offer',
        prevEl: '.swiper-button-prev-offer',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    }
  });

    var stepSlide = $(".offer_credit_card_slider .swiper-slide").length;
    console.log(stepSlide);    
    if ($(window).width() > 1200){
        if(stepSlide > 3){
            $(".offer_step .arrow-navigation").show();
        }
        else{
            $(".offer_step .arrow-navigation").hide();
        }
    }
});