$(document).ready(function () {

	console.log("ready");
    $(".unique-notes-as-table > ul").addClass("py-3");

    	if(window.location.href.indexOf("rates.html") > -1) 
            {


                 $("a[href*='#cfd-loans-rates']").click(function() {
                    $('a[href="#cfd-loans"]').tab('show');
                    $('html, body').animate({
                        scrollTop: $("#cfd-loans-rates").offset().top - 170
                    }, 500);
                   return false;
                    //$("a[href='#term-deposit']").click();
                });

                $("a[href*='#domestic-nro-nre-rates']").click(function() {
                    $('a[href="#term-deposit"]').tab('show');
                    $('html, body').animate({
                        scrollTop: $("#domestic-nro-nre-rates").offset().top - 170
                    }, 500);
                   return false;
                    //$("a[href='#term-deposit']").click();
                });

                $("a[href*='#fd-rates']").click(function() {
                    $('a[href="#term-deposit"]').tab('show');
                    $('a[href="#term-deposit"]').on('shown.bs.tab', function(e) {
                    
                    $('html, body').animate({
                        scrollTop: $("#fd-rates").offset().top - 170
                    }, 500);
                    });
                    return false;
                });

                $("a[href*='#saving-bank-account-interest-rate']").click(function() {
                    $("a[href='#saving-account']").tab('show');
                    $('html, body').animate({
                        scrollTop: $("#saving-bank-account-interest-rate").offset().top - 170
                    }, 500);
                    return false;
                });


				$('.innerpage').addClass('ratepage');


              //  setTimeout(function(){ 

               $('.accordion [data-toggle="collapse"]').on('click', function () {
  
                 // var panel = $(this).find('.in');

                  $('html, body').animate({
                        scrollTop: $(this).closest('.accordion').offset().top - 170
                  }, 500);

                });
              // }, 3000);


            }


});