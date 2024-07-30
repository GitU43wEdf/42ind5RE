$(document).ready(function(){
    $('.criteria_detail .nav-item a').click(function(){
    $(".ed").hide();
  });
  $(".criteria_detail .nav-item #e4").click(function(){
    $(".ed").show();
      $('#eligibility_location > .row').hide();
  });


     var tabsSlider_eligibility = new Swiper('.subtabs_eligibility', {
     slidesPerView: 'auto',
     spaceBetween: 0,
     loop: false,
     freeMode: true,
     freeModeFluid: true,
     autoplay: false,
     speed: 1200,
     grabCursor: true,

     breakpoints: {
         1024: {
             slidesPerView: 'auto',
             spaceBetween: 0,
         },
         768: {
             slidesPerView: 'auto',
             spaceBetween: 0,
         },
         640: {
             slidesPerView: 'auto',
             spaceBetween: 0,
         },
         360: {
             slidesPerView: 'auto',         
             spaceBetween: 0,
         }
     }
 });

 (function($){
     var $holdrWd = $('.swiper-container.subtabs_eligibility ul').outerWidth();
     $(document).on('click','.swiper-container.subtabs_eligibility ul li', function(e){ 
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
       var $index = $('.swiper-container.subtabs_eligibility li.active').index(); 
       var $partialWidth = $('.swiper-container.subtabs_eligibility ul li').map(function(i, elem) {
        if(i <= $index){
         return $(elem).outerWidth(true);
         }
     }).toArray().reduce(function(prev, curr) {
         return prev + curr;
     }, 0); 
      if($partialWidth > $holdrWd){
      var $rqWd = (Math.floor($holdrWd - $partialWidth) - 30);
       $('.swiper-container.subtabs_eligibility ul').css({transform:'translate3d('+$rqWd+'px, 0px, 0px)', transition:'.5s ease'})  
      }else{
         $('.swiper-container.subtabs_eligibility ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
      }
     })
 })(jQuery)



});
