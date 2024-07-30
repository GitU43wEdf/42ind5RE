/* insta service */

$(function () {

    $('body').addClass('hasInstaserviceTabs');

    x=3;

    $('.instaservice_mob li').slice(0, 3).show();

    var list_items = $('.instaservice_mob li').length;

    //alert(list_items);

    if(list_items > 3){

    // alert('');

        $('.instaservice_mob li').hide();

        $('.instaservice_mob li').slice(0, 2).show();

        $('.more_option_li').show();

    }

    else{

        $('.instaservice_mob li').slice(0, 3).show();

        $('.instaservice_mob li.more_option_li').hide();

    }

    $('.more_option_li a').on('click', function (e) {

        e.preventDefault();

        x = x+3;

    // $('.instaservice_mob li').slice(0, x).slideDown();

        $(this).parents('ul').toggleClass('active');

    });

 

    if ($(window).width() < 768) {

        $('input[type="text"]').on('focus', function(){

            $('.instaservice_mob').hide();

        }).on('blur', function(){

            $('.instaservice_mob').show();

        })

     }

 

   

 

});

 

/* end insta service */