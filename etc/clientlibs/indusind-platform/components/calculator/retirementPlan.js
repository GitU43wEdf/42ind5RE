$(document).ready(function () {
     let selectedDataRetirement,retirementAuthoredRAge,retirementAuthoredRate,retirementAuthoredAfterRAge;
     let selectedDataRetirement2,retirementAuthoredPrinciple,retirementAuthoredCurrentAge;
     let currentYear = (new Date).getFullYear();
      retirementAuthoredPrinciple = $("#retirementPrinciple").val();
      retirementAuthoredCurrentAge = $("#currentAge").val();
      retirementAuthoredRAge = $("#retirementAge").val();
      retirementAuthoredRate = $("#retirementRate").val();
      retirementAuthoredAfterRAge = $("#afterRetirementAge").val();

    $(".hideDefault").remove();


    $("#retirementPrinciple").on("input", function () {
      if ($("#retirementPrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
    });

     $("#retirementComparePrinciple").on("input", function () {
      if ($("#retirementComparePrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
    });

   $('a').click(function(e){ 
      if( $(this).attr('href') != "#")
					resetme();
   });

        $('.btn-outline-primary').on('click', function(){

	 var parent_id = $(this).parent().parent().parent().parent().parent().attr('id');
    if((parent_id == undefined) || (parent_id==null))
		parent_id = $(this).parent().parent().parent().parent().parent().parent().attr('id');

    if(parent_id =="retirementCompareResult"){
        	resetme();

    }
    if(parent_id =="retirementResult"){
        	resetme();

    }

	});


    function resetme()
    {

 	    $("#retirementPrinciple").val(retirementAuthoredPrinciple);
        $("#currentAge").val(retirementAuthoredCurrentAge);
        $("#retirementAge").val(retirementAuthoredRAge);
        $("#retirementRate").val(retirementAuthoredRate);
        $("#afterRetirementAge").val(retirementAuthoredAfterRAge);

        $("#retirementComparePrinciple").val(retirementAuthoredPrinciple);
        $("#retirementCompareCurrentAge").val(retirementAuthoredCurrentAge);
        $("#compareRetirementAge").val(retirementAuthoredRAge);
        $("#compareRetiremetRate").val(retirementAuthoredRate);
        $("#compareAfterRetirementAge").val(retirementAuthoredAfterRAge);
        $("button[data-id='currentAge']").children().children().children().html(retirementAuthoredCurrentAge);
        $("button[data-id='retirementAge']").children().children().children().html(retirementAuthoredRAge);
        $("button[data-id='afterRetirementAge']").children().children().children().html(retirementAuthoredAfterRAge);
    }


    $("#retirementRate,#compareRetiremetRate").attr('readonly','readonly');

    $("#retirementCalculate").on("click", function(e){
         e.preventDefault();
         let retirementPrinciple = $("#retirementPrinciple").val();
         let retirementCheck = retirementPrinciple[0];
         let currentAge = $("#currentAge").val();
         let retirementAge = $("#retirementAge").val();
         let afterRetirementAge = $("#afterRetirementAge").val();
         let retirementRate = $("#retirementRate").val();
         let splitrate1 = retirementRate.split("%");
         let rate1 = splitrate1[0];
         let ageDiffrence = retirementAge - currentAge ;

             var dataResult = {
                age : currentAge,
                monthlyExpense : retirementPrinciple,
                retirementAge : retirementAge,
                ageYearList:afterRetirementAge ,
                retirementRate :rate1
                         };

         var data = JSON.stringify(dataResult);

        if(retirementPrinciple==""){
            $(".retirementPrincipleError").show();
            $(".retirementRateError").hide();
            $(".selected_items").hide();
        }
        else if(retirementCheck==0){
            $(".retirementPrincipleError").show();
            $(".retirementRateError").hide();
        }
        else if(retirementRate==""){
            $(".retirementRateError").show();
            $(".retirementPrincipleError").hide();
        }
        else{
            $("#retirementCompare").show();
            $(".retirementRateError").hide();
            $(".retirementPrincipleError").hide();
            $(".errorMsg").hide();

            $.ajax({
                url: "/bin/retirementPlan",
                type: "POST",
                data: {data : data, reqType : "retirement"},
                success: function (res) {

                    if(selectedDataRetirement == "SIP"){
                        $("#retirementResultSIP").show();
                        $("#retirementResultOneTime").hide();
                    }
                    else{
                        $("#retirementResultSIP").hide();
                        $("#retirementResultOneTime").show();
                    }

                    $("#retirementLoanInputs").hide();
                    $("#retirementLoan_calculated").show();
                    $(".selected_items").show();


                    $("#retirementResult").show();
                    $("#retirementCompareDiv").hide();
                    $("#retirementCompareCal").hide();


                    var parsedRes = JSON.parse(res);

                    var totalRetirement = parsedRes.totalRetirementAsString;
                    var totalRetirementINT = parseFloat(totalRetirement);
                    var totalRetirementSTD = (totalRetirementINT.toLocaleString('en-IN'));

                    var retirementSip = parsedRes.retirementSipAsString;
                    var retirementSipINT = parseFloat(retirementSip);
                    var retirementSipSTD = (retirementSipINT.toLocaleString('en-IN'));

                    var retirementOneTime = parsedRes.retirementOneTimeAsString;
                    var retirementOneTimeINT = parseFloat(retirementOneTime);
                    var retirementOneTimeSTD = (retirementOneTimeINT.toLocaleString('en-IN'));

                    $("#totalRetirement").html(totalRetirementSTD);
                    $("#retirementSip").html(retirementSipSTD);
                    $("#retirementOneTime").html(retirementOneTimeSTD);
                    $("#tenureMonths").html(ageDiffrence);
                    $(".years").html(currentYear+ageDiffrence);
                    $(".retirementYears").html(ageDiffrence);

                   
                 },
                error: function (err) {
                    
                }
    });

        }


  });

    $("#retirementCompare").on("click", function(e){

        e.preventDefault();
        $(this).hide();
        $("#retirementCompareDiv").show();
        $(".link_compare_close").show();
        $("#retirementCompareCalculate").show();
        $("#retirementCompareResult").hide();
        $("#retirementCompareCal").show();
        $(".retirementComparePrincipleError").hide();

        $("#retirementComparePrinciple").val(retirementAuthoredPrinciple);
        $("#retirementCompareCurrentAge").val(retirementAuthoredCurrentAge);
        $("#compareRetirementAge").val(retirementAuthoredRAge);
        $("#compareRetiremetRate").val(retirementAuthoredRate);
        $("#compareAfterRetirementAge").val(retirementAuthoredAfterRAge);

    });

     $('.link_compare_close').click(function(e) {
        e.preventDefault();
        $(this).parents('.col-md-6').hide();
        $('.link_compare_close').hide();
        $('#retirementCompare').show();
    });

    $('#retirementReload').click(function(e) {
        e.preventDefault();
        $('.calc_main .selected_items, .calc_main #retirementLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
        $('.compare_col .link_compare').show();
        $('.calc_main .vehicle-tab-container, .calc_main #retirementLoanInputs').slideDown('slow');

        $("#retirementPrinciple").val(retirementAuthoredPrinciple);
        $("#currentAge").val(retirementAuthoredCurrentAge);
        $("#retirementAge").val(retirementAuthoredRAge);
        $("#retirementRate").val(retirementAuthoredRate);
        $("#afterRetirementAge").val(retirementAuthoredAfterRAge);

        $("#retirementComparePrinciple").val(retirementAuthoredPrinciple);
        $("#retirementCompareCurrentAge").val(retirementAuthoredCurrentAge);
        $("#compareRetirementAge").val(retirementAuthoredRAge);
        $("#compareRetiremetRate").val(retirementAuthoredRate);
        $("#compareAfterRetirementAge").val(retirementAuthoredAfterRAge);
        $("button[data-id='currentAge']").children().children().children().html(retirementAuthoredCurrentAge);
        $("button[data-id='retirementAge']").children().children().children().html(retirementAuthoredRAge);
        $("button[data-id='afterRetirementAge']").children().children().children().html(retirementAuthoredAfterRAge);

       

    });


    $('.toggle').on('change', function() {

      var isChecked = $(this).is(':checked');
      var $switchLabel = $('.slider_sw');
      if(isChecked) {
        selectedDataRetirement = $switchLabel.attr('data-on');
      } else {
        selectedDataRetirement = $switchLabel.attr('data-off');
      }

}); 


    $('.toggleCompare').on('change', function() {

      var isChecked = $(this).is(':checked');
      var $switchLabel = $('.slider_sw');
      if(isChecked) {
        selectedDataRetirement2 = $switchLabel.attr('data-on');
      } else {
        selectedDataRetirement2 = $switchLabel.attr('data-off');
      }

}); 


     $("#retirementCompareCalculate").on("click", function(e){
         e.preventDefault();
         var retirementComparePrinciple = $("#retirementComparePrinciple").val();
         var retirementCheck2 = retirementComparePrinciple[0];
         var retirementCompareCurrentAge = $("#retirementCompareCurrentAge").val();
         var compareRetirementAge = $("#compareRetirementAge").val();
         var compareAfterRetirementAge = $("#compareAfterRetirementAge").val();
         var compareRetiremetRate = $("#compareRetiremetRate").val();
         $("button[data-id='retirementCompareCurrentAge']").children().children().children().html(retirementAuthoredCurrentAge);
         $("button[data-id='compareRetirementAge']").children().children().children().html(retirementAuthoredRAge);
         $("button[data-id='compareAfterRetirementAge']").children().children().children().html(retirementAuthoredAfterRAge);

         var splitRate = compareRetiremetRate.split("%");
         var rateCompare = splitRate[0];
         var ageDiffrenceCompare = compareRetirementAge - retirementCompareCurrentAge ;

             var dataResult2 = {
                age : retirementCompareCurrentAge,
                monthlyExpense : retirementComparePrinciple,
                retirementAge : compareRetirementAge,
                ageYearList:compareAfterRetirementAge ,
                retirementRate :rateCompare
                         };

         var dataCompare = JSON.stringify(dataResult2);

          if(retirementComparePrinciple==""){
             $(".retirementComparePrincipleError").show();
             $(".retirementCompareRateError").hide();
             $("#retirementCompareCal").show();
             $("#retirementCompareResult").hide();

          }
         else if(retirementCheck2 == 0){
             $(".retirementComparePrincipleError").show();
             $(".retirementCompareRateError").hide();
             $("#retirementCompareCal").show();
             $("#retirementCompareResult").hide();
         }
         else if(compareRetiremetRate==""){
             $(".retirementCompareRateError").show();
             $(".retirementComparePrincipleError").hide();
             $("#retirementCompareCal").show();
             $("#retirementCompareResult").hide();
         }
         else{
             $(".retirementCompareRateError").hide();
             $(".retirementComparePrincipleError").hide();
             $(".errorMsg").hide();

         $.ajax({
                url: "/bin/retirementPlan",
                type: "POST",
                data: {data : dataCompare, reqType : "retirement"},
                success: function (res) {

                    if(selectedDataRetirement2 == "SIP"){
                        $("#retirementCompareOneTime").hide();
                        $("#retirementCompareSIP").show();
                    }

                    else{
                        $("#retirementCompareOneTime").show();
                        $("#retirementCompareSIP").hide();
                    }

                    $("#retirementCompareCal").hide();
                    $("#retirementCompareResult").show();


                    var parsedRes2 = JSON.parse(res);

                    var totalRetirement2 = parsedRes2.totalRetirementAsString;
                    var totalRetirementINT2 = parseFloat(totalRetirement2);
                    var totalRetirementSTD2 = (totalRetirementINT2.toLocaleString('en-IN'));


                    var retirementSip2 = parsedRes2.retirementSipAsString;
                    var retirementSipINT2 = parseFloat(retirementSip2);
                    var retirementSipSTD2 = (retirementSipINT2.toLocaleString('en-IN'));

                    var retirementOneTime2 = parsedRes2.retirementOneTimeAsString;
                    var retirementOneTimeINT2 = parseFloat(retirementOneTime2);
                    var retirementOneTimeSTD2 = (retirementOneTimeINT2.toLocaleString('en-IN'));

                    $("#totalRetirementCompare").html(totalRetirementSTD2);
                    $("#retirementSipCompare").html(retirementSipSTD2);
                    $("#retirementOneTimeCompare").html(retirementOneTimeSTD2);
                    $("#tenureMonthsCompare").html(ageDiffrenceCompare);
                    $(".yearsCompare").html(currentYear+ageDiffrenceCompare);
                    $(".retirementYearsCompare").html(ageDiffrenceCompare);

                   
                 },
                    error: function (err) {
                     $(".errorMsg").show();
                }
    });
        }
  });
});
$(document).ready(function(){
 var retirementQuantity=0;

    $('#retirementAdd').click(function(e){
          e.preventDefault();
      var retirementQuantity = parseInt($(this).parents('.retirementAdd_sub').find('input').val());
        if(retirementQuantity<=14){
            $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity + 1 +'%');
        }
        else{
              $(this).parents('.retirementAdd_sub').find('input').val(18 +'%');
            if(retirementQuantity == 18){
              $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity + 2 +'%');
            }
            else if(retirementQuantity >18){
                $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity + 5 +'%');
                if(retirementQuantity==40){
                    $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity + 0 +'%');
                }
            }

        }
     });

      $('#retirementSub').click(function(e){
         e.preventDefault();
         var retirementQuantity = parseInt($(this).parents('.retirementAdd_sub').find('input').val());
             if(retirementQuantity<=40){
                $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity - 5 +'%') ;
                 if(retirementQuantity<= 20){
                     $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity - 2 +'%') ;
                     if(retirementQuantity <= 18){
                       $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity - 3 +'%') ;
                         if(retirementQuantity<=15){
                           $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity - 1 +'%') ;
                             if(retirementQuantity==4){
                                 $(this).parents('.retirementAdd_sub').find('input').val(retirementQuantity - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

var retirementCompareQuantity = 0;
    $('#retirementCompareAdd').click(function(e){
          e.preventDefault();
      var retirementCompareQuantity = parseInt($(this).parents('.retirementCompareAdd_sub').find('input').val());
        if(retirementCompareQuantity<=14){
            $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity + 1 +'%');
        }
        else{
              $(this).parents('.retirementCompareAdd_sub').find('input').val(18 +'%');
            if(retirementCompareQuantity == 18){
              $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity + 2 +'%');
            }
            else if(retirementCompareQuantity >18){
                $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity + 5 +'%');
                if(retirementCompareQuantity==40){
                    $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity + 0 +'%');
                }
            }

        }
     });

      $('#retirementCompareSub').click(function(e){
         e.preventDefault();
         var retirementCompareQuantity = parseInt($(this).parents('.retirementCompareAdd_sub').find('input').val());
             if(retirementCompareQuantity<=40){
                $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity - 5 +'%') ;
                 if(retirementCompareQuantity<= 20){
                     $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity - 2 +'%') ;
                     if(retirementCompareQuantity <= 18){
                       $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity - 3 +'%') ;
                         if(retirementCompareQuantity<=15){
                           $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity - 1 +'%') ;
                             if(retirementCompareQuantity==4){
                                 $(this).parents('.retirementCompareAdd_sub').find('input').val(retirementCompareQuantity - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

 });
