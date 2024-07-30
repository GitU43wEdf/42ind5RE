$(document).ready(function () {



    function deleteCookie()
    {
        document.cookie = "affhomePrinciple=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "affhomeRate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "affhomeTenure=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    var authoredHomePrinciple,authoredHomeRate,authoredHomeTenure,authorHomeMorno;
    authoredHomePrinciple = $("#affhomePrinciple").val();
    authoredHomeRate = $("#affhomeRate").val();
    authoredHomeTenure = $("#affhomeTenure").val();
    authorHomeMorno=$("#affmonoTenure").val();

    $(".homeOptionDefault").remove();

    $("#affhomePrinciple").on("input", function () {
     if ($("#affhomePrinciple").val().length <= 10) {
         this.value = this.value.replace(/[^0-9\0]/g, "");
     }
    });

    $("#affhomeComparePrinciple").on("input", function () {
     if ($("#affhomeComparePrinciple").val().length <= 10) {
         this.value = this.value.replace(/[^0-9\0]/g, "");
     }
    });

    $("#affhomeRate,#affhomeCompareRate").attr('readonly','readonly');



    $("#affhomeCalculate").on('click' , function(e){
        e.preventDefault();

    var homePrinciple = $("#affhomePrinciple").val();
    var parseIntHomePrinciple = parseInt(homePrinciple);
    var homeCheck = homePrinciple[0];
    var homeRate = $("#affhomeRate").val();
    var splitRate = homeRate.split("%");
    var convertedRate = splitRate[0];
    var finalHomeRate = convertedRate/1200;
    var homeYears = $("#affhomeTenure").val();
    var homeTenure = homeYears*12;
    var monoTenure = "0";//$("#monoTenure").val();   
    setCookie("affhomePrinciple", homePrinciple);
    setCookie("affhomeRate", homeRate);
    setCookie("affhomeTenure", homeYears);



    var dataResult = {
               loanAmount : homePrinciple,
               personalLoanRate : finalHomeRate,
               personalLoanTenure : homeTenure,
        	   monotorium:monoTenure,
        	   type:"0",
        	   future_value:"0.00"
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

                  $("#affhomeLoanInputs").hide();
                  $("#affhomeLoan_calculated").show();
                  $("#affhomeCompare").show();
                  $("#affhomeCompareDiv").hide();
                  $(".homeSelected_items").show();
                  $("#affhomeResult").show();

                  var parsedResHome= JSON.parse(res);
                  var homeFloatEmi = parsedResHome.personalEmitAsString;
                  var homeTotalAmount = homeFloatEmi*homeTenure;
                  var homeFinalTotal = Math.ceil(homeTotalAmount);
                  var homeIntegerEmi = Math.round(homeFloatEmi);
                  var homeIntrest = homeFinalTotal-homePrinciple ;

                  $("#affhomeEmi").html(homeIntegerEmi.toLocaleString('en-IN'));
                  $(".homeResultTenure").html(homeTenure);
                  $("#affhomePrincipleAmount").html(parseIntHomePrinciple.toLocaleString('en-IN'));
                  $("#affhomeInterestAmount").html(homeIntrest.toLocaleString('en-IN'));
                  $("#affhomeTotalAmount").html(homeFinalTotal.toLocaleString('en-IN'));
               },
               error: function (err) {
                   $(".errorMsg").show();
               }
   });
       }
 });

      if(window.location.href.indexOf("/home-loan") > -1) {
       let homePrincipleDetail = getCookie("affhomePrinciple");
       let homeRateDetail =  getCookie("affhomeRate");
       let homeTenureDetail =   getCookie("affhomeTenure");
       if(homePrincipleDetail && homeRateDetail && homeTenureDetail)
       {
        $("#affhomePrinciple").val(homePrincipleDetail);
        $("#affhomeRate").val(homeRateDetail);
        $("#affhomeTenure").val(homeTenureDetail);
        deleteCookie();   
       }

   }



     $("#affhomeCompare").on('click',function(e){
       e.preventDefault();
       $("#affhomeCompareDiv").show();
       $("#affhomeCompareCalculator").show();
       $(this).hide();
       $(".link_compare_close").show();
       $("#affhomeCompareResult").hide();
       $(".affhomeComparePrincipleError").hide();

       $("#affhomeComparePrinciple").val(authoredHomePrinciple);
       $("#affhomeCompareRate").val(authoredHomeRate);
       $("button[data-id='affhomeCompareResultTenure']").children().children().children().html(authoredHomeTenure);

       $("#affhomeCompareResultTenure").val(authoredHomeTenure);
   });

   $('.link_compare_close').click(function(e) {
     e.preventDefault();
     $(this).parents('.col-md-6').hide();
     $(this).hide();
     $('#affhomeCompare').show();
   });

  $('#affhomeReload').click(function(e) {
     e.preventDefault();
     $('.calc_main .homeSelected_items, .calc_main #affhomeLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
     $('.compare_col .link_compare').show();
     $('.calc_main .vehicle-tab-container, .calc_main #affhomeLoanInputs').slideDown('slow');

     $("#affhomePrinciple").val(authoredHomePrinciple);
     $("#affhomeRate").val(authoredHomeRate);
     $("#affhomeTenure").val(authoredHomeTenure);

     $("#affhomeComparePrinciple").val(authoredHomePrinciple);
     $("#affhomeCompareRate").val(authoredHomeRate);
     $("#affhomeCompareResultTenure").val(authoredHomeTenure);
     $("button[data-id='affhomeTenure']").children().children().children().html(authoredHomeTenure);


  });

  $("#affhomeCompareCalculate").on('click' , function(e){
    e.preventDefault();
    var homePrincipleCompare = $("#affhomeComparePrinciple").val();
    var parseIntHomeComparePrinciple = parseInt(homePrincipleCompare);
    var homeCheck2 = homePrincipleCompare[0];
    var homeRateCompare = $("#affhomeCompareRate").val();
    var splitRateCompare = homeRateCompare.split("%");
    var convertedRateCompare = splitRateCompare[0];
    var finalHomeRateCompare = convertedRateCompare/1200;
    var homeYearsCompare = $("#affhomeCompareResultTenure").val();
    var homeTenureCompare = homeYearsCompare*12;
    var monoTenurecompare ="0";// $("#monoTenurecompare").val();   


      var compareValues={
          "homePrinciple":homePrincipleCompare,
          "homeRate":homeRateCompare,
          "homeTenure":homeYearsCompare

      };
    var dataResultComp = {
               loanAmount : homePrincipleCompare,
               personalLoanRate : finalHomeRateCompare,
               personalLoanTenure : homeTenureCompare,
           	   monotorium:monoTenurecompare,
        	   type:"0",
        	   future_value:"0.00"
                      };

    sessionStorage.setItem("comp2", JSON.stringify(compareValues));   
    var data = JSON.stringify(dataResultComp);

       if(homePrincipleCompare == ""){
            $(".homeComparePrincipleError").show();
            $(".homeCompareRateError").hide();
            $("#affhomeCompareCalculator").show();
            $("#affhomeCompareResult").hide();
        }
       else if(homeCheck2==0){
            $(".homeComparePrincipleError").show();
            $(".homeCompareRateError").hide();
            $("#affhomeCompareCalculator").show();
            $("#affhomeCompareResult").hide();
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

                  $("#affhomeCompareCalculator").hide();
                  $("#affhomeCompareResult").show();

                  var parsedResHomeCompare = JSON.parse(res);
                  var homeCompareFloatEmi = parsedResHomeCompare.personalEmitAsString;
                  var homeCompareTotalAmount = homeCompareFloatEmi*homeTenureCompare;
                  var homeCompareFinalTotal = Math.ceil(homeCompareTotalAmount);
                  var homeCompareIntegerEmi = parseInt(homeCompareFloatEmi);
                  var homeCompareIntrest = homeCompareFinalTotal-homePrincipleCompare ;

                  $("#affhomeCompareEmi").html(homeCompareIntegerEmi.toLocaleString('en-IN'));
                  $(".homeCompareResultTenure").html(homeTenureCompare);
                  $("#affhomeComparePrincipleAmount").html(parseIntHomeComparePrinciple.toLocaleString('en-IN'));
                  $("#affhomeCompareInterestAmount").html(homeCompareIntrest.toLocaleString('en-IN'));
                  $("#affhomeCompareTotalAmount").html(homeCompareFinalTotal.toLocaleString('en-IN'));

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

    if(parent_id =="affhomeCompareResult"){
			let data = JSON.parse(sessionStorage.getItem("comp2"));
            setCookie("affhomePrinciple", data.homePrinciple);
            setCookie("affhomeRate", data.homeRate);
            setCookie("affhomeTenure", data.homeTenure);
        	resetme();

    }
    if(parent_id =="affhomeResult"){
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
 	$("#affhomePrinciple").val(authoredHomePrinciple);
     $("#affhomeRate").val(authoredHomeRate);
     $("#affhomeTenure").val(authoredHomeTenure);

     $("#affhomeComparePrinciple").val(authoredHomePrinciple);
     $("#affhomeCompareRate").val(authoredHomeRate);
     $("#affhomeCompareResultTenure").val(authoredHomeTenure);
    }



});



$(document).ready(function(){
 var homeQuantity= 0;
    $('#affhomeAdd').click(function(e){
         e.preventDefault();
         var homeQuantity = parseFloat($(this).parents('.homeAdd_sub').find('input').val());
         $(this).parents('.homeAdd_sub').find('input').val(homeQuantity + 0.25 +'%');

          if(homeQuantity > 14.75){
            $(this).parents('.homeAdd_sub').find('input').val(homeQuantity + 0 +'%');
         }
     });
      $('#affhomeSub').click(function(e){
         e.preventDefault();
         var homeQuantity = parseFloat($(this).parents('.homeAdd_sub').find('input').val());
             if(homeQuantity>8){
                $(this).parents('.homeAdd_sub').find('input').val(homeQuantity - 0.25 +'%') ;
             }
     });

    var homeCompareQuantity=0;
    $('#affhomeCompareAdd').click(function(e){
         e.preventDefault();
         var homeCompareQuantity = parseFloat($(this).parents('.homeCompareAdd_sub').find('input').val());
         $(this).parents('.homeCompareAdd_sub').find('input').val(homeCompareQuantity + 0.25 +'%');

          if(homeCompareQuantity >14.75){
            $(this).parents('.homeCompareAdd_sub').find('input').val(homeCompareQuantity + 0 +'%');
         }
     });
      $('#affhomeCompareSub').click(function(e){
         e.preventDefault();
         var homeCompareQuantity = parseFloat($(this).parents('.homeCompareAdd_sub').find('input').val());
             if(homeCompareQuantity>8){
                $(this).parents('.homeCompareAdd_sub').find('input').val(homeCompareQuantity - 0.25 +'%') ;
             }
     });
 });
