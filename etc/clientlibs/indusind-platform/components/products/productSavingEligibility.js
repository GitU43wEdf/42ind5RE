var indusmobileSlider = new Swiper('.eligibility-slider', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 700,
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
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        380: {
            slidesPerView: 1,                
            spaceBetween: 10,
        }
    }
});

$(function(){

if ($(".card-header .tag").html().length > 0) {
    //console.log('testing for tag');
     $(".card-header .tag").show();
   }  
    else{
        //console.log('testing for tag');
        $(".card-header .tag").hide();
    }
});