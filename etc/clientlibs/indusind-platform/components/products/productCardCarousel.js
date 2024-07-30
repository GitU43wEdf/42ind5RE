var cardBenefitSlider = new Swiper('#saving_advantages_carousel', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1.45,
            spaceBetween: 40,
        },
        360: {
            slidesPerView: 1.45,                
            spaceBetween: 40,
        }
    }
});