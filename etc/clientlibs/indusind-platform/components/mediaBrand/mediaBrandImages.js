$(document).ready(function () {

    $("#loadMore").on("click",function(e){
        e.preventDefault();
        var count = 0;
        $(".hiddenImg").each(function(){
            count++;
            $(this).removeClass("hiddenImg");
            if(!$(".hiddenImg").length) {
                $("#loadMore").hide();
            }
            if(count == 3) {
                return false;
            }
        });
    });

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

});
