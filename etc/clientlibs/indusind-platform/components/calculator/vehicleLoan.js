$(document).ready(function(){
 var vehicleListingQuantity=0;
    $('#add').click(function(e){
         e.preventDefault();
         var vehicleListingQuantity = parseInt($(this).parents('.add_sub').find('input').val());
         $(this).parents('.add_sub').find('input').val(vehicleListingQuantity + 1 +'%');

          if(vehicleListingQuantity>"19"){
                $(this).parents('.add_sub').find('input').val(vehicleListingQuantity + 0 +'%') ;
             }

     });
      $('#sub').click(function(e){
         e.preventDefault();
         var vehicleListingQuantity = parseInt($(this).parents('.add_sub').find('input').val());
             if(vehicleListingQuantity>3){
                $(this).parents('.add_sub').find('input').val(vehicleListingQuantity - 1 +'%') ;
             }
     });

     var vehicleListingCompareQuantity=0;
    $('#loanCompareAdd').click(function(e){
         e.preventDefault();
         var vehicleListingCompareQuantity = parseInt($(this).parents('.loanCompareAdd_sub').find('input').val());
         $(this).parents('.loanCompareAdd_sub').find('input').val(vehicleListingCompareQuantity + 1 +'%');

          if(vehicleListingCompareQuantity>"19"){
                $(this).parents('.loanCompareAdd_sub').find('input').val(vehicleListingCompareQuantity + 0 +'%') ;
             }

     });
      $('#loanCompareSub').click(function(e){
         e.preventDefault();
         var vehicleListingCompareQuantity = parseInt($(this).parents('.loanCompareAdd_sub').find('input').val());
             if(vehicleListingCompareQuantity>3){
                $(this).parents('.loanCompareAdd_sub').find('input').val(vehicleListingCompareQuantity - 1 +'%') ;
             }
     });
 });
$('.new_old_radios .custom-radio:first-child').addClass('active');
var authoredLoanPrinciple,authoredLoanRate,authoredLoanTenure,authoredLoanMonitorum;

$(document).ready(function () {
$("#other_select").on("change", function () {
$("#loanAmount").val(authoredLoanPrinciple);
  $("#loanRate").val(authoredLoanRate);
    $("#loanTime").val(authoredLoanTenure);
    $("#loanTime").selectpicker('refresh');

    $('.calc_main').find('.calc_box .resizeinputbox').css('width','84px');
    $('#vehicleLoanInputs').hide();
    $('#loanCalculator').show();
    $("#loanCompareDiv").hide();
    $("#loanCompareResult").hide();
    
    
});

    authoredLoanPrinciple = $("#loanAmount").val();
    authoredLoanRate = $("#loanRate").val();
    authoredLoanTenure = $("#loanTime").val();
    authoredLoanMonitorum = "1";//$("#monoTime").val()
    //console.log(authoredLoanTenure);

    //#customRadio_4w_1,#customRadio_4w_2,
    $(".vehicle_type,.form-control.custom_select").on('click',function(){

  $("#loanAmount").val(authoredLoanPrinciple);
  $("#loanRate").val(authoredLoanRate);
  $("button[data-id='loanTime']").children().children().children().html(authoredLoanTenure);

  //$("#time").val(authoredLoanTenure);


    });

    $("#loanAmount,#vehicleLoanPrincipleCompare").on("input", function () {
      if ($("#loanAmount,#vehicleLoanPrincipleCompare").val().length <= 10) {
        this.value = this.value.replace(/[^0-9\.]/g, "");
      }
    });

    $(".defaultLoanValue").remove();

    $("#loanRate ,#vehicleLoanRateCompare").attr('readonly','readonly')

    $("#loanCalculate").on("click", function(e){
          e.preventDefault();
         var loanPrinciple = $("#loanAmount").val();
         var loanCheck = loanPrinciple[0]
         var loanRate = $("#loanRate").val();
         var loanSplitRate = loanRate.split('%');
         var loanInterest_rate = loanSplitRate[0];
         var monotorium =  "1"; //$("#monoTime").val();
         var loanTenure = $("#loanTime").val();

         $("#vehicleLoanCompare").show();
       if(loanPrinciple==""){
           $(".vehicleLoanPrincipleError").show();
           $(".vehicleLoanRateError").hide();
           $("#loanCalculator").show();
           $("#vehicleLoanInputs").hide()
           $("#vehicleListingCal").hide();
       }
       else if(loanCheck == 0){
           $(".vehicleLoanPrincipleError").show();
           $(".vehicleLoanRateError").hide();
           $("#loanCalculator").show();
           $("#vehicleLoanInputs").hide()
           $("#vehicleListingCal").hide();
       }
       else{
           $(".vehicleLoanPrincipleError").hide();
           $(".vehicleLoanRateError").hide();
           $(".errorMsg").hide();

         var loanDataResult = {
                principle : loanPrinciple,
                rate : loanInterest_rate,
                tenure : loanTenure,
            	monitorium: monotorium,
             	type:"0",
             	future_value:"0.00"

                         };

         var loanData = JSON.stringify(loanDataResult);
           
         $.ajax({
                url: "/bin/vehicleLoan",
                type: "POST",
                data: {data : loanData, reqType : "vehicle"},

                success: function (res) {

                    $("#loanCalculator").hide();
                    $("#vehicleLoanInputs").show()
                    $("#vehicleListingCal").show();
                    var parsedRes= JSON.parse(res);

                    var loanEMI = parsedRes.maturityVal[0];
                    var loanEMIInterest = parsedRes.maturityVal[1];

                    var loanEMIValINT = parseInt(loanEMI);
                    var loanEMIValSTD = (loanEMIValINT.toLocaleString('en'));

                    var loanIntrest = (parseInt(loanEMI) * (loanTenure-monotorium)) - loanPrinciple;
                    var loanIntrestINT = parseInt(loanIntrest);//+parseInt(loanEMIInterest);
                    var loanIntrestSTD = (loanIntrestINT.toLocaleString('en'));

                    var loanPrinciple_Amount = loanPrinciple;
                    var loanPrinciple_AmountINT = parseInt(loanPrinciple_Amount);
                    var loanPrinciple_AmountSTD = (loanPrinciple_AmountINT.toLocaleString('en'));

                    var loanTotal_Amount_Payment = /*parseFloat(loanEMIInterest) +*/ parseFloat(loanIntrest) + parseFloat(loanPrinciple_Amount) ;
                    var loanTotal_Amount_PaymentINT = parseInt(loanTotal_Amount_Payment);
                    var loanTotal_Amount_PaymentSTD = (loanTotal_Amount_PaymentINT.toLocaleString('en'));

                    var tenure=parseInt(loanTenure)-parseInt(monotorium);
                    $("#loanEMI").html(loanEMIValSTD) ; 
                    $("#loanMonths").html(tenure); 
                    $("#loanPrincipleAmount").html(loanPrinciple_AmountSTD);
                    $("#loanInterestAmount").html(loanIntrestSTD);
                    $("#loanTotalAmount").html(loanTotal_Amount_PaymentSTD);

                 },
                error: function (err) {
                    $(".errorMsg").show();
                }
    });
        }
  });

    $("#vehicleLoanCompare").click(function(e) {
       e.preventDefault();
        $(this).hide()
        $("#loanCompareDiv").show();
        $('.link_compare_close').show();
        $("#vehicleLoanComareCal").show();
        $("#loanCompareResult").hide();
        $(".vehicleLoanPrincipleError").hide();
        $(".vehicleLoanRateError").hide();
        $(".errorMsg").hide();

        $("#vehicleLoanPrincipleCompare").val(authoredLoanPrinciple);
        $("#vehicleLoanRateCompare").val(authoredLoanRate);
        $("#loanCompareTime").val(authoredLoanTenure);
        $("button[data-id='loanCompareTime']").children().children().children().html(authoredLoanTenure);
    });

   $('.link_compare_close').click(function(e) {
       e.preventDefault();
       $(this).parents('.col-md-6').hide();
       $('.link_compare_close').hide();
       $("#vehicleLoanCompare").show();
   });

    $("#vehicleLoanCalculateCompare").on("click", function(e){
         e.preventDefault();
         var loanPrincipleCompare = $("#vehicleLoanPrincipleCompare").val();
         var loanCheckCompare = loanPrincipleCompare[0]
         var loanRateCompare = $("#vehicleLoanRateCompare").val();
         var loanSplitRateCompare = loanRateCompare.split('%');
         var loanInterest_rateCompare = loanSplitRateCompare[0];
         var loanTenureCompare = $("#loanCompareTime").val();
 		 var monotoriumcompare =  "1";//$("#comparemonoTime").val();

       if(loanPrincipleCompare==""){
           $(".vehicleLoanPrincipleError").show();
           $(".vehicleLoanRateError").hide();
           $("#vehicleLoanComareCal").show();
           $("#loanCompareResult").hide();
       }
       else if(loanCheckCompare == 0){
           $(".vehicleLoanPrincipleError").show();
           $(".vehicleLoanRateError").hide();
           $("#vehicleLoanComareCal").show();
           $("#loanCompareResult").hide();
       }
       else{

           $(".vehicleLoanPrincipleError").hide();
           $(".vehicleLoanRateError").hide();
           $(".errorMsg").hide();


         var loanDataResultCompare = {
                principle : loanPrincipleCompare,
                rate : loanInterest_rateCompare,
                tenure : loanTenureCompare,
             	monitorium: monotoriumcompare,
             	type:"0",
             	future_value:"0.00"
                         };

         var loanDataCompare = JSON.stringify(loanDataResultCompare);

         $.ajax({
                url: "/bin/vehicleLoan",
                type: "POST",
                data: {data : loanDataCompare, reqType : "vehicle"},
                success: function (resp) {
                    $("#vehicleLoanComareCal").hide();
                    $("#loanCompareResult").show();


                    var parsedResCompare = JSON.parse(resp);


                    var loanEMICompare = parsedResCompare.maturityVal[0];
                    var loanEMIInterestCompare = parsedResCompare.maturityVal[1];

                    var loanEMIValINTCompare = parseInt(loanEMICompare);
                    var loanEMIValSTDCompare = (loanEMIValINTCompare.toLocaleString('en'));

                    var loanIntrestCompare = (parseInt(loanEMICompare) * (loanTenureCompare-monotoriumcompare)) - loanPrincipleCompare;
                    var loanIntrestINTCompare = parseInt(loanIntrestCompare);//+parseInt(loanEMIInterestCompare);
                    var loanIntrestSTDCompare = (loanIntrestINTCompare.toLocaleString('en'));

                    var loanPrinciple_AmountCompare = loanPrincipleCompare;
                    var loanPrinciple_AmountINTCompare = parseInt(loanPrinciple_AmountCompare);
                    var loanPrinciple_AmountSTDCompare = (loanPrinciple_AmountINTCompare.toLocaleString('en'));

                    var loanTotal_Amount_PaymentCompare = /*parseFloat(loanEMIInterestCompare) +*/ parseFloat(loanIntrestCompare) + parseFloat(loanPrinciple_AmountCompare) ;
                    var loanTotal_Amount_PaymentINTCompare = parseInt(loanTotal_Amount_PaymentCompare);
                    var loanTotal_Amount_PaymentSTDCompare = (loanTotal_Amount_PaymentINTCompare.toLocaleString('en'));

                     var tenurecompare=parseInt(loanTenureCompare)-parseInt(monotoriumcompare);

                    $("#loanCompareEMI").html(loanEMIValSTDCompare) ; 
                    $("#loanMonthsCompare").html(tenurecompare); 
                    $("#loanComparePrincipleAmount").html(loanPrinciple_AmountSTDCompare);
                    $("#loanCompareInterestAmount").html(loanIntrestSTDCompare);
                    $("#loanCompareTotalAmount").html(loanTotal_Amount_PaymentSTDCompare);

                 },
                error: function (err) {
                    $(".errorMsg").show();
                }
    });
        }
  });

    var Plugins;(function(n){var t=function(){function n(n){typeof n=="undefined"&&(n=30);this.space=n}return n}(),i;n.AutosizeInputOptions=t;i=function(){function n(t,i){var r=this;this._input=$(t);this._options=$.extend({},n.getDefaultOptions(),i);this._mirror=$('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>');$.each(["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],function(n,t){r._mirror[0].style[t]=r._input.css(t)});$("body").append(this._mirror);this._input.on("keydown keyup input propertychange change",function(){r.update()});(function(){r.update()})()}return n.prototype.getOptions=function(){return this._options},n.prototype.update=function(){var n=this._input.val()||"",t;n!==this._mirror.text()&&(this._mirror.text(n),t=this._mirror.width()+this._options.space,this._input.width(t))},n.getDefaultOptions=function(){return this._defaultOptions},n.getInstanceKey=function(){return"autosizeInputInstance"},n._defaultOptions=new t,n}();n.AutosizeInput=i,function(t){var i="autosize-input",r=["text","password","search","url","tel","email","number"];t.fn.autosizeInput=function(u){return this.each(function(){if(this.tagName=="INPUT"&&t.inArray(this.type,r)>-1){var f=t(this);f.data(n.AutosizeInput.getInstanceKey())||(u==undefined&&(u=f.data(i)),f.data(n.AutosizeInput.getInstanceKey(),new n.AutosizeInput(this,u)))}})};t(function(){t("input[data-"+i+"]").autosizeInput()})}(jQuery)})(Plugins||(Plugins={}))
// $('.vehicle_type').each(function(index,element){
//     console.log(element);
// })
//var testflag=0,currentElement;
var auth
    $(document).on('click','.vehicle_type',function(){
        $('#vehicleLoanInputs').hide();
        $('#loanCalculator').show();
    });

    //console.log('lalala');
$('.link_compare').click(function(e){
      $(this).parents('.calc_main').find('.compare_col_added').find('.calc_box .resizeinputbox').css('width','84px');
 	});
     $('.btn_reload_calc').click(function(e){
       e.preventDefault();
       $(this).parents('.calc_main').find('.calc_box .resizeinputbox').css('width','84px');
   });

   $('#vehicleLoanReload').click(function(e) {
    e.preventDefault();
    $(".form_VehicleLoan")[0].reset();
    $("#loanTime").selectpicker('refresh');
    $("#monotorium").selectpicker('refresh');
    $('#monotorium option:contains("0")').prop('selected',true);
    $("#vehicleListingCal").hide();
    $("#vehicleLoanComareCal").hide();
    $("#loanCompareResult").hide();
    $("#loanCompareDiv").hide();
    $("#loanCalculator").show();
    $('#loanAmount.resizeinputbox').css('width','84px');

   });

     $('#customRadio_4w_1,#customRadio_4w_2').click(function(e) {
    $(".form_VehicleLoan")[0].reset();
    $("#loanTime").selectpicker('refresh');
    $("#vehicleListingCal").hide();
    $("#vehicleLoanComareCal").hide();
    $("#loanCompareResult").hide();
    $("#loanCompareDiv").hide();
    $("#loanCalculator").show();
    $('#loanAmount.resizeinputbox').css('width','84px');
    $("#loanAmount").val(authoredLoanPrinciple);
  	$("#loanRate").val(authoredLoanRate);
  	$("button[data-id='loanTime']").children().children().children().html(authoredLoanTenure);
      
   });

});
