$(document).ready(function () {
    $('.sitemap_section .horizontal-tabs-container.scrollingtabs ul li:first-child a').addClass('active show');
    $('#sitemap_personal').addClass('active show');

	$("a[href='#sitemap_inclusive']").removeAttr('data-toggle').attr("href", "/content/indusind-corporate/en/inclusive-banking.html");



});

/*var sliderCount = $('.horizontal-tabs-container').length;
//alert(sliderCount);

for (var i =1; i <= sliderCount; i++){
    //console.log('#tab-slider-0' + i);

    var tabSlider = 'tabsSlider' + (i); 
//console.log(tabSlider);
var tabsSlider = new Swiper('#tab-slider-0' + i, {
    slidesPerView: 'auto',
    spaceBetween: 0,
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
}

$(function(){
    for (var j =1; j <= sliderCount; j++){
       var $holdrWd = '$holdrWd' + (j); 
     $holdrWd = $('#tab-slider-0' + j + 'ul').outerWidth();
    $(document).on('click','#tab-slider-0' + j + ' ul li', function(e){ 
        alert('');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var $index = '$index' + (j); 
        $index = $('#tab-slider-0' + j + ' li.active').index(); 
      var $partialWidth = '$partialWidth' + (j);
      
       $partialWidth = $('#tab-slider-0' + j + ' ul li').map(function(k, elem) {
        
       if(k <= $index){
           //alert('');
            return $(elem).outerWidth(true);
        }
    }).toArray().reduce(function(prev, curr) {
        return prev + curr;
    }, 0); 
     if($partialWidth > $holdrWd){
        var $rqWd = '$rqWd' + (j);
        $rqWd = (Math.floor($holdrWd - $partialWidth) - 60);
        console.log($rqWd);
      $('#tab-slider-0' + j + ' ul').css({transform:'translate3d('+$rqWd+'px, 0px, 0px)', transition:'.5s ease'})  
     }else{
        $('#tab-slider-0' + j + ' ul').css({transform:'translate3d(0px, 0px, 0px)', transition:'.5s ease'}) 
     }
    })

    }
});
*/



var tabsSlider1 = new Swiper('#tab-slider-01', {
    slidesPerView: 'auto',
    spaceBetween: 0,
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

})(jQuery)


/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
(function ($) {
    'use strict';
    // variables
    var contextWindow = $(window);
    // ----------------------
    // ++ Header .. Start
    // ------------------------
    // Desktop Hover navigation 
    $('.tg-themetabnav > li > a').hover(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });
    // End

    // Desktop onClick navigation

    // $('.tg-themetabnav > li > a').on('click',function() {
    // 	if($(this).parent().hasClass('active')){
    //         $(this).parent().siblings().removeClass('active');
    //         $(this).parent().siblings().find('.tab-pane').removeClass('active');
    //         $(this).parent().removeClass('active');
    //     }else{
    //         $(this).parent().siblings().removeClass('active');
    //         $(this).parent().siblings().find('.tab-pane').removeClass('active');
    //         $(this).parent('li').addClass('active');
    //         $(this).parent().find('.tab-pane').addClass('active');
    //     }
    // });

    $('.tg-small-nav li a').on('click',function() {
       // $(this).off('click');
        $('.dropdown-animate[data-toggle=hover]').removeClass('active show');
    	if($(this).parent().hasClass('active')){
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });

    // End
 
    // ----------------------
    //  Header .. End
    // ------------------------

    // ----------------------
    // ++ Banner Slider .. Start
    // ------------------------    
    $(document).ready(function () {
        $('ul.product-tabs li.tab-link a').click(function () {
            var tab_id = $(this).attr('data-tab');
            $('ul.product-tabs li.tab-link a').removeClass('active');
            $('.product-tab-content .tab-pane').removeClass('show active');
            $(this).addClass('active');
            $("#" + tab_id).addClass('show active');
            // Swiper update on tab show
            $("#" + tab_id).find('.swiper-container')[0].swiper.update();
            $('.product-section').removeClass('bg-assist');
        });
        // ----------------------
        // ++ ellipsis text minimum line .. Start
        // ------------------------
        $('.ellipsis-single-line').ellipsis({
            lines: 1, // force ellipsis after a certain number of lines. Default is 'auto'
            ellipClass: 'ellip', // class used for ellipsis wrapper and to namespace ellip line
            responsive: true // set to true if you want ellipsis to update on window resize. Default is false
        });

        $('.two-lines').ellipsis({ lines: 2, responsive: true});
        $('.three-lines').ellipsis({ lines: 3, responsive: true});

        $('.ellipsis-triple-line').ellipsis({
            lines: 3, // force ellipsis after a certain number of lines. Default is 'auto'
            ellipClass: 'ellip', // class used for ellipsis wrapper and to namespace ellip line
            
        });
    });
    // ----------------------
    //  Banner Slider .. End
    // ------------------------ 
    if (contextWindow.width() > 992) {
        var btnSwiperFunction = function () {
            $(this).parent().parent().siblings().find('.swiper-nav').addClass('overflow-lg-hidden');
            $(this).parent().parent().siblings().find('.btn-swiper').fadeIn(100);
            $(this).parent().removeClass('overflow-lg-hidden');
            $(this).fadeOut(100);
        };
        $('.btn-swiper').on('click.thumb', btnSwiperFunction);
        // $('.btn-swiper').on('mouseenter',btnSwiperFunction);
        // $('.btn-swiper').on('mouseexit',function();

        $('.indusassist-lg').click(function () {
            $('.product-section').addClass('bg-assist');
            $('.btn-swiper').parent().parent().siblings().find('.swiper-nav').addClass('overflow-lg-hidden');
            $('.btn-swiper').parent().parent().siblings().find('.btn-swiper').fadeIn(100);
            // $('#fancybox_indusassist').addClass('d-flex'); 
        });
        $('.cross-assist a').click(function () {
            $('.product-section').removeClass('bg-assist');
            $('#fancybox_indusassist').removeClass('show active');
            $('#personal-tab-default').addClass('show active');
        });
    }

    if (contextWindow.width() > 300) {
        $('.text-slide-in').each(function() {
            // separates line
            var $t = $(this),
                lines = $.trim($t.html()).split('<br>');

            $t.html('');
            // separate letter
            $.each(lines, function(i, val) {
                $('<span class="line"></span>').appendTo($t);
                val = $("<textarea />").html(val).text();
                var letters = $.trim(val).split('');

                $.each(letters, function(j, v) {
                    v = (v == ' ') ? '&nbsp;' : v;
                    $('<span class="letter">' + $.trim(v) + '</span>').appendTo($('.line:last', $t));
                });

            });
        });
    }

    var swipermain = new Swiper('.main-slider', {
        spaceBetween: 0,
        // simulateTouch:false,
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        pagination: {
            el: '.swiper-pagination-main',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 7,
        freeMode: true,
        freeModeFluid: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 600,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            990: {
                slidesPerView: 4,
                spaceBetween: 0,                
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 0,
                
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            360: {
                slidesPerView: 3,
                spaceBetween: 0,
                
            }
        }
    });
   
    /*var productSlider = new Swiper('.product-card', {
        observer: true,
    });*/
    
    var infoslider = new Swiper('.important-info-slider', {
        slidesPerView: 5,
        spaceBetween: 2,
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
                slidesPerView: 4,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            360: {
                slidesPerView: 1.25,                
                spaceBetween: 1,
            }
        }
    });

    

    var kycslider = new Swiper('.kyc-slider', {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
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
            el: '.swiper-pagination-kyc',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var topsearchslider = new Swiper('.top-search', {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1200,
        grabCursor: true,
        // init: false,
        pagination: {
            el: '.swiper-pagination-search',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            990: {
                slidesPerView: 3,
                spaceBetween: 0,                
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            360: {
                slidesPerView: 1.25,
                spaceBetween: 0,
                
            }
        }
    });

    var cardBenefitSlider = new Swiper('.card-benefit-slider', {
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
                spaceBetween: 2,
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
                slidesPerView: 1.25,                
                spaceBetween: 40,
            }
        }
    });

    var trendingTopicsSlider = new Swiper('.trending-topics-slider', {
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
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            360: {
                slidesPerView: 1.25,                
                spaceBetween: 20,
            }
        }
    });

    var cardBenefitSlider = new Swiper('.card-privileges-slider', {
        slidesPerView: 4,
        spaceBetween: 60,
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
                spaceBetween: 2,
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
                slidesPerView: 1.25,                
                spaceBetween: 40,
            }
        }
    });
    
    
    // });
    $('.swiper-button-next').on('click', function(e) {
        e.preventDefault();
        mySwipe.next();
      });
      $('.swiper-button-prev').on('click', function(e) {
        e.preventDefault();
        mySwipe.prev();
      });

})(jQuery);


///////////////headerbg/////////////////
$(document).ready(function(){
    $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseover(function(){
        $('.overlay-navright').stop().fadeIn(200);
    });
    $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseout(function(){
        $('.overlay-navright').stop().fadeOut(100);
    });
    $('.btn-rounded-rb').click(function(){
        if($('.dropdown-menu-right').hasClass('show')){
            $('.overlay-navright').hide();
        }
        else{
            $('.overlay-navright').show();
        }
    });

    /* clicked menu */
    
    $('.dd_click a').click(function(){
        $(this).parent().toggleClass('active');
        $('.overlay-navright').show();
       
        if($(this).parent().hasClass('show')){
            $('.overlay-navright').hide();
        }
       
       // $('.dd_click .dropdown-menu').removeClass('hide').addClass('show');
    });

    $(document).click(function(e){
        $('.overlay-navright').hide();
      
            $('.bt-action-login').removeClass('active');
       

    });

    $('.tg-themetabnav li a').mouseenter(function(){
        $('.tg-themetabnav li').removeClass('active');
        $(this).parent('li').addClass('active');
    })
});
///////////////headerbg/////////////////

////// for loading product ///////////////
window.onload = function() {
    $('.product-section').css('opacity','1');

};
////// @end for loading product ///////////////

$('.dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and 
    // therefore delegated events won't be fired
    event.stopPropagation();
});

$('.ddlogin_link:first-child, .ddlogin_link:first-child a').addClass('active');
$('.ddlogin_link:first-child, .ddlogin_link:first-child a').addClass('active');

$('.ddlogin_link').click(function(){
    $('.login_list').hide();
    $('.ddlogin_link, .ddlogin_link a').removeClass('active');
    
    $(this).addClass('active');
    $(this).find('a').addClass('active')
    $(this).find('ul').show();
});
$(function(){
$('.bt-action-login .btn-primary').on('click', function(){
    if($('.bt-action-login .dropdown').hasClass('show')){
        $('.bt-action-login').removeClass('active');
    }
    else{
        $('.bt-action-login').addClass('active');
    }
});

});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab

});  

if ($(window).width() > 991) {
$('.dropdown[data-toggle=hover]')
  .mouseover(function() {
    $( this ).addClass('show').attr('aria-expanded',"true");
    $( this ).find('.dropdown-menu').addClass('show');
  })
  .mouseout(function() {
    $( this ).removeClass('show').attr('aria-expanded',"false");
    $( this ).find('.dropdown-menu').removeClass('show');
});
}





