$(document).ready(function(){
$(".cards").hide();
$(".cards").first().show();

    $('input[name="customRadio_4w"]').click(function(){
        var test = $(this).val();
        $(".cards").hide();
        $("#" + test).show();

    });

$('.eligibilityCriteriaZone input[type=radio]').click(function(){
    if($(this).is(':checked')) { 
        $('.custom-radio').removeClass('active');
        $(this).parent().addClass('active');
    }

});

});
