$(document).ready(function () {



    function deleteCookie()
    {
        document.cookie = "homePrinciple=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "homeRate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "homeTenure=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    var authoredHomePrinciple,authoredHomeRate,authoredHomeTenure;
    authoredHomePrinciple = $("#homePrinciple").val();
    authoredHomeRate = $("#homeRate").val();
    authoredHomeTenure = $("#homeTenure").val();

    $(".homeOptionDefault").remove();

    $("#homePrinciple").on("input", function () {
     if ($("#homePrinciple").val().length <= 10) {
         this.value = this.value.replace(/[^0-9\0]/g, "");
     }
    });

    $("#homeComparePrinciple").on("input", function () {
     if ($("#homeComparePrinciple").val().length <= 10) {
         this.value = this.value.replace(/[^0-9\0]/g, "");
     }
    });

    $("#homeRate,#homeCompareRate").attr('readonly','readonly');



    $("#homeCalculate").on('click' , function(e){
        e.preventDefault();

    var homePrinciple = $("#homePrinciple").val();
    var parseIntHomePrinciple = parseInt(homePrinciple);
    var homeCheck = homePrinciple[0];
    var homeRate = $("#homeRate").val();
    var splitRate = homeRate.split("%");
    var convertedRate = splitRate[0];
    var finalHomeRate = convertedRate/1200;
    var homeYears = $("#homeTenure").val();
    var homeTenure = homeYears*12;
    setCookie("homePrinciple", homePrinciple);
    setCookie("homeRate", homeRate);
    setCookie("homeTenure", homeYears);



    var dataResult = {
               loanAmount : homePrinciple,
               personalLoanRate : finalHomeRate,
               personalLoanTenure : homeTenure
                      };

    var data = JSON.stringify(dataResult);

        if(homePrinciple == ""){
            $(".homePrincipleError").show();
            $(".homeRateError").hide();
        }
        else if(homeCheck == 0){
            $(".homePrincipleError").show();
            $(".homeRateError").hide();
        }
        else if(homeRate==""){
            $(".homePrincipleError").hide();
            $(".homeRateError").show();
        }
        else{
            $(".homePrincipleError").hide();
            $(".homeRateError").hide();
            $(".errorMsg").hide();

        $.ajax({

               url: "/bin/personalLoan",
               type: "POST",
               data: {data : data, reqType : "personalLoan"},
               success: function (res) {

                  $("#homeLoanInputs").hide();
                  $("#homeLoan_calculated").show();
                  $("#homeCompare").show();
                  $("#homeCompareDiv").hide();
                  $(".homeSelected_items").show();
                  $("#homeResult").show();

                  var parsedResHome= JSON.parse(res);
                  var homeFloatEmi = parsedResHome.personalEmitAsString;
                  var homeTotalAmount = homeFloatEmi*homeTenure;
                  var homeFinalTotal = Math.ceil(homeTotalAmount);
                  var homeIntegerEmi = parseInt(homeFloatEmi);
                  var homeIntrest = homeFinalTotal-homePrinciple ;

                  $("#homeEmi").html(homeIntegerEmi.toLocaleString('en-IN'));
                  $(".homeResultTenure").html(homeTenure);
                  $("#homePrincipleAmount").html(parseIntHomePrinciple.toLocaleString('en-IN'));
                  $("#homeInterestAmount").html(homeIntrest.toLocaleString('en-IN'));
                  $("#homeTotalAmount").html(homeFinalTotal.toLocaleString('en-IN'));
               },
               error: function (err) {
                   $(".errorMsg").show();
               }
   });
       }
 });

      if(window.location.href.indexOf("/home-loan") > -1) {
       let homePrincipleDetail = getCookie("homePrinciple");
       let homeRateDetail =  getCookie("homeRate");
       let homeTenureDetail =   getCookie("homeTenure");
       if(homePrincipleDetail && homeRateDetail && homeTenureDetail)
       {
        $("#homePrinciple").val(homePrincipleDetail);
        $("#homeRate").val(homeRateDetail);
        $("#homeTenure").val(homeTenureDetail);
        deleteCookie();   
       }

   }



     $("#homeCompare").on('click',function(e){
       e.preventDefault();
       $("#homeCompareDiv").show();
       $("#homeCompareCalculator").show();
       $(this).hide();
       $(".link_compare_close").show();
       $("#homeCompareResult").hide();
       $(".homeComparePrincipleError").hide();

       $("#homeComparePrinciple").val(authoredHomePrinciple);
       $("#homeCompareRate").val(authoredHomeRate);
       $("button[data-id='homeCompareResultTenure']").children().children().children().html(authoredHomeTenure);

       $("#homeCompareResultTenure").val(authoredHomeTenure);
   });

   $('.link_compare_close').click(function(e) {
     e.preventDefault();
     $(this).parents('.col-md-6').hide();
     $(this).hide();
     $('#homeCompare').show();
   });

  $('#homeReload').click(function(e) {
     e.preventDefault();
     $('.calc_main .homeSelected_items, .calc_main #homeLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
     $('.compare_col .link_compare').show();
     $('.calc_main .vehicle-tab-container, .calc_main #homeLoanInputs').slideDown('slow');

     $("#homePrinciple").val(authoredHomePrinciple);
     $("#homeRate").val(authoredHomeRate);
     $("#homeTenure").val(authoredHomeTenure);

     $("#homeComparePrinciple").val(authoredHomePrinciple);
     $("#homeCompareRate").val(authoredHomeRate);
     $("#homeCompareResultTenure").val(authoredHomeTenure);
     $("button[data-id='homeTenure']").children().children().children().html(authoredHomeTenure);


  });

  $("#homeCompareCalculate").on('click' , function(e){
    e.preventDefault();
    var homePrincipleCompare = $("#homeComparePrinciple").val();
    var parseIntHomeComparePrinciple = parseInt(homePrincipleCompare);
    var homeCheck2 = homePrincipleCompare[0];
    var homeRateCompare = $("#homeCompareRate").val();
    var splitRateCompare = homeRateCompare.split("%");
    var convertedRateCompare = splitRateCompare[0];
    var finalHomeRateCompare = convertedRateCompare/1200;
    var homeYearsCompare = $("#homeCompareResultTenure").val();
    var homeTenureCompare = homeYearsCompare*12;

      var compareValues={
          "homePrinciple":homePrincipleCompare,
          "homeRate":homeRateCompare,
          "homeTenure":homeYearsCompare

      };
    var dataResultComp = {
               loanAmount : homePrincipleCompare,
               personalLoanRate : finalHomeRateCompare,
               personalLoanTenure : homeTenureCompare
                      };

    sessionStorage.setItem("comp2", JSON.stringify(compareValues));   
    var data = JSON.stringify(dataResultComp);

       if(homePrincipleCompare == ""){
            $(".homeComparePrincipleError").show();
            $(".homeCompareRateError").hide();
            $("#homeCompareCalculator").show();
            $("#homeCompareResult").hide();
        }
       else if(homeCheck2==0){
            $(".homeComparePrincipleError").show();
            $(".homeCompareRateError").hide();
            $("#homeCompareCalculator").show();
            $("#homeCompareResult").hide();
       }
        else if(homeRateCompare==""){
            $(".homeComparePrincipleError").hide();
            $(".homeCompareRateError").show();
        }
        else{
            $(".homeComparePrincipleError").hide();
            $(".homeCompareRateError").hide();
            $(".errorMsg").hide();

        $.ajax({
               url: "/bin/personalLoan",
               type: "POST",
               data: {data : data, reqType : "personalLoan"},
               success: function (res) {

                  $("#homeCompareCalculator").hide();
                  $("#homeCompareResult").show();

                  var parsedResHomeCompare = JSON.parse(res);
                  var homeCompareFloatEmi = parsedResHomeCompare.personalEmitAsString;
                  var homeCompareTotalAmount = homeCompareFloatEmi*homeTenureCompare;
                  var homeCompareFinalTotal = Math.ceil(homeCompareTotalAmount);
                  var homeCompareIntegerEmi = parseInt(homeCompareFloatEmi);
                  var homeCompareIntrest = homeCompareFinalTotal-homePrincipleCompare ;

                  $("#homeCompareEmi").html(homeCompareIntegerEmi.toLocaleString('en-IN'));
                  $(".homeCompareResultTenure").html(homeTenureCompare);
                  $("#homeComparePrincipleAmount").html(parseIntHomeComparePrinciple.toLocaleString('en-IN'));
                  $("#homeCompareInterestAmount").html(homeCompareIntrest.toLocaleString('en-IN'));
                  $("#homeCompareTotalAmount").html(homeCompareFinalTotal.toLocaleString('en-IN'));

               },
               error: function (err) {
                   $(".errorMsg").show();
               }
   });
   }
 });
   var Plugins;(function(n){var t=function(){function n(n){typeof n=="undefined"&&(n=30);this.space=n}return n}(),i;n.AutosizeInputOptions=t;i=function(){function n(t,i){var r=this;this._input=$(t);this._options=$.extend({},n.getDefaultOptions(),i);this._mirror=$('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>');$.each(["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],function(n,t){r._mirror[0].style[t]=r._input.css(t)});$("body").append(this._mirror);this._input.on("keydown keyup input propertychange change",function(){r.update()});(function(){r.update()})()}return n.prototype.getOptions=function(){return this._options},n.prototype.update=function(){var n=this._input.val()||"",t;n!==this._mirror.text()&&(this._mirror.text(n),t=this._mirror.width()+this._options.space,this._input.width(t))},n.getDefaultOptions=function(){return this._defaultOptions},n.getInstanceKey=function(){return"autosizeInputInstance"},n._defaultOptions=new t,n}();n.AutosizeInput=i,function(t){var i="autosize-input",r=["text","password","search","url","tel","email","number"];t.fn.autosizeInput=function(u){return this.each(function(){if(this.tagName=="INPUT"&&t.inArray(this.type,r)>-1){var f=t(this);f.data(n.AutosizeInput.getInstanceKey())||(u==undefined&&(u=f.data(i)),f.data(n.AutosizeInput.getInstanceKey(),new n.AutosizeInput(this,u)))}})};t(function(){t("input[data-"+i+"]").autosizeInput()})}(jQuery)})(Plugins||(Plugins={}))
   $('.link_compare').click(function(e){
     $(this).parents('.calc_main').find('.compare_col_added').find('.calc_box .resizeinputbox').css('width','84px');
    });
   $('.btn_reload_calc').click(function(e){
      e.preventDefault();
      $(this).parents('.calc_main').find('.calc_box .resizeinputbox').css('width','84px');
  });


function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = document.cookie;
   var ca = decodedCookie.split(';');

   for (var i = 0; i < ca.length; i++) {
       var c = ca[i];

       while (c.charAt(0) == ' ') {
           c = c.substring(1);
       }

       if (c.indexOf(name) == 0) {
           return c.substring(name.length, c.length);
       }
   }
   return "";
}


  function setCookie(cname, cvalue, exdays) {
   var d = new Date();
      exdays=1;
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }


$('.btn-outline-primary').on('click', function(){
 var parent_id = $(this).parent().parent().parent().parent().parent().attr('id');
    if((parent_id == undefined) || (parent_id==null))
		parent_id = $(this).parent().parent().parent().parent().parent().parent().attr('id');

    if(parent_id =="homeCompareResult"){
			let data = JSON.parse(sessionStorage.getItem("comp2"));
            setCookie("homePrinciple", data.homePrinciple);
            setCookie("homeRate", data.homeRate);
            setCookie("homeTenure", data.homeTenure);
        	resetme();

    }
    if(parent_id =="homeResult"){
        	sessionStorage.removeItem("comp2");
        	resetme();

    }

});

       $('a').click(function(e){ 
      if( $(this).attr('href') != "#")
					resetme();
   });

    
function resetme()
    {
 	$("#homePrinciple").val(authoredHomePrinciple);
     $("#homeRate").val(authoredHomeRate);
     $("#homeTenure").val(authoredHomeTenure);

     $("#homeComparePrinciple").val(authoredHomePrinciple);
     $("#homeCompareRate").val(authoredHomeRate);
     $("#homeCompareResultTenure").val(authoredHomeTenure);
    }



});



$(document).ready(function(){
   var homeQuantity= 0;
      $('#homeAdd').click(function(e){
           e.preventDefault();
           var homeQuantity = parseFloat($(this).parents('.homeAdd_sub').find('input').val());
           $(this).parents('.homeAdd_sub').find('input').val((homeQuantity + 0.05).toFixed(2) +'%');
  
            if(homeQuantity > 14.75){
              $(this).parents('.homeAdd_sub').find('input').val((homeQuantity + 0).toFixed(2) +'%');
           }
       });
        $('#homeSub').click(function(e){
           e.preventDefault();
           var homeQuantity = parseFloat($(this).parents('.homeAdd_sub').find('input').val());
               if(homeQuantity>8.6){
                  $(this).parents('.homeAdd_sub').find('input').val((homeQuantity - 0.05).toFixed(2) +'%') ;
               }
       });
  
      var homeCompareQuantity=0;
      $('#homeCompareAdd').click(function(e){
           e.preventDefault();
           var homeCompareQuantity = parseFloat($(this).parents('.homeCompareAdd_sub').find('input').val());
           $(this).parents('.homeCompareAdd_sub').find('input').val((homeCompareQuantity + 0.05).toFixed(2) +'%');
  
            if(homeCompareQuantity >14.75){
              $(this).parents('.homeCompareAdd_sub').find('input').val((homeCompareQuantity + 0).toFixed(2) +'%');
           }
       });
        $('#homeCompareSub').click(function(e){
           e.preventDefault();
           var homeCompareQuantity = parseFloat($(this).parents('.homeCompareAdd_sub').find('input').val());
               if(homeCompareQuantity>8.6){
                  $(this).parents('.homeCompareAdd_sub').find('input').val(homeCompareQuantity.toFixed(2) - 0.05 +'%') ;
               }
       });
   });
