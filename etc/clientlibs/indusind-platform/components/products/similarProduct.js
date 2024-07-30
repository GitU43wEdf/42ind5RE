$(document).ready(function () {
  var similarProductSlider = new Swiper(".product-card", {
    slidesPerView: 3,
    spaceBetween: 20,
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
      el: ".swiper-pagination-info",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      641: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 1.35,
        spaceBetween: 20,
      },
    },
  });
});
