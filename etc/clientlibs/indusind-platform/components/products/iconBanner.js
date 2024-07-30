$(document).ready(function () {
  var indusmobileSlider = new Swiper(".indusmobile-slider", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 700,
    grabCursor: true,
    // init: false,
    pagination: {
      el: ".swiper-pagination-info",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});
