$(document).ready(function(){  
	console.log(111222)
    if($('.playerInfo a').attr('href') == '#'){
		$('.playerInfo a').hide();
    }

    var headerHt = $("header").outerHeight(); 
    $(".sportsBannerCont, .hero-container, .forSportsBlank").css("margin-top", headerHt);   
    $(" .withoutbanner ").css("margin-top", headerHt + 30 + 'px');
    $(" .withoutbanner ").css("margin-bottom" , '30px');
  
      $('body').addClass("bg-grey");
      $('#reward_redemption .container').removeClass("px-50px pt-4");
      $('#reward_redemption .heading').removeClass("mt-3");
      $('#reward_redemption .heading').addClass("pt-3");
  
      $(".setting_btn").css("top",headerHt);
      $(".playerDetails .playerDetailInfo table").wrap("<div class='tableWrap'></div>");
      $(".bredcrumbs .breadcrumb-item:not(:first-child) a ").attr("href", "javascript:;");
  
     $(".playerAccess").on("click", function(){        
         $(this).toggleClass("active");  
         $(".webFontSize").toggle();
     });
  
     $(".dropdown-toggle").on("mouseover", function(){ 
         $(this).addClass("active");       
         $(this).parents(".dropdown").find(".dropdown-menu").addClass("show");
     });   
         
     if($('.menu-icon').is(':visible')) {
         var ht = $("header").outerHeight();
         $(".navbar .sitenavigation ul").css("top", ht - 10);        
     }
     
     // show/hide the mobile menu based on class added to container
     $('.menu-icon').click(function() {
         $(this).parent().toggleClass('is-tapped');
         $('#hamburger').toggleClass('open');
     });
     
       // handle touch device events on drop down, first tap adds class, second navigates
     $('.touch .sitenavigation li.nav-dropdown > a').on('touchend', function(e) {
         if ($('.menu-icon').is(':hidden')) {
             var parent = $(this).parent();
             $(this).find('.clicked').removeClass('clicked');
             if (parent.hasClass('clicked')) {
                 window.location.href = $(this).attr('href');
             } 
             else {
                 $(this).addClass('linkclicked');
  
                 // close other open menus at this level
                 $(this).parent().parent().find('.clicked').removeClass('clicked');
  
                 parent.addClass('clicked');
                 e.preventDefault();
             }
         }
     });
     
     // handle the expansion of mobile menu drop down nesting
     $('.sitenavigation li.nav-dropdown').click(
         function(event) {
             if (event.stopPropagation) {
                 event.stopPropagation();
             } else {
                 event.cancelBubble = true;
             }
  
             if ($('.menu-icon').is(':visible')) {
                 $(this).find('> ul').toggle();
                 $(this).toggleClass('expanded');
             }
         }
     );    
  
     // javascript fade in and out of dropdown menu
     $('.sitenavigation li').hover(function() {
             if (!$('.menu-icon').is(':visible')) {
                 $(this).find('> ul').show(100);
             }
         },
         function() {
             if (!$('.menu-icon').is(':visible')) {
                 $(this).find('> ul').hide(100);
             }
         }
     );
  
  
      $(".footer .col-lg-2").addClass("footerListDisc");     
  
     var footerCont = $(".footerListDisc:nth-child(4) .list-of-links .list-unstyled li ").text();
   var footerContLink = $(".footerListDisc:nth-child(4) .list-of-links .heading:last-child").text();    
     $("#footer-Contact-drop, .footerListDisc:nth-child(4) .list-of-links .heading:last-child").hide();
  
     $(".footerListDisc:nth-child(4) .list-of-links").append('<p>' + footerCont + '<a href="mailto:'+footerContLink+'">' + footerContLink + '</a></p>');
  
     //$(".footerListDisc:nth-child(4) .list-of-links .heading:last-child").before('<p>' + footerCont +'</p>');
  
  
      $('.innerpage.bg-grey').addClass("innerPagePadding");
      var a = $("header").outerHeight();
      $(".innerpage").css("margin-top", a);
      $(".innerpage").resize(function () {
          $(".innerpage").css("margin-top", a);
      });
  
      if($(".playerTabCont").length){
          showCardsTabs();
      }
      else{
          showCards();
      } 

    var videoCardLen = $(".js-cards-slider .card").length;
    console.log(videoCardLen);

    if(videoCardLen == 1){
        setTimeout(function(){
            $(".js-back2first").hide();
        },100);            
    }
  });
  
  
  function showCardsTabs(){
      var headHt = $("header").outerHeight();
  
      if($(".playerTabCont").length){
          $(".tab-pane").each(function(){
              $(this).find(".playerProfilesCard").slice(0, 6).show();
          });
      }
      else{
          $(".playerProfilesCard").slice(0, 6).show();
      }
  
      $(".tab-pane").each(function(){
          if($(this).find(".playerProfilesCard").length > 6){
              $(this).find(".playerLoadMore").show();
          } 
          else{
              $(this).find(".playerLoadMore").hide();
          }
      });
      
  
      $(".playerLoadMore a").on("click", function(){        
          if($(this).parents(".tab-pane").hasClass("show")){
              if($(".tab-pane.active.show .playerProfilesCard").hasClass("cardScroll")){
                  $(".tab-pane.active.show .playerProfilesCard").removeClass("cardScroll");
              }
  
              $(".tab-pane.active.show .playerProfilesCard:hidden").slice(0, 6).show(300).addClass("cardScroll");            
          }
          
          
          if($(".cardScroll").length){
              $('html, body').animate({
                  scrollTop: $(".tab-pane.active.show .cardScroll").offset().top - headHt
              }, 1000);
          }
  
          if($(".tab-pane.active.show .playerProfilesCard:hidden").length == 0){
              $(".tab-pane.active.show .playerLoadMore").hide();
          }
      });
  }
  
  function showCards(){
      var headHt = $("header").outerHeight();
  
      $(".playerProfilesCard").slice(0, 6).show();
      
      if($(".playerProfilesCard").length > 6){
          $(".playerLoadMore").show();
      }    
      else{
          $(".playerLoadMore").hide();
      }
  
      $(".playerLoadMore a").on("click", function(){
          if($(".playerProfilesCard").hasClass("cardScroll")){
              $(".playerProfilesCard").removeClass("cardScroll");
          }
  
          $(".playerProfilesCard:hidden").slice(0, 6).show(300).addClass("cardScroll");
          
          if($(".cardScroll").length){
              $('html, body').animate({
                  scrollTop: $(".cardScroll").offset().top - headHt
              }, 1000);
          }
  
          if($(".playerProfilesCard:hidden").length == 0){
              $(".playerLoadMore a").hide();
          }
      });
  }
  //for player description box shadow by karan
  
  $(".player-description").parent().css("box-shadow","1px 1px 20px #e1e0e0");
  
  