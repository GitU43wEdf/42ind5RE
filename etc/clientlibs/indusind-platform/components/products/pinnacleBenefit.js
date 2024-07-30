$(function(){



var tabsSlider = new Swiper('#tab-slider-0', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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

var tabsSlider1 = new Swiper('#tab-slider-01', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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
var tabsSlider2 = new Swiper('#tab-slider-02', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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


 var tabsSlider3 = new Swiper('#tab-slider-03', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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


var tabsSlider4 = new Swiper('#tab-slider-04', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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

var tabsSlider5 = new Swiper('#tab-slider-05', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,
        freeMode: true,
        freeModeFluid: true,
        autoplay: false,
        speed: 1200,
        grabCursor: true,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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
var $holdrWd0 = $('#tab-slider-0 ul').outerWidth();
    $(document).on('click','#tab-slider-0 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index0 = $('#tab-slider-0 li.active').index(); 
      var $partialWidth0 = $('#tab-slider-0 ul li').map(function(i0, elem0) {
       if(i0 <= $index0){
        return $(elem0).outerWidth(true);
        }
    }).toArray().reduce(function(prev0, curr0) {
        return prev0 + curr0;
    }, 0); 
     if($partialWidth0 > $holdrWd0){
     var $rqWd0 = (Math.floor($holdrWd0 - $partialWidth0) - 60);
      $('#tab-slider-0 ul').css({transform:'translate3d('+$rqWd0+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-0 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    })

    var $holdrWd = $('#tab-slider-01 ul').outerWidth();
    $(document).on('click','#tab-slider-01 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index = $('#tab-slider-01 li.active').index(); 
      var $partialWidth = $('#tab-slider-01 ul li').map(function(i, elem) {
       if(i <= $index){
        return $(elem).outerWidth(true);
        }
    }).toArray().reduce(function(prev, curr) {
        return prev + curr;
    }, 0); 
     if($partialWidth > $holdrWd){
     var $rqWd = (Math.floor($holdrWd - $partialWidth) - 60);
      $('#tab-slider-01 ul').css({transform:'translate3d('+$rqWd+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-01 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    })

    var $holdrWd2 = $('#tab-slider-02 ul').outerWidth();
    $(document).on('click','#tab-slider-02 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index2 = $('#tab-slider-02 li.active').index(); 
      var $partialWidth2 = $('#tab-slider-02 ul li').map(function(i2, elem2) {
       if(i2 <= $index2){
        return $(elem2).outerWidth(true);
        }
    }).toArray().reduce(function(prev2, curr2) {
        return prev2 + curr2;
    }, 0); 
     if($partialWidth2 > $holdrWd2){
     var $rqWd2 = (Math.floor($holdrWd2 - $partialWidth2) - 60);
      $('#tab-slider-02 ul').css({transform:'translate3d('+$rqWd2+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-02 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    })

    var $holdrWd3 = $('#tab-slider-03 ul').outerWidth();
    $(document).on('click','#tab-slider-03 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index3 = $('#tab-slider-03 li.active').index(); 
      var $partialWidth3 = $('#tab-slider-03 ul li').map(function(i3, elem3) {
       if(i3 <= $index3){
        return $(elem3).outerWidth(true);
        }
    }).toArray().reduce(function(prev3, curr3) {
        return prev3 + curr3;
    }, 0); 
     if($partialWidth3 > $holdrWd3){
     var $rqWd3 = (Math.floor($holdrWd3 - $partialWidth3) - 60);
      $('#tab-slider-03 ul').css({transform:'translate3d('+$rqWd3+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-03 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    })

    var $holdrWd4 = $('#tab-slider-04 ul').outerWidth();
    $(document).on('click','#tab-slider-04 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index4 = $('#tab-slider-04 li.active').index(); 
      var $partialWidth4 = $('#tab-slider-04 ul li').map(function(i4, elem4) {
       if(i4 <= $index4){
        return $(elem4).outerWidth(true);
        }
    }).toArray().reduce(function(prev4, curr4) {
        return prev4 + curr4;
    }, 0); 
     if($partialWidth4 > $holdrWd4){
     var $rqWd4 = (Math.floor($holdrWd4 - $partialWidth4) - 60);
      $('#tab-slider-04 ul').css({transform:'translate3d('+$rqWd4+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-04 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });


 var subtabsSlider = new Swiper('.subtabs_slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    freeMode: true,
    freeModeFluid: true,
    autoplay: false,
    speed: 1200,
    grabCursor: true,
    observer: true,
	observeParents: true,

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

    var $sub_holdrWd1 = $('#subtab1_1 ul').outerWidth();
    console.log($sub_holdrWd1);
    $(document).on('click','#subtab1_1 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index1 = $('#subtab1_1 li.active').index(); 
      var $sub_partialWidth1 = $('#subtab1_1 ul li').map(function(sub_i1, sub_elem1) {
       if(sub_i1 <= $sub_index1){
        return $(sub_elem1).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev1, sub_curr1) {
        return sub_prev1 + sub_curr1;
    }, 0); 
     if($sub_partialWidth1 > $sub_holdrWd1){
     var $sub_rqWd1 = (Math.floor($sub_holdrWd1 - $sub_partialWidth1) - 90);
      $('#subtab1_1 ul').css({transform:'translate3d('+$sub_rqWd1+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_1 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });



var tab_content_width = $('.card.tab-pane').width();

  $('#subtab1_2 ul').css('width', tab_content_width);
    var $sub_holdrWd2 = $('#subtab1_2 ul').outerWidth();
    //console.log($sub_holdrWd2);
    $(document).on('click','#subtab1_2 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index2 = $('#subtab1_2 li.active').index(); 
      var $sub_partialWidth2 = $('#subtab1_2 ul li').map(function(sub_i2, sub_elem2) {
       if(sub_i2 <= $sub_index2){
        return $(sub_elem2).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev2, sub_curr2) {
        return sub_prev2 + sub_curr2;
    }, 0); 
     if($sub_partialWidth2 > $sub_holdrWd2){
     var $sub_rqWd2 = (Math.floor($sub_holdrWd2 - $sub_partialWidth2) - 90);
      $('#subtab1_2 ul').css({transform:'translate3d('+$sub_rqWd2+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_2 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

    $('#subtab1_3 ul').css('width', tab_content_width);
    var $sub_holdrWd3 = $('#subtab1_3 ul').outerWidth();
    //console.log($sub_holdrWd2);
    $(document).on('click','#subtab1_3 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index3 = $('#subtab1_3 li.active').index(); 
      var $sub_partialWidth3 = $('#subtab1_3 ul li').map(function(sub_i3, sub_elem3) {
       if(sub_i3 <= $sub_index3){
        return $(sub_elem3).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev3, sub_curr3) {
        return sub_prev3 + sub_curr3;
    }, 0); 
     if($sub_partialWidth3 > $sub_holdrWd3){
     var $sub_rqWd3 = (Math.floor($sub_holdrWd3 - $sub_partialWidth3) - 90);
      $('#subtab1_3 ul').css({transform:'translate3d('+$sub_rqWd3+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_3 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

     $('#subtab1_4 ul').css('width', tab_content_width);
    var $sub_holdrWd4 = $('#subtab1_4 ul').outerWidth();
    console.log($sub_holdrWd4);
    $(document).on('click','#subtab1_4 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index4 = $('#subtab1_4 li.active').index(); 
      var $sub_partialWidth4 = $('#subtab1_4 ul li').map(function(sub_i4, sub_elem4) {
       if(sub_i4 <= $sub_index4){
        return $(sub_elem4).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev4, sub_curr4) {
        return sub_prev4 + sub_curr4;
    }, 0); 
     if($sub_partialWidth4 > $sub_holdrWd4){
     var $sub_rqWd4 = (Math.floor($sub_holdrWd4 - $sub_partialWidth4) - 90);
      $('#subtab1_4 ul').css({transform:'translate3d('+$sub_rqWd4+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_4 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });



    $('#subtab1_5 ul').css('width', tab_content_width);
    var $sub_holdrWd5 = $('#subtab1_5 ul').outerWidth();
    console.log($sub_holdrWd5);
    $(document).on('click','#subtab1_5 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index5 = $('#subtab1_5 li.active').index(); 
      var $sub_partialWidth5 = $('#subtab1_5 ul li').map(function(sub_i5, sub_elem5) {
       if(sub_i5 <= $sub_index5){
        return $(sub_elem5).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev5, sub_curr5) {
        return sub_prev5 + sub_curr5;
    }, 0); 
     if($sub_partialWidth5 > $sub_holdrWd5){
     var $sub_rqWd5 = (Math.floor($sub_holdrWd5 - $sub_partialWidth5) - 90);
      $('#subtab1_5 ul').css({transform:'translate3d('+$sub_rqWd5+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_5 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });



 $('#subtab1_6 ul').css('width', tab_content_width);
    var $sub_holdrWd6 = $('#subtab1_6 ul').outerWidth();
    $(document).on('click','#subtab1_6 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index6 = $('#subtab1_6 li.active').index(); 
      var $sub_partialWidth6 = $('#subtab1_6 ul li').map(function(sub_i6, sub_elem6) {
       if(sub_i6 <= $sub_index6){
        return $(sub_elem6).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev6, sub_curr6) {
        return sub_prev6 + sub_curr6;
    }, 0); 
     if($sub_partialWidth6 > $sub_holdrWd6){
     var $sub_rqWd6 = (Math.floor($sub_holdrWd6 - $sub_partialWidth6) - 90);
      $('#subtab1_6 ul').css({transform:'translate3d('+$sub_rqWd6+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_6 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

     $('#subtab1_7 ul').css('width', tab_content_width);
    var $sub_holdrWd7 = $('#subtab1_7 ul').outerWidth();
    //console.log($sub_holdrWd2);
    $(document).on('click','#subtab1_7 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index7 = $('#subtab1_7 li.active').index(); 
      var $sub_partialWidth7 = $('#subtab1_7 ul li').map(function(sub_i7, sub_elem7) {
       if(sub_i7 <= $sub_index7){
        return $(sub_elem7).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev7, sub_curr7) {
        return sub_prev7 + sub_curr7;
    }, 0); 
     if($sub_partialWidth7 > $sub_holdrWd7){
     var $sub_rqWd7 = (Math.floor($sub_holdrWd7 - $sub_partialWidth7) - 90);
      $('#subtab1_7 ul').css({transform:'translate3d('+$sub_rqWd7+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_7 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

     $('#subtab1_8 ul').css('width', tab_content_width);
    var $sub_holdrWd8 = $('#subtab1_8 ul').outerWidth();
    //console.log($sub_holdrWd2);
    $(document).on('click','#subtab1_8 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index8 = $('#subtab1_8 li.active').index(); 
      var $sub_partialWidth8 = $('#subtab1_8 ul li').map(function(sub_i8, sub_elem8) {
       if(sub_i8 <= $sub_index8){
        return $(sub_elem8).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev8, sub_curr8) {
        return sub_prev8 + sub_curr8;
    }, 0); 
     if($sub_partialWidth8 > $sub_holdrWd8){
     var $sub_rqWd8 = (Math.floor($sub_holdrWd8 - $sub_partialWidth8) - 90);
      $('#subtab1_8 ul').css({transform:'translate3d('+$sub_rqWd8+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_8 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

     $('#subtab1_9 ul').css('width', tab_content_width);
    var $sub_holdrWd9 = $('#subtab1_9 ul').outerWidth();
    //console.log($sub_holdrWd2);
    $(document).on('click','#subtab1_9 ul li', function(e){ 
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $sub_index9 = $('#subtab1_9 li.active').index(); 
      var $sub_partialWidth9 = $('#subtab1_9 ul li').map(function(sub_i9, sub_elem9) {
       if(sub_i9 <= $sub_index9){
        return $(sub_elem9).outerWidth(true);
        }
    }).toArray().reduce(function(sub_prev9, sub_curr9) {
        return sub_prev9 + sub_curr9;
    }, 0); 
     if($sub_partialWidth9 > $sub_holdrWd9){
     var $sub_rqWd9 = (Math.floor($sub_holdrWd9 - $sub_partialWidth9) - 90);
      $('#subtab1_9 ul').css({transform:'translate3d('+$sub_rqWd9+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#subtab1_9 ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    });

//$(".tab-container-height").mCustomScrollbar();
    $('.scrollingtabs').each(function(){

        if( $(this).find('.swiper-button-disabled').length > 1 ){
            console.log('morethan one');
            $(this).closest('.bordered').addClass('remove_arrows');
        }

    })

    $('.bordered').each(function(){

        if($(this).find('figure').length > 0){
        	console.log('has image');
    	}
        else{
           $(this).addClass('remove_border');

        }

    })

    /////////////// for popup anchor open tab /////////////////////////

		$('.modal a').each(function(){
            $(this).click(function(){
              //console.log(this.hash);
              $('.modal').modal('hide');
              $('.nav-tabs a[href="'+ this.hash +'"]').tab('show');

                $('html, body').animate({
                scrollTop: $('.nav-tabs a[href="'+ this.hash +'"]').parent().parent().offset().top - 190
            }, 1000);
                return false;

            });


          })

});