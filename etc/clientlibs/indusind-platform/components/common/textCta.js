$(function(){

    $('.disclaimer_checkbox label').click(function(){
        var $hrefval = $(this).attr('href');
		var myEle = document.getElementById("discCH2");

        if(myEle != null){

		if(($('#discCH1').is(":checked")) && ($('#discCH2').is(":checked")) ){
            $('.check_error').hide();
            console.log($hrefval);
            $('.accept_btn').removeClass('disabled');
        }
        else{
             $('.check_error').show();
            $('.accept_btn').addClass('disabled');
        }	
        }
        else{
        if($('.disclaimer_checkbox').find('input').is(":checked")){
            $('.check_error').hide();
            console.log($hrefval);
            $('.accept_btn').removeClass('disabled');
        }
        else{
             $('.check_error').show();
            $('.accept_btn').addClass('disabled');
        }
        }


})


})


