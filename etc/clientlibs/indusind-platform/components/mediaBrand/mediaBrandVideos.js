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
            height: '250',
            width: '100%',
            videoId: item.videoID,
            playerVars: { 'autoplay': 0, 'controls': 0 }
         }); 
        $('#'+item.playerID).on('mouseenter',function(){
           playrids.playVideo();           
        }).on('mouseleave',function(){
            playrids.pauseVideo();
       });
    }) 
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

$(document).ready(function () {

    $("#loadMre").on("click",function(e){
        e.preventDefault();
        var count = 0;
        $(".hide-item").each(function(){
            count++;
            $(this).removeClass("hide-item");
            if(!$(".hide-item").length) {
                $("#loadMre").hide();
            }
            if(count == 3) {
                return false;
            }
        });
    });
});

