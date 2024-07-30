/* left page nav */
var par;
$(document).ready(function(){
    setTimeout(function(){
        console.log(par);
		$("[href='"+'#'+par+"']").trigger('click');
    },1000);

	var nav_html = $('nav.left_pagenav').html();
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
	
	
	$(this).parents('.mob_left_menu').removeClass('open');
	$('body').removeClass('noscroll bodyfix');
	if($(window).width() < 992){
	$('html, body').animate({
	scrollTop: $(".db_container").offset().top - 40
	}, 1000)
	}
	});
	
	});
	
	
	
	
	/*$.fn.isInViewport = function() {
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
	}); 
	*/
	
	var num = getBrowserId();
	idSelector();
	$(document).ready(function(){
	console.log("TTTT "+num)
		 //$('.db-tabs .nav-tabs .nav-item:first:child .nav-link').addClass('active');
		if (num != -1) {
			
			urlParams = new URLSearchParams(window.location.search);
			console.log("urlParams "+urlParams)
	
			var id = urlParams.get("id");
			console.log("id "+id)
			if( id != null){

			   var test= $(".digiBank").children("div");
			   test.removeClass("active")
				$('.customTeaser').removeClass('active');  
				$("." + id).addClass('active')
				$("." + id).addClass('show')
				//$(`#${id}`).addClass('active')
				//$(`#${id}`).addClass('show')
                $("#".concat(id)).addClass('active');
                $("#".concat(id)).addClass('show');
	
			}
		} else if (num == -1) {
			var id = $.urlParam("id");
			if(typeof id != "undefined"){
				$('.customTeaser').removeClass('active'); 
				$("." + id).addClass('active');
				
			}
		}
	
	
	
	});
	
	var newId;

	function idSelector(){
		let currentUrl=window.location.href
		//console.log({currentUrl});
		
		
		let endIndex=currentUrl.length
		//console.log({endIndex});
		let startIndex=currentUrl.indexOf('#')
		//console.log({startIndex});

		let guid=currentUrl.slice(startIndex,endIndex) 
        

        var newId = guid.replace("#","");
        par=newId;
         console.log("++++++++++ "+guid)

    }
    


	
	$.urlParam = function(name) {
		var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
				window.location.href
		);
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
		for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
		return nIdx;
	}
	$(function(){
	if(window.location.href.indexOf("?id=") < 0) {
		console.log("window.location.href.indexOf() < 0")
		$(".db-tabs .nav-tabs .nav-item:first-child .nav-link.customTeaser").addClass("active");
		} 
	});
	
	/* end left nav */
var video_items;
$(document).ready(function () {
if (!window["YT"]) {
  var YT = { loading: 0, loaded: 0 };
}
if (!window["YTConfig"]) {
  var YTConfig = { host: "https://www.youtube.com" };
}
if (!YT.loading) {
  YT.loading = 1;
  (function() {
    var l = [];
    YT.ready = function(f) {
      if (YT.loaded) {
        f();
      } else {
        l.push(f);
      }
    };
    window.onYTReady = function() {
      YT.loaded = 1;
      for (var i = 0; i < l.length; i++) {
        try {
          l[i]();
        } catch (e) {}
      }
    };
    YT.setConfig = function(c) {
      for (var k in c) {
        if (c.hasOwnProperty(k)) {
          YTConfig[k] = c[k];
        }
      }
    };
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.id = "www-widgetapi-script";
    a.src =
      "/etc/clientlibs/indusind-platform/components/common/howToUse/js/script.js";
    a.async = true;
    var c = document.currentScript;
    if (c) {
      var n = c.nonce || c.getAttribute("nonce");
      if (n) {
        a.setAttribute("nonce", n);
      }
    }
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  })();
}


$('.card-box a').click(function(){
console.log('open modal');
  vid_html = $(this).parent().parent().find('figure').html();
    console.log(vid_html);
  $('#video_modal_body').html(vid_html);
  });
  $('#myModalvideo').on('hidden.bs.modal', function () {
  $('#video_modal_body').html('');
  });

   video_items = getVideoAPI();

            });


 function onYouTubePlayerAPIReady() {  
    video_items.forEach(function(item, index){
        var playrids = item.videName;
         playrids =  new YT.Player(item.playerID, {
            height: '450',
            width: '100%',
            videoId: item.videoID,
             playerVars: { 'autoplay': 0, 'controls': 0, 'rel': 0 },
             // added to stop suggested videos
             events: {
                onStateChange: onPlayerStateChange
            }
         }); 
        $('#'+item.playerID).on('mouseenter',function(){
           playrids.playVideo();           
        }).on('mouseleave',function(){
            playrids.pauseVideo();
       });
        // added to stop suggested videos

		$('#'+item.playerID).parent().on('click', function(){
            let playerState = playrids.getPlayerState();
			if (playerState == YT.PlayerState.ENDED) {
              playrids.playVideo();
            } else if (playerState == YT.PlayerState.PAUSED) {
              playrids.playVideo();
            }
       });

    }) 
 }


// added to stop suggestive videos
 var playerWrap = $(".imagebox");
 function onPlayerStateChange(event) {           
  if (event.data == YT.PlayerState.ENDED) {
    playerWrap.addClass("ended");
  } else if (event.data == YT.PlayerState.PAUSED) {
    playerWrap.addClass("paused");
  } else if (event.data == YT.PlayerState.PLAYING) {
    playerWrap.removeClass("ended");
    playerWrap.removeClass("paused");
  }
}




function getVideoAPI(){
    var className = $('.video_box');   
    var IdStore = new Array();    
    for(var j = 0; j < className.length; j++){  
        IdStore.push({"playerID":className[j].id, 
        "videoID":className[j].getAttribute('data-video'), 
        "videName":"player"+j});
    }  
       return IdStore;
 }  

