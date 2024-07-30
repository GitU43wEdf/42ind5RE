var $swiper;
var mySwiper;

mySwiper = (function() {


    var $swiperContainer = $(".horizontal-swiper-js-container");

    function init1($this) {

		// Swiper elements

        var $el = $this.find('.horizontal-tabs-container');


             $swiper = new Swiper($el, {

                spaceBetween: 0,
                loop: false,
                freeMode: true,
                //freeModeFluid: true,
                autoplay: false,
                speed: 1200,
                grabCursor: true,

				slidesPerView: 'auto',
                slideToClickedSlide: true,

                 initialSlide:  $el.find('.swiper-slide .active'),

				pagination: {
                    el: '.swiper-pagination-info',
                    clickable: false,
                },
                navigation: {
                    nextEl: $el.find('.swiper-button-next'),
                    prevEl: $el.find('.swiper-button-prev'),
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
                        //slidesPerView: 'auto',
                        spaceBetween: 0,
                        //slidesPerView: 2,
                    },
                    360: {
                        //slidesPerView: 'auto',         
                        spaceBetween: 0,
                    }
                }
            });

    }

	// Events
	//$(document).ready(function() {
		if ($swiperContainer.length) {
			$swiperContainer.each(function(i, Slider) {
				init1($(Slider));
			})
		}
    //});



})();

$(function(){


    $('#secNavMain.nav-tabs-parent .nav-link').on('click', function(e) {

		var linkid = $(this).attr('href');
		$('#secNavMain.nav-tabs-parent .nav-item:first-child .nav-link, #secNavMain.nav-tabs-parent .nav-item:first-child').removeClass('active');
        $(linkid).siblings().css({'height':0, 'overflow': 'hidden'});
        $(linkid).css({'height':'auto', 'overflow': 'visible'});

	});



});

$(window).on('load', function(){

    /*if (window.location.href.indexOf("?id") < 1) {
		console.log('not with deeplink');
        $('#secNavMain.nav-tabs-parent .nav-item:first-child .nav-link').click();
    }
    else{
		console.log('with deeplink');
    }*/

});

$(document).ready(function () {
  setTimeout(function () {
    console.log(par);
    $("[id='" + par + "']").trigger("click");
  }, 1000);

  var num = getBrowserId();

  if (num != -1) {
    urlParams = new URLSearchParams(window.location.search);

    var id = urlParams.get("id");
    var pid = $("#" + id).attr("class");
    console.log("urlParams " + urlParams);
    if (id != null && pid != undefined) {
      console.log("id " + id);
      var test = $(".de").children("div");
      test.removeClass("active");

      $(".df").removeClass("active");
      setTimeout(() => {
        $(`#${id}`).trigger("click");
        $(document).find(`#${id}`).trigger("click");
      }, 100);
    } else {
      $("#secNavMain.nav-tabs-parent .nav-item:first-child .nav-link").click();
    }
  } else if (num == -1) {
    var id = $.urlParam("id");
    if (typeof id != "undefined") {
      $(".de").removeClass("active");
      $("." + id).addClass("active");
    }
  }

  var ratepageUrl = window.location.hash.slice(1);
  console.log(ratepageUrl);

  if (ratepageUrl == "saving-bank-account-interest-rate") {
    $('.nav-tabs a[href="#saving-account"]').tab("show");
  }
  if (ratepageUrl == "cfd-loans-rates") {
    $('.nav-tabs a[href="#cfd-loans"]').tab("show");
  }
  if (ratepageUrl == "mclr-rate") {
    $('.nav-tabs a[href="#mclr-rate"]').tab("show");
  }
  if (ratepageUrl == "fd-rates") {
    // $('.nav-tabs a[href="#term-deposit"]').tab('show')
  }
  if (ratepageUrl == "domestic-nro-nre-rates") {
    $('.nav-tabs a[href="#term-deposit"]').tab("show");
  }
  if (ratepageUrl == "fd-rates-sr") {
    $('h2[data-target="#fd-rates-sr"]').addClass("collapsed");
    $("#fd-rates-sr").removeClass("show");
  }

  var newId;
  idSelector();

  function idSelector() {
    let currentUrl = window.location.href;
    console.log({ currentUrl });

    let endIndex = currentUrl.length;
    console.log({ endIndex });
    let startIndex = currentUrl.indexOf("#");
    console.log({ startIndex });

    let guid = currentUrl.slice(startIndex, endIndex);

    var newId = guid.replace("#", "");
    par = newId;
    console.log("++++++++++ " + guid);

    var $moburl = window.location.hash.slice(1);
    console.log($moburl);

    if ($moburl) {
      setTimeout(function () {
        $("html, body").animate(
          {
            scrollTop: $("#" + $moburl).offset().top - 210,
          },
          500
        );
      }, 2500);
    }
  }

  function getBrowserId() {
    var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
      sUsrAg = navigator.userAgent,
      nIdx = aKeys.length - 1;
    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
    return nIdx;
  }

  $("#secNavMain li").first().addClass("active");
  if (window.location.href.indexOf("corporate-announcement") != -1) {
    $("#secNavMain li").first().removeClass("active");
  }
});

$(window).on("load", function () {
  var $secNavMain = $("#secNavMain");
  var $navLinks = $secNavMain.find(".nav-link");
  var totalWidth = $navLinks.toArray().reduce(function (acc, link) {
    return acc + $(link).outerWidth(true);
  }, 0);
  $navLinks.on("click", function () {
    var $clickedLink = $(this);
    var clickedIndex = $clickedLink.parent("li").index();
    if (clickedIndex >= $navLinks.length - 2.2) {
      return;
    }
    var translateValue = $navLinks
      .toArray()
      .slice(0, clickedIndex)
      .reduce(function (acc, link) {
        return acc + $(link).outerWidth(true);
      }, 0);
    if ($(window).width() > 767) {
      $secNavMain.css({
        transform: "translateX(-" + 1.12 * translateValue + "px)",
        transition: "transform 0.8s ease",
      });
    } else {
      $secNavMain.css({
        transform: "translateX(-" + translateValue + "px)",
        transition: "transform 0.8s ease",
      });
    }
    $navLinks.removeClass("active");
    $clickedLink.addClass("active");

    var targetTabId = $clickedLink.attr("href");
    $(".card_select_wrap .tab-pane").removeClass("active show");
    $(targetTabId).addClass("active show");
  });
});

