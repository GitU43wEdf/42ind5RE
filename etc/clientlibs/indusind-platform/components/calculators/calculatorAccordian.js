$(document).ready(function(){
    $('#collapse11').attr('class' , 'tab-pane fade h-100 active show');
    $("[href$='collapse11']").attr("class","nav-link active show h-100");



/* left page nav */

nav_html = $('nav.left_pagenav').html();
$('.drawer_box').html(nav_html);
$('.handle_head').click(function(){
$(this).parents('.mob_left_menu').toggleClass('open');

   if ($(".mob_left_menu").hasClass("open")) {
      console.log('open');
       $('body').addClass('noscroll bodyfix');
   }	
   else{
       console.log('closed');
       $('body').removeClass('noscroll bodyfix');
   }

});
$('.left_pagenav ul li a').click(function(){
    $('.resizeinputbox').css('width','84px');
$(this).parents('.mob_left_menu').removeClass('open');
   $('.vehicle-tab-container').show();

   $('#customRadio_4w_1').parent().addClass('active');
   $('#customRadio_4w_2').parent().removeClass('active');
   $('#customRadio_4w_1').prop('checked', true);
   $('#customRadio_4w_2').prop('checked', false);

$('body').removeClass('noscroll bodyfix');
if($(window).width() < 992){
$('html, body').animate({
scrollTop: $(".calc_container").offset().top - 60
}, 1000)
}
});

});
$(document).ready(function(){
$('.nav-link').on('click', function(){
   var a = $(this).parents('ul').siblings('ul').children('li').children('a').attr('class', 'nav-link');
   $(".loan_inputs").show();
   $(".loan_calculated").hide();
   $(".selected_items").hide();
   $(".homeSelected_items").hide();
   $("#vehicleListingLoanInputs").show();
   $(".nav-link.ml-3.show").addClass('active');
   $("#vehicle-tab-containerCheck").show()

   $("#retirementLoanInputs").show();
   $("#systematicLoanInputs").show();
   $("#goalLoan_inputs").show();
   $("#fdLoan_inputs").show();
   $("#personalLoanInputs").show();
   $("#homeLoanInputs").show();

   $("#vehicleLoan_calculated").hide();
   $("#retirementLoan_calculated").hide();
   $("#systematicLoan_calculated").hide();
   $("#homeLoan_calculated").hide();
   $("#goalLoan_calculated").hide()
   $("#fdLoan_calculated").hide();
   $("#PersonalLoan_calculated").hide();
});

});

$('.nav-link').on('click', function(){
    $(".form_goalCalculator")[0].reset();
    $("#goalYear").selectpicker('refresh');
    $(".form_FixedDeposit")[0].reset();
    $("#tenureYear").selectpicker('refresh');
    $("#month").selectpicker('refresh');
    $(".form_retirementCalculator")[0].reset();
    $("#currentAge").selectpicker('refresh');
    $("#retirementAge").selectpicker('refresh');
    $("#afterRetirementAge").selectpicker('refresh');
    $(".form_SystematicCalculator")[0].reset();
    $("#systematicYears").selectpicker('refresh');
    $(".form_HomeLoan")[0].reset();
    $("#homeTenure").selectpicker('refresh');
    $(".form_Personaloan")[0].reset();
    $("#personalTenure").selectpicker('refresh');
    $(".form_VehicleLoan")[0].reset();
    $("#vehicleListingYears").selectpicker('refresh');



});


$('.mob_left_menu').on('click', function(){
    $(".form_goalCalculator")[0].reset();
    $("#goalYear").selectpicker('refresh');
    $(".form_FixedDeposit")[0].reset();
    $("#tenureYear").selectpicker('refresh');
    $("#month").selectpicker('refresh');
    $(".form_retirementCalculator")[0].reset();
    $("#currentAge").selectpicker('refresh');
    $("#retirementAge").selectpicker('refresh');
    $("#afterRetirementAge").selectpicker('refresh');
    $(".form_SystematicCalculator")[0].reset();
    $("#systematicYears").selectpicker('refresh');
    $(".form_HomeLoan")[0].reset();
    $("#homeTenure").selectpicker('refresh');
    $(".form_Personaloan")[0].reset();
    $("#personalTenure").selectpicker('refresh');
    $(".form_VehicleLoan")[0].reset();
    $("#vehicleListingYears").selectpicker('refresh');



});



/* add when footer is available */
/*
$.fn.isInViewport = function() {
   var elementTop = $(this).offset().top + 300;
   var elementBottom = elementTop + $(this).outerHeight();

   var viewportTop = $(window).scrollTop();
   var viewportBottom = viewportTop + $(window).height();

   return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function() {
   if ($('footer').isInViewport()) {
       console.log('footer in view');
       $('.mob_left_menu').addClass('d-none');
   } else {
       $('.mob_left_menu').removeClass('d-none');
   }
}); */


/* end left nav */
"use strict";

$(function () {
  /* loan calculator */
  $('input[type=radio]').click(function () {
    if ($(this).is(':checked')) {
      $('.custom-radio').removeClass('active');
      $(this).parent().addClass('active');
    }
  });
  $('.calc_main .selected_items, .calc_main .loan_calculated, .link_compare_close').hide();
  $('.btn_calculate_emi').click(function (e) {
    e.preventDefault(); //alert('');

    $(this).parents('.calc_main').find('.loan_inputs').hide();
    $(this).parents('.calc_main').find('.vehicle-tab-container').hide();
    $(this).parents('.calc_main').find('.loan_calculated').show();
    $(this).parents('.calc_main').find('.selected_items').show(); // $('.calc_main .vehicle-tab-container, .calc_main .loan_inputs').slideUp('slow');
    // $('.calc_main .selected_items, .calc_main .loan_calculated').slideDown('slow');
  });
  $('.btn_reload_calc').click(function (e) {
    e.preventDefault();
    $('.calc_main .selected_items, .calc_main .loan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
    $('.compare_col .link_compare').show();
    $('.calc_main .vehicle-tab-container, .calc_main .loan_inputs').slideDown('slow');
    $(this).parents('.calc_main').find('.calc_box .resizeinputbox').css('width', '84px'); //$('.resizeinputbox').removeAttr('style'); 
  });
  $('.vehicleType').click(function () {
    $(this).parents('.calc_main').find('.calc_box .resizeinputbox').css('width', '84px');
  });
  $('.link_compare').click(function (e) {
    e.preventDefault();
    $(this).parents('.calc_main').find('.loan_calculated').find('.compare_col').show();
    $(this).parents('.calc_main').find('.compare_col_added').find('.calc_box:first-child').show();
    $(this).parents('.calc_main').find('.compare_col_added').find('.calc_box:last-child').hide();
    $(this).parents('.calc_main').find('.loan_calculated').find('.compare_col .link_compare_close').show(); // $('.loan_calculated .compare_col, .compare_col_added .calc_box:first-child').fadeIn('slow');
    // $('.compare_col_added .calc_box:last-child').hide();

    $(this).hide(); // $('.loan_calculated .compare_col .link_compare_close').show();

    $(this).next().show();
    $(this).parents('.calc_main').find('.compare_col_added').find('.calc_box .resizeinputbox').css('width', '84px');
  });
  $('.link_compare_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.col-md-6').hide();
    $(this).parents('.calc_main').find('.link_compare_close').hide();
    $(this).parents('.calc_main').find('.link_compare').show(); //$('.resizeinputbox').removeAttr('style'); 
  });
  /* 
    $('.nav-link').click(function(e){
         e.preventDefault();
         $('.resizeinputbox').removeAttr('style'); 
     });
  */

  /* @end loan calculator */

  /* goal calculator */

  $('.btn_goal_calc').click(function (e) {
    e.preventDefault();
    $(".goalcalc_tellme").show();
    var header_height = 108;
    $('html, body').animate({
      scrollTop: $(".goalcalc_tellme").offset().top - header_height
    }, 1000);
  });
  /* @end goal calculator */

  /* Systematic Investments Calculator */

  $('.btn_systematicinvest_calc').click(function (e) {
    e.preventDefault();
    $(".systematicinvest_tellme").show();
    var header_height = 108;
    $('html, body').animate({
      scrollTop: $(".systematicinvest_tellme").offset().top - header_height
    }, 1000);
  });
  /* @end Systematic Investments Calculator */

  /* retirement Calculator */

  $('.btn_retire_calc').click(function (e) {
    e.preventDefault();
    $(".retirement_tellme").show();
    var header_height = 108;
    $('html, body').animate({
      scrollTop: $(".retirement_tellme").offset().top - header_height
    }, 1000);
  });
  /* @end retirement Investments Calculator */

  var Plugins;

  (function (n) {
    var t = function () {
      function n(n) {
        typeof n == "undefined" && (n = 30);
        this.space = n;
      }

      return n;
    }(),
        i;

    n.AutosizeInputOptions = t;

    i = function () {
      function n(t, i) {
        var r = this;
        this._input = $(t);
        this._options = $.extend({}, n.getDefaultOptions(), i);
        this._mirror = $('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>');
        $.each(["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], function (n, t) {
          r._mirror[0].style[t] = r._input.css(t);
        });
        $("body").append(this._mirror);

        this._input.on("keydown keyup input propertychange change click", function () {
          r.update();
        });

        (function () {
          r.update();
        })();
      }

      return n.prototype.getOptions = function () {
        return this._options;
      }, n.prototype.update = function () {
        var n = this._input.val() || "",
            t;
        n !== this._mirror.text() && (this._mirror.text(n), t = this._mirror.width() + this._options.space, this._input.width(t));
      }, n.getDefaultOptions = function () {
        return this._defaultOptions;
      }, n.getInstanceKey = function () {
        return "autosizeInputInstance";
      }, n._defaultOptions = new t(), n;
    }();

    n.AutosizeInput = i, function (t) {
      var i = "autosize-input",
          r = ["text", "password", "search", "url", "tel", "email", "number"];

      t.fn.autosizeInput = function (u) {
        return this.each(function () {
          if (this.tagName == "INPUT" && t.inArray(this.type, r) > -1) {
            var f = t(this);
            f.data(n.AutosizeInput.getInstanceKey()) || (u == undefined && (u = f.data(i)), f.data(n.AutosizeInput.getInstanceKey(), new n.AutosizeInput(this, u)));
          }
        });
      };

      t(function () {
        t("input[data-" + i + "]").autosizeInput();
      });
    }(jQuery);
  })(Plugins || (Plugins = {}));

  $('.sip_result').hide();
  $(".swpbtn").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents('.compare_col').find('.sip_result').hide();
      $(this).parents('.compare_col').find('.Lumpsum_result').show();
    } else {
      $(this).parents('.compare_col').find('.sip_result').show();
      $(this).parents('.compare_col').find('.Lumpsum_result').hide();
    }
  });
});
var num = getBrowserId();
$(document).ready(function () {
  if (num != -1) {
    urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");

    if (typeof id != "undefined") {
      console.log(id);
      $("." + id).trigger('click');
      setTimeout(function () {
        console.log('focus chelgo'); //$("." + id).focus();

        $('html, body').animate({
          scrollTop: $("." + id).offset().top - 300
        }, 2000);
      }, 500);
    }
  } else if (num == -1) {
    var id = $.urlParam("id");

    if (typeof id != "undefined") {
      console.log(id);
      $("." + id).trigger('click');
      setTimeout(function () {
        console.log('focus chelgo'); //$("." + id).focus();

        $('html, body').animate({
          scrollTop: $("." + id).offset().top - 300
        }, 2000);
      }, 500); // $('.no-gutters').focus();
    }
  }
});

$.urlParam = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
  console.log(results);

  if (results == null) {
    console.log(results);
    return null;
  } else {
    console.log(results);
    console.log(decodeURI(results[1]));
    return decodeURI(results[1]) || 0;
  }
};

function getBrowserId() {
  var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
      sUsrAg = navigator.userAgent,
      nIdx = aKeys.length - 1;

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--) {
    ;
  }

  return nIdx;
}
/* end left nav */
