$(document).ready(function(){

    var test = window.location.href.indexOf("editor") > 1    
    if (test == false){
        $(".featurecard").addClass("swiper-slide");
    }

    var cardLen = $(".indus_digital_saving_account .swiper-slide").length;    
    if ($(window).width() > 1024){
        if(cardLen > 3){
            $(".digital_saving_account .arrow-navigation").show();
        }
        else{
            $(".digital_saving_account .arrow-navigation").hide();
        }
    } 

    var trendingTopicsSlider = new Swiper('.indus_digital_saving_account', {
        slidesPerView: 1,
        spaceBetween: 20,
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
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
    
        }
    });

});
