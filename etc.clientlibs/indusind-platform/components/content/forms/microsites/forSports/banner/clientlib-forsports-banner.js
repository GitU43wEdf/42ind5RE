$(document).ready(function(){    
     var swiper = new Swiper('.sportsBannerCont', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });    
});