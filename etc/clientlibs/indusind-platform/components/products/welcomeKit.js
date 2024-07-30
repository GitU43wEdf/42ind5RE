$(document).ready(function(){

      //refresh page while shifting between Edit and Preview Mode
  unWrapElementInPreviewMode();
    showCards();
});


 var unWrapElementInPreviewMode= function() {
  $('iframe').bind("load",function(){
      //check if button component exists
      var $unWrapSelector = $(this).contents().find('a.x-button');
   if($unWrapSelector.length){
    $(document).on("click", ".js-editor-LayerSwitcherTrigger", function () {
     if($.cookie('wcmmode') == "preview") {
      $unWrapSelector.each(function(index,val){
       $(this).unwrap();
      });
     }else{
      location.reload();
     }
    });
   }
   
     });
 };





function showCards(){    
    $(".cardBox").slice(0, 6).show();

    $(".loadMore").on("click", function(){
        if($(".cardBox").hasClass("cardScroll")){
            $(".cardBox").removeClass("cardScroll");
        }

        $(".cardBox:hidden").slice(0, 6).show(300).addClass("cardScroll");

        // $('html, body').animate({
        //     scrollTop: $(".cardScroll").offset().top
        // }, 1000);

        if($(".cardBox:hidden").length == 0){
            $(".loadMore").hide();
        }
    });

    var cardLen = $(".cardBox").length;

    if(cardLen > 6){
        $(".loadMore").show();
    }
    else{
        $(".loadMore").hide();
    }
}