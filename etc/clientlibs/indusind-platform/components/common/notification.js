$(document).ready(function(){
    var searchSuggestionSlider = new Swiper('.search_suggestions', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 1200,
        grabCursor: true,
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
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
               spaceBetween: 20,
            },
            640: {
                slidesPerView:2,
                spaceBetween: 20,
            },
             540: {
                slidesPerView:  1.75,
                spaceBetween: 20,
            },
            360: {
                slidesPerView: 1.25,                
                spaceBetween: 20,
            }
        }
    });
    
    });