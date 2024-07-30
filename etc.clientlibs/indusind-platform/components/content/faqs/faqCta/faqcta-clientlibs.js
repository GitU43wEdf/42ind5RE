//faqcta.js

$(document).ready(function () {
    console.log('qwqwqwqwq');
    $('#faqdiv').on('click',function(){
        console.log('qwertyuiop');
        var id='?value='+$('#faqdiv').attr('href');
		//window.location.href = "/content/indusind-corporate/en/personal/faq.html"+id
        window.location.href = "/in/en/personal/faq.html"+id
    });

});