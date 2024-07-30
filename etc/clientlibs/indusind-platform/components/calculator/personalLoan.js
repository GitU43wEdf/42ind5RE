$(document).ready(function () {

    var authoredPersonalPrinciple,authoredPersonalRate,authoredPersonalTenure;

     authoredPersonalPrinciple = $("#personalPrinciple").val();
     authoredPersonalRate = $("#personalRate").val();
     authoredPersonalTenure = $("#personalTenure").val();

     $(".personalDefaultOption").remove();

     $("#personalPrinciple").on("input", function () {
      if ($("#personalPrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
    });

     $("#personalComparePrinciple").on("input", function () {
      if ($("#personalComparePrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
    });

    $("#personalRate,#personalCompareRate").attr('readonly','readonly');

    $("#personalCalculate").on('click' , function(e){
        e.preventDefault();

    setCookie('personalLoanAmount','',0);
	setCookie('personalLoanRate','',0);
	setCookie('personalLoantenure','',0);
    var personalLoanAmount = $("#personalPrinciple").val() ;
    console.log(personalLoanAmount)
    setCookie("personalLoanAmount",personalLoanAmount);
    var parseIntAmount = parseInt(personalLoanAmount);
    var personalCheck = personalLoanAmount[0];
    var personalLoanRate = $("#personalRate").val() ;
    console.log(personalLoanRate);
    setCookie("personalLoanRate",personalLoanRate);
    var splitRate = personalLoanRate.split("%");
    var personalRate = splitRate[0];
    var finalPersonalRate = personalRate / 1200;
    var personalLoantenure = $("#personalTenure").val() ;
    console.log(personalLoantenure);
    setCookie("personalLoantenure",personalLoantenure);

    var dataResult = {
                loanAmount : personalLoanAmount,
                personalLoanRate : finalPersonalRate,
                personalLoanTenure : personalLoantenure
                        };

    var data = JSON.stringify(dataResult);
        if(personalLoanAmount == ""){
             $(".personalPrincipleError").show();
             $(".personalRateError").hide();
             $(".selected_items").hide();
        }
        else if(personalLoanAmount<30000){
             $(".personalPrincipleError").show();
             $(".personalRateError").hide();
             $(".selected_items").hide();
        }
        else if(personalLoanAmount>5000000){
             $(".personalPrincipleError").show();
             $(".personalRateError").hide();
             $(".selected_items").hide();
        }
        else if(personalCheck == 0){
             $(".personalPrincipleError").show();
             $(".personalRateError").hide();
        }
        else if(finalPersonalRate==""){
             $(".personalPrincipleError").hide();
             $(".personalRateError").show();
        }
        else{
             $(".personalPrincipleError").hide();
             $(".personalRateError").hide();
             $(".errorMsg").hide();

        $.ajax({
                url: "/bin/personalLoan",
                type: "POST",
                data: {data : data, reqType : "personalLoan"},
                success: function (res) {

                   $("#personalLoanInputs").hide();
                   $("#PersonalLoan_calculated").show();
                   $("#personalCompare").show();
                   $("#personalCompareDiv").hide();
                   $(".selected_items").show();

                   $("#personalResult").show();

                   var parsedRes= JSON.parse(res);
                   var floatEmi = parsedRes.personalEmitAsString;
                   var totalAmount = floatEmi*personalLoantenure;
                   var finalTotal = Math.ceil(totalAmount);
                   var integerEmi = Math.round(floatEmi);
                   var intrest = finalTotal-personalLoanAmount ;

                    $("#personalResultEmi").html(integerEmi.toLocaleString('en-IN'));
                    $(".personalEmiTenure").html(personalLoantenure);
                    $("#personalPrincipleAmount").html(parseIntAmount.toLocaleString('en-IN'));
                    $("#personalInterestAmount").html(intrest.toLocaleString('en-IN'));
                    $("#personalTotalAmount").html(finalTotal.toLocaleString('en-IN'));
                    $(".selectedRate").html(personalLoanRate);
                },
                error: function (err) {
                    $(".errorMsg").show();
                }
    });
       }
         });

    $("#personalCompare").on('click',function(e){
        e.preventDefault();
        $("#personalCompareDiv").show();
        $("#personalCompareCalculator").show();
        $(this).hide();
        $(".link_compare_close").show();
        $("#personalCompareResult").hide();
         $(".personalComparePrincipleError").hide();

        $("#personalComparePrinciple").val(authoredPersonalPrinciple);
        $("#personalCompareRate").val(authoredPersonalRate);
        $("button[data-id='personalCompareTenure']").children().children().children().html(authoredPersonalTenure);
		$("#personalCompareTenure").val(authoredPersonalTenure);
    });

      if(window.location.href.indexOf("/personal-loan") > -1) {
        let personalLoanAmount = getCookie("personalLoanAmount");
        console.log(personalLoanAmount)
        let personalLoanRate =  getCookie("personalLoanRate");
        console.log(personalLoanRate)
        let personalLoantenure =   getCookie("personalLoantenure");
        console.log(personalLoantenure);
        if(personalLoanAmount && personalLoanRate && personalLoantenure)
        {
            $("#personalPrinciple").val(personalLoanAmount);
            $("#personalRate").val(personalLoanRate);
            $("#personalTenure").val(personalLoantenure);
        }
        
    }

    $('.link_compare_close').click(function(e) {
      e.preventDefault();
      $(this).parents('.col-md-6').hide();
      $('.link_compare_close').hide();
      $('#personalCompare').show();
    });

  $('#personalReload').click(function(e) {
      e.preventDefault();
      $('.calc_main .selected_items, .calc_main #PersonalLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
      $('.compare_col #personalCompare').show();
      $('.calc_main .vehicle-tab-container, .calc_main #personalLoanInputs').slideDown('slow');

      $("#personalPrinciple").val(authoredPersonalPrinciple);
      $("#personalRate").val(authoredPersonalRate);
      $("#personalTenure").val(authoredPersonalTenure);

      $("#personalComparePrinciple").val(authoredPersonalPrinciple);
      $("#personalCompareRate").val(authoredPersonalRate);
      $("#personalCompareTenure").val(authoredPersonalTenure);
      $("button[data-id='personalTenure']").children().children().children().html(authoredPersonalTenure);

  });

    $("#personalCompareCalculate").on('click' , function(e){
    e.preventDefault();
    var personalLoanAmountCompare = $("#personalComparePrinciple").val();
    var parseIntPersonalComparePrinciple = parseInt(personalLoanAmountCompare);
    var personalCheck2 = personalLoanAmountCompare[0];
    var personalLoanRateCompare = $("#personalCompareRate").val();
    var splitRateCompare = personalLoanRateCompare.split("%");
    var personalRateCompare = splitRateCompare[0];
    var finalPersonalRateCompare = personalRateCompare / 1200;
    var personalLoantenureCompare = $("#personalCompareTenure").val();

   var compareValues={
          personalLoanAmount:personalLoanAmountCompare,
          personalLoanRate:personalLoanRateCompare,
          personalLoantenure:personalLoantenureCompare

      };
    var dataResultCompare = {
                loanAmount : personalLoanAmountCompare,
                personalLoanRate : finalPersonalRateCompare,
                personalLoanTenure : personalLoantenureCompare
                        };

  sessionStorage.setItem("comp2", JSON.stringify(compareValues)); 

   var dataCompare = JSON.stringify(dataResultCompare);

         if(personalLoanAmountCompare == ""){
             $(".personalComparePrincipleError").show();
             $(".personalCompareRateError").hide();
             $("#personalCompareCalculator").show();
             $("#personalCompareResult").hide();
        }
         else if(personalLoanAmountCompare<30000){
           $(".personalComparePrincipleError").show();
             $(".personalCompareRateError").hide();
             $("#personalCompareCalculator").show();
             $("#personalCompareResult").hide();
        }
        else if(personalLoanAmountCompare>5000000){
             $(".personalComparePrincipleError").show();
             $(".personalCompareRateError").hide();
             $("#personalCompareCalculator").show();
             $("#personalCompareResult").hide();
        }
        else if(personalCheck2 == 0){
             $(".personalComparePrincipleError").show();
             $(".personalCompareRateError").hide();
             $("#personalCompareCalculator").show();
             $("#personalCompareResult").hide();
        }
        else if(finalPersonalRateCompare==""){
             $(".personalComparePrincipleError").hide();
             $(".personalCompareRateError").show();
        }
        else{
             $(".personalComparePrincipleError").hide();
             $(".personalCompareRateError").hide();

    $.ajax({
                url: "/bin/personalLoan",
                type: "POST",
                data: {data : dataCompare, reqType : "personalLoan"},
                success: function (resCompare) {
                  $("#personalCompareCalculator").hide();
                  $("#personalCompareResult").show();

                   var parsedResCompare= JSON.parse(resCompare);
                   var floatEmiCompare = parsedResCompare.personalEmitAsString;
                   var totalAmountCompare = floatEmiCompare*personalLoantenureCompare;
                   var finalTotalCompare = Math.ceil(totalAmountCompare);
                   var integerEmiCompare = Math.round(floatEmiCompare);
                   var intrestCompare = finalTotalCompare-personalLoanAmountCompare ;

                    $("#personalCompareResultEmi").html(integerEmiCompare.toLocaleString('en-IN'));
                    $(".personalCompareEmiTenure").html(personalLoantenureCompare);
                    $("#personalComparePrincipleAmount").html(parseIntPersonalComparePrinciple.toLocaleString('en-IN'));
                    $("#personalCompareInterestAmount").html(intrestCompare.toLocaleString('en-IN'));
                    $("#personalCompareTotalAmount").html(finalTotalCompare.toLocaleString('en-IN'));
                    $(".selectedCompareRate").html(personalLoanRateCompare);
                },
                error: function (err) {
                    console.log(err);
                    console.log("error");
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

    if(parent_id =="personalCompareResult"){
			let data = JSON.parse(sessionStorage.getItem("comp2"));
            setCookie("personalLoanAmount", data.personalLoanAmount);
            setCookie("personalLoanRate", data.personalLoanRate);
            setCookie("personalLoantenure", data.personalLoantenure);
        	sessionStorage.removeItem("comp2");
        	resetme();
    }

    if(parent_id =="personalResult"){
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
      $("#personalPrinciple").val(authoredPersonalPrinciple);
      $("#personalRate").val(authoredPersonalRate);
      $("#personalTenure").val(authoredPersonalTenure);

      $("#personalComparePrinciple").val(authoredPersonalPrinciple);
      $("#personalCompareRate").val(authoredPersonalRate);
      $("#personalCompareTenure").val(authoredPersonalTenure);
    }

});
$(document).ready(function(){
    var personalQuantity=0;
    $('#personalAdd').click(function(e){
    e.preventDefault();
    var personalQuantity = parseFloat($(this).parents('.personalAdd_sub').find('input').val());
    $(this).parents('.personalAdd_sub').find('input').val(personalQuantity + 0.25 +'%');
    if(personalQuantity>29.75){
    $(this).parents('.personalAdd_sub').find('input').val(personalQuantity + 0 +'%') ;
    }
    });
    $('#personalSub').click(function(e){
    e.preventDefault();
    var personalQuantity = parseFloat($(this).parents('.personalAdd_sub').find('input').val());
    if(personalQuantity>10.5){
    $(this).parents('.personalAdd_sub').find('input').val(personalQuantity - 0.25 +'%') ;
    }
    });
    var personalCompareQuantity=0;
    $('#personalCompareAdd').click(function(e){
    e.preventDefault();
    var personalCompareQuantity = parseFloat($(this).parents('.personalCompareAdd_sub').find('input').val());
    $(this).parents('.personalCompareAdd_sub').find('input').val(personalCompareQuantity + 0.25 +'%');
    if(personalCompareQuantity>29.75){
    $(this).parents('.personalCompareAdd_sub').find('input').val(personalCompareQuantity + 0 +'%') ;
    }
    });
    $('#personalCompareSub').click(function(e){
    e.preventDefault();
    var personalCompareQuantity = parseFloat($(this).parents('.personalCompareAdd_sub').find('input').val());
    if(personalCompareQuantity>10.5){
    $(this).parents('.personalCompareAdd_sub').find('input').val(personalCompareQuantity - 0.5 +'%') ;
    }
    });
    });
    
