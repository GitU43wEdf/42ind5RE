
$(document).ready(function() {

     $(".navigation-wrap ul li:nth-child(3) ul li:nth-child(3)").hide();

	$(".emailFormatter").each(function(){
	 var mytext = $(this).text().split("{}");
	 $(this).after("<a href='mailto:"+mytext[0]+"@"+mytext[1]+"' target='_blank'>"+mytext[0]+"@"+mytext[1]+"</a> ")
	 $(this).remove();

        var hTitle= $('.mid-right-content .content h3:first').text();

        if (['Our Major Initiatives'].indexOf(hTitle) !== -1) {
			$('.awardsH:first').addClass('active');
			$('.awardsC:first').show();
        }

    })

		/************** Start ACCORD CHANEGS - ****************/
$('.awardsH:first').addClass('active');
			$('.awardsC:first').show();
  $('.awardsH').click(function(){ 
		   if($(this).hasClass('active')){
			$(this).next(".awardsC").slideUp();
			$(this).removeClass('active');
		   }
		   else{
			$(this).next(".awardsC").slideDown().siblings(".awardsC").slideUp(400);
			$(this).addClass("active").siblings(".awardsH").removeClass("active");
		   }
		   var ths = $(this)
		   setTimeout(function(){
		   	//alert(123)
		   	$('html, body').animate({
                scrollTop: ths.offset().top
            }, 1000);  
		   },1000)




/*
		  $('.awardsH').click(function(){
		   if($(this).hasClass('active')){
			$(this).next(".awardsC").slideUp();
			$(this).removeClass('active');
		   }
		   else{
			$(this).next(".awardsC").slideDown().siblings(".awardsC").slideUp(400);
             $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 3000);  
			$(this).addClass("active").siblings(".awardsH").removeClass("active");
		   }
		  })*/
          
	 
})


/** function for email starts **/
function emailFormatter(senderId,mailDomain,subject)
{
	if(subject!=null)
	{
		subject=escape(subject);
		document.write("<a href=mailto:" + senderId + "@" + mailDomain + "?subject=" + subject + " class='email'>" + senderId + "@" + mailDomain + "</a>");
	}
	else
	{
		document.write('<a href="mailto:' + senderId + '@' + mailDomain + '" class="email">' + senderId + '@' + mailDomain + '</a>');
	}
}
	
	if($(window).width() > 1025){
		$(".bannerContainer ul").css('width', $(window).width() * $(".bannerContainer ul li").size())
		$(".bannerContainer ul li, .bannerContainer, .int-banner-img").css('width', $(window).width())
	}else{
		$(".bannerContainer ul").css('width', 1025 * $(".bannerContainer ul li").size())
		$(".bannerContainer ul li, .bannerContainer, .int-banner-img").css('width', "1025px")
	}
	
	//$(".bannerContainer ul li").css('width', "1025px")
	var text='';
	$(".bannerWrapper .bannerContainer li").each(function(){
		text+="<li></li>"
	})
	$(".bannerWrapper .pagination ul").append(text)
	$(".bannerWrapper .pagination ul li").eq(0).addClass('active');
	
	$(window).resize(function(){
		if($(window).width() > 1025){
			$(".bannerContainer ul").css('width', $(window).width() * $(".bannerContainer ul li").size())
			$(".bannerContainer ul li, .bannerContainer, .int-banner-img").css('width', $(window).width())
		}else{
			$(".bannerContainer ul").css('width', 1025 * $(".bannerContainer ul li").size())
			$(".bannerContainer ul li, .bannerContainer, .int-banner-img").css('width', "1025px")
		}
		
		if($(window).width() > 1025){
			$(".site-detail-block, .videoWrapper").css('width',$(window).width())
		}else{
			$(".site-detail-block, .videoWrapper").css('width',1025)
		}
		
		$(".secondFooterWrapper").css('width',$(document).width())
		$(".secondFooter").css('left',($(window).width() - 780) /2);		
	})
	
	$(".left-nav li").click(function(){
		$(this).find('div').toggle();
	})
	slider();
	Videos()
	thumScroll();
	$(".pagination").width(($(".pagination li").size() * 21)+42)
	viewImg();
	imagesGallery();
	siteMap();
	openPopup();
	
	if($(window).width() > 1025){
		$(".site-detail-block, .videoWrapper").css('width',$(window).width())
	}else{
		$(".site-detail-block, .videoWrapper").css('width',1025)
	}
	
	$(".navLink li").eq( $(".navLink li").length -1).css('padding-right',0)
	
	$(".secondFooterWrapper").css('width',$(document).width())
	$(".secondFooter").css('left',($(window).width() - 780) /2)
});

function slider(){
	var counter=0
	$(".bannerWrapper .pagination .next").click(function(){
		if(counter >= $(".bannerWrapper .pagination li").length -1) return;
		counter++;
		slideWidth=$('.bannerContainer li').width() * counter;
		$(".bannerWrapper .bannerContainer ul").animate({"margin-left":-slideWidth},800)
		$(".bannerWrapper .pagination ul li.active").removeClass('active').next().addClass('active');
	})
	
	$(".bannerWrapper .pagination .prev").click(function(){
		if(counter<1) return;
		counter--;
		slideWidth=$('.bannerContainer li').width() * counter;
		$(".bannerWrapper .bannerContainer ul").animate({"margin-left":-slideWidth},800)
		$(".bannerWrapper .pagination ul li.active").removeClass('active').prev().addClass('active');
	})
	
	$(".bannerWrapper .pagination li").click(function(){
		counter=$(this).index();
		slideWidth=$('.bannerContainer li').width() * counter;
		$(".bannerWrapper .bannerContainer ul").animate({"margin-left":-slideWidth},800)
		$(".bannerWrapper .pagination ul li").eq(counter).addClass('active').siblings().removeClass('active');
	})
}

function Videos(){

	var videoLength = $('.videos li').length;
	
	$(".videos li, .playVideo").not('.videos li.content').click(function(){
		videoTitle = $(this).find('.title').html();
		var clientWidth = $(window).width();
		var clientHeight = $(window).height();
		var currScrollTop = $(document).scrollTop();

		$(this).addClass('activeVideo').siblings().removeClass('activeVideo');

		$(".overlay").height($(document).height());
		$(".videoBoxWrapper").css("left", (clientWidth - $(".videoBoxWrapper").width()) / 2 + "px");
		$(".videoBoxWrapper").css("top", (clientHeight - $(".videoBoxWrapper").height()) / 2+"px");

		$(".videoBoxWrapper, .overlay").fadeIn()
		$(".videoBox").find("iframe").attr("src",$(this).find('img').attr("name")+"?wmode=transparent&rel=0");
		if($(this).hasClass('playVideo'))
		{
			$(".videoBox").find("iframe").attr("src",$(this).attr("name")+"?wmode=transparent&rel=0");
		}
		$('.videoBox h2').html(videoTitle);
	});


	$(".videoClose").click(function(){
		$(".videoBoxWrapper, .overlay").fadeOut();
		$(".videoBox").find("iframe").attr("src","");
	});
	
	$('.videoBoxWrapper .nextVideo').click(function(){
		videoTitle = $('.activeVideo').next().find('.title').html();
		if($('.activeVideo').index()==(videoLength-1))
		{
			$(".videos li").eq(0).addClass("activeVideo").siblings().removeClass('activeVideo');
			videoSrc = $(".videos li").eq(0).find('img').attr('name');
			$(".videoBox").find("iframe").attr("src",videoSrc+"?wmode=transparent&rel=0");
			$(".videoBox h2").html($(".videos li").eq(0).find('.title').html());
		}
		else
		{
			videoSrc = $('.activeVideo').next().find('img').attr('name');
			$(".videoBox").find("iframe").attr("src",videoSrc+"?wmode=transparent&rel=0");
			$('.activeVideo').next().addClass("activeVideo").siblings().removeClass('activeVideo');
			$(".videoBox h2").html(videoTitle);
		}
	});
	
	$('.videoBoxWrapper .prevVideo').click(function(){
		videoTitle = $('.activeVideo').prev().find('.title').html();
		if($('.activeVideo').index()==0)
		{
			$(".videos li").eq(videoLength-1).addClass("activeVideo").siblings().removeClass('activeVideo');
			videoSrc = $(".videos li").eq(videoLength-1).find('img').attr('name');
			$(".videoBox").find("iframe").attr("src",videoSrc+"?wmode=transparent&rel=0");
			$(".videoBox h2").html($(".videos li").eq(videoLength-1).find('.title').html());
		}
		else
		{
			videoSrc = $('.activeVideo').prev().find('img').attr('name');
			$(".videoBox").find("iframe").attr("src",videoSrc+"?wmode=transparent&rel=0");
			$('.activeVideo').prev().addClass("activeVideo").siblings().removeClass('activeVideo');
			$(".videoBox h2").html(videoTitle);
		}
	});
}


var nextClicked=1;
var prevClicked=0;
var gParent;
function thumScroll(){
	
	$(".thumImgUl").each(function(){
		if($(this).children().length > 2){
			$(this).width($(this).children().outerWidth(true)*$(this).children().length)
		}
		else{
			$(this).parents(".imageGallery").find(".thum_pre, .thum_next").hide();
		}
	});
	
	$(".thum_pre").addClass("disable");
	$(".thum_next").click(function(){
		gParent = $(this).parent('.imageGallery');
		gParent.find(".thum_pre").removeClass("disable");
		var moveSize=300;
		var NextSize=0;
		var countImages=$(this).parent('.imageGallery').find(".thumImgUl li").size();
		limitNext=countImages-2;
		//$(this).parent('.imageGallery').find(".thum_pre").css({'opacity':'0.4','filter':'alpha(opacity=40)', 'cursor':'unset'})
		
		if(!$(this).parent('.imageGallery').find('.thumImgUl').is(':animated') && !$(this).hasClass("disable"))
		{
			
				//$(this).parent('.imageGallery').find(".thum_pre").css({'opacity':'1','filter':'alpha(opacity=100)'})
				$(this).parent('.imageGallery').find(".thumImgUl")
				.animate({"margin-left":"-="+gParent.find(".thumImgUl").children().outerWidth(true)+"px"},800,function(){
					if((parseInt(gParent.find(".thumImgUl").children().last().offset().left) < (parseInt(gParent.find(".thumImgs").offset().left) + parseInt(gParent.find(".thumImgs").outerWidth(true))-21))){
						gParent.find(".thum_next").addClass("disable");
					}
				});
		}
	})
	
	$(".thum_pre").click(function(){
		gParent.find(".thum_next").removeClass("disable");
		gParent = $(this).parent('.imageGallery');
		var moveSize=300;
		var NextSize=0;
		var countImages=$(this).parent('.imageGallery').find(".thumImgUl li").size();
		limitNext=countImages-2;
		
		if(!$(this).parent('.imageGallery').find('.thumImgUl').is(':animated') && !$(this).hasClass("disable"))
		{
						
				$(this).parent('.imageGallery').find(".thum_pre").css({'opacity':'1','filter':'alpha(opacity=100)'})
				$(this).parent('.imageGallery').find(".thumImgUl")
				.animate({"margin-left":"+="+gParent.find(".thumImgUl").children().outerWidth(true)+"px"},800,function(){
					if((parseInt(gParent.find(".thumImgUl").offset().left) > (parseInt(gParent.find(".thumImgs").offset().left)-20))){
						gParent.find(".thum_pre").addClass("disable");
						gParent.find(".thum_next").removeClass("disable");
					}
				});
			/*if(nextClicked>1){
			$(this).parent('.imageGallery').find(".thum_next").css({'opacity':'1','filter':'alpha(opacity=100)'})
			NextSize=NextSize-moveSize;

			$(this).parent('.imageGallery').find(".thumImgUl").animate({"margin-left":"-="+NextSize+"px"},"show");
			if(nextClicked!=1){nextClicked--;};


			if(nextClicked==1) $(this).css({'opacity':'0.4','filter':'alpha(opacity=40)'})
			}*/
		}
	})
}


/*function viewImg(){
	$(".media-mansion .left img").click(function(){
		$(".imageView img").attr("src",$(this).attr('name'));

		var clientWidth = $(window).width();
		var clientHeight = $(window).height();
		var currScrollTop = $(document).scrollTop();


		$(".overlay").fadeIn().html("<img src='/etc/scripts/csr/images/loading.gif' title='Loading' alt='Loading'>")
		$(".overlay").height($(document).height());
		$(".overlay").width($(document).width());

		$(".imageView img").on("load",function(){
			$(".overlay").html('');
			$(".imageView").css("left", (clientWidth - $(".imageView").width()) / 2 + "px");
			$(".imageView").css("top", (clientHeight - $(".imageView").height()) / 2 + currScrollTop + "px");
			$(".imageView").delay(100).fadeIn()
		});

	})

	$(".imageViewClose").click(function(){
		$(".imageView, .overlay").fadeOut(function(){
			$(".imageView").find("img").attr("src","");
		});
	});
}*/

function viewImg() {
$(".media-mansion .left img").click(function () {
$this = $(this);
$imageview = $this.parents(".left").siblings(".imageView");
$overlay = $this.parents(".left").siblings(".overlay");

$imageview.children("img").attr("src", $(this).attr('name'));

var clientWidth = $(window).width();
var clientHeight = $(window).height();
var currScrollTop = $(document).scrollTop();


$overlay.fadeIn().html("<img src='/etc/scripts/csr/images/loading.gif' title='Loading' alt='Loading'>")
$overlay.height($(document).height());
$overlay.width($(document).width());

$(".imageView img").on("load", function () {
$overlay.html('');
$imageview.css("left", (clientWidth - $imageview.width()) / 2 + "px");
$imageview.css("top", (clientHeight - $imageview.height()) / 2 + currScrollTop + "px");
$imageview.delay(100).fadeIn()
});

})

$(".imageViewClose").click(function () {
$(this)
.parents(".imageView").fadeOut()
.siblings(".overlay").fadeOut(
function () {
$(".imageView").find("img").attr("src", "");
}
);
});
}

function imagesGallery(){
	var videoLength = $('.imageGallery li').length;
	$(".imageGallery li").click(function(){
	    videoTitle = $(this).find('h4').text();
		var clientWidth = $(window).width();
		var clientHeight = $(window).height();
		var currScrollTop = $(document).scrollTop();

		$(this).addClass('activeVideo').siblings().removeClass('activeVideo');

		$(".overlay").height($(document).height());
		$(".imgBoxWrapper").css("left", (clientWidth - $(".imgBoxWrapper").width()) / 2 + "px");
		$(".imgBoxWrapper").css("top", ((clientHeight -580) / 2) + "px");
		var imgName=$(this).find('img').attr("name")
		$(".videoBox").find("img").attr("src",imgName);
		setTimeout(function(){
			$(".imgBoxWrapper, .overlay").fadeIn()
		},150)
		
		//$('.videoBox h2').html(videoTitle);		
	});


	$(".videoClose").click(function(){
		$(".imgBoxWrapper, .overlay").fadeOut();
		$(".videoBox").find("img").attr("src","");
	});
	
	$('.imgBoxWrapper .nextVideo').click(function(){
		
		videoTitle = $('.activeVideo').next().find('h4').html();
		if($('.activeVideo').index()==(videoLength-1))
		{
			
			$(".imageGallery li").eq(0).addClass("activeVideo").siblings().removeClass('activeVideo');
			videoSrc = $(".imageGallery li").eq(0).find('img').attr('name');
			$(".videoBox").find("img").attr("src",videoSrc);
			//$(".videoBox h2").html($(".imageGallery li").eq(0).find('.title').html());
		}
		else
		{ 
			
			videoSrc = $('.activeVideo').next().find('img').attr('name');
			$(".videoBox").find("img").attr("src",videoSrc);
			$('.activeVideo').next().addClass("activeVideo").siblings().removeClass('activeVideo');
			//$(".videoBox h2").html(videoTitle);
		}
	});
	
	$('.imgBoxWrapper .prevVideo').click(function(){
		videoTitle = $('.activeVideo').prev().find('h4').html();
		if($('.activeVideo').index()==0)
		{
			$(".imageGallery li").eq(videoLength-1).addClass("activeVideo").siblings().removeClass('activeVideo');
			videoSrc = $(".imageGallery li").eq(videoLength-1).find('img').attr('name');
			$(".videoBox").find("img").attr("src",videoSrc);
			//$(".videoBox h2").html($(".imageGallery li").eq(videoLength-1).find('.h4').html());
		}
		else
		{
			videoSrc = $('.activeVideo').prev().find('img').attr('name');
			$(".videoBox").find("img").attr("src",videoSrc);
			$('.activeVideo').prev().addClass("activeVideo").siblings().removeClass('activeVideo');
			//$(".videoBox h2").html(videoTitle);
		}
	});
}

function siteMap(){
	$("ul.Mailsitemenu > li").click(function(){
		$(this).find(".subSitemap").slideToggle();	
		$(this).toggleClass("Expandmenu");
	})
	
	$("ul.subSitemap > li").click(function(e){
		e.stopPropagation();
		$(this).toggleClass("Expandmenu");
		$(this).find(".subSubSitemap").slideToggle();
	})

	$("ul.subSitemap > li > ul > li").click(function(e){
		e.stopPropagation();
	});
}

function openPopup(){
		var url=location.href;
		url=url.split('?');
		
		if(url[1]=='popup'){
			$(".imageGallery li").eq(0).click();
		}
}