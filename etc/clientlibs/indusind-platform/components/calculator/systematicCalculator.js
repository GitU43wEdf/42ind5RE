$(document).ready(function () {

    var systematicAuthoredPrinciple,systematicAuthoredYear,systematicAuthoredLumpsum,systematicAuthoredRate;

    systematicAuthoredPrinciple = $("#systematicPrinciple").val();
    systematicAuthoredYear = $("#systematicYears").val();
    systematicAuthoredLumpsum = $("#lumpsum").val();
    systematicAuthoredRate = $("#systematicRate").val();

    $(".optionDefault").remove();

    $("#systematicPrinciple").on("input", function () {
      if ($("#systematicPrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
  });

     $("#systematicComparePrinciple").on("input", function () {
      if ($("#systematicComparePrinciple").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
  });
     $("#lumpsum").on("input", function () {
      if ($("#lumpsum").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
  }); 

       $("#systematicCompareUpfront").on("input", function () {
      if ($("#systematicCompareUpfront").val().length <= 10) {
          this.value = this.value.replace(/[^0-9\0]/g, "");
      }
  });


        $('.btn-outline-primary').on('click', function(){

	 var parent_id = $(this).parent().parent().parent().parent().parent().attr('id');
    if((parent_id == undefined) || (parent_id==null))
		parent_id = $(this).parent().parent().parent().parent().parent().parent().attr('id');

    if(parent_id =="systematicCompareResult"){
        	resetme();

    }
    if(parent_id =="systematicResult"){
        	resetme();

    }

	});

       $('a').click(function(e){ 
      if( $(this).attr('href') != "#")
					resetme();
   });


    function resetme()
    {

 	   		$("#systematicPrinciple").val(systematicAuthoredPrinciple);
            $("#systematicYears").val(systematicAuthoredYear);
            $("#lumpsum").val(systematicAuthoredLumpsum);
            $("#systematicRate").val(systematicAuthoredRate);

            $("#systematicComparePrinciple").val(systematicAuthoredPrinciple);
            $("#systematicCompareYears").val(systematicAuthoredYear);
            $("#systematicCompareUpfront").val(systematicAuthoredLumpsum);
            $("button[data-id='systematicYears']").children().children().children().html(systematicAuthoredYear);
			$("#systematicCompareRate").val(systematicAuthoredRate);
    }

    $("#systematicRate,#systematicCompareRate").attr('readonly','readonly');

    $("#systematicCalculate").on("click", function (e) {
        e.preventDefault();
        var principle = $("#systematicPrinciple").val();
        var systematicCheck = principle[0];
        var years = $("#systematicYears").val();
        var lumpsum = $("#lumpsum").val();
        var lumpsumCheck = lumpsum[0];
        var rate = $("#systematicRate").val();
        var splitRate= rate.split("%");
        var rateFinal = splitRate[0];

        var currentYear = (new Date).getFullYear();
        var finalYear = parseInt(years) + parseInt(currentYear);
    
        var dataResult = {
            principle: principle,
            principleyears: years,
            lumpsum: lumpsum,
            principlerate: rateFinal
        };
    
        var data = JSON.stringify(dataResult);

        if(principle == ""){
          $(".systematicPrincipleErrorMsg").show();
          $(".systematicRateErrorMsg").hide();
          $(".systematicLumpsumErrorMsg").hide();
          $(".selected_items").hide();
        }
        else if(systematicCheck==0){
           $(".systematicPrincipleErrorMsg").show();
           $(".systematicRateErrorMsg").hide();
           $(".systematicLumpsumErrorMsg").hide();
        }
        else if(rate==""){
           $(".systematicRateErrorMsg").show();
           $(".systematicPrincipleErrorMsg").hide();
           $(".systematicLumpsumErrorMsg").hide();
        }
         else if(lumpsum==""){
           $(".systematicLumpsumErrorMsg").show();
           $(".systematicPrincipleErrorMsg").hide();
           $(".systematicRateErrorMsg").hide();
           $(".selected_items").hide();
        }
    /*    else if(lumpsumCheck==0){
           $(".systematicLumpsumErrorMsg").show();
           $(".systematicPrincipleErrorMsg").hide();
           $(".systematicRateErrorMsg").hide();
           $(".selected_items").hide();
        }*/
        else{
           $("#systematicCompare").show();
           $("#systematicCompareDiv").hide();
           $(".systematicRateErrorMsg").hide();
           $(".systematicPrincipleErrorMsg").hide();
           $(".errorMsg").hide();
           $(".systematicLumpsumErrorMsg").hide();

             $.ajax({
            url: "/bin/systematicCalculator",
            type: "POST",
            data: { data: data, reqType: "systematic" },
            success: function (res) {
    
                $("#systematicLoanInputs").hide();
                $("#systematicLoan_calculated").show();
                $(".selected_items").show();
    
    
                var parsedRes = JSON.parse(res);
                var totalInvst = parsedRes.totalInvst;
    
                var finalInvest = totalInvst + parseInt(lumpsum);
                var finalInvestINT = parseFloat(finalInvest);
                var finalInvestSTD = (finalInvestINT.toLocaleString('en-IN'));
    
                var sipAsString = parsedRes.sipAsString;
                var sipAsStringINT = parseFloat(sipAsString);
                var sipAsStringSTD = (sipAsStringINT.toLocaleString('en-IN'));
    
                $("#totalInvest").html(finalInvestSTD);
                $("#sip").html(sipAsStringSTD);
                $("#finalYear").html(finalYear);
                
            },
            error: function (err) {
                $(".errorMsg").show();
            }
        });
        }
    });
          $("#systematicCompare").on("click", function(e){
            e.preventDefault();
            $(this).hide();
            $(".link_compare_close").show();
            $("#systematicCompareDiv").show();
            $("#systematicCompareCalculator").show();
            $("#systematicCompareResult").hide();
            $(".systematicComparePrincipleError").hide();
            $(".systematicCompareLumpsumErrorMsg").hide();

            $("#systematicComparePrinciple").val(systematicAuthoredPrinciple);
            $("#systematicCompareYears").val(systematicAuthoredYear);
            $("#systematicCompareUpfront").val(systematicAuthoredLumpsum);
            $("#systematicCompareRate").val(systematicAuthoredRate);
            $("button[data-id='systematicCompareYears']").children().children().children().html(systematicAuthoredYear);


        });
    
         $('.link_compare_close').click(function(e) {
            e.preventDefault();
            $(this).parents('.col-md-6').hide();
            $('.link_compare_close').hide();
            $('#systematicCompare').show();
        });
    
        $('#systematicReload').click(function(e) {
            e.preventDefault();
            $('.calc_main .selected_items, .calc_main #systematicLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
            $('.compare_col .link_compare').show();
            $('.calc_main .vehicle-tab-container, .calc_main #systematicLoanInputs').slideDown('slow');

            $("#systematicPrinciple").val(systematicAuthoredPrinciple);
            $("#systematicYears").val(systematicAuthoredYear);
            $("#lumpsum").val(systematicAuthoredLumpsum);
            $("#systematicRate").val(systematicAuthoredRate);

            $("#systematicComparePrinciple").val(systematicAuthoredPrinciple);
            $("#systematicCompareYears").val(systematicAuthoredYear);
            $("#systematicCompareUpfront").val(systematicAuthoredLumpsum);
            $("button[data-id='systematicYears']").children().children().children().html(systematicAuthoredYear);
			$("#systematicCompareRate").val(systematicAuthoredRate);
        });
    
        $("#systematicCompareCalculate").on("click", function (e) {
        e.preventDefault();
        var principle2 = $("#systematicComparePrinciple").val();
        var systematicCheck2 = principle2[0];
        var years2 = $("#systematicCompareYears").val();
        var lumpsum2 = $("#systematicCompareUpfront").val();
        var lumpsum2Check = lumpsum2[0];
        var rate2 = $("#systematicCompareRate").val();
        var splitRate2= rate2.split("%");
        var rateFinal2 = splitRate2[0];
    
        var currentYear = (new Date).getFullYear();
        var finalYear2 = parseInt(years2) + parseInt(currentYear);
    
        var dataResult2 = {
            principle: principle2,
            principleyears: years2,
            lumpsum: lumpsum2,
            principlerate: rateFinal2
        };
    
        var data2 = JSON.stringify(dataResult2);

        if(principle2 == ""){
            $(".systematicComparePrincipleError").show();
            $(".systematicCompareRateError").hide();
            $(".systematicCompareLumpsumErrorMsg").hide();
            $("#systematicCompareCalculator").show();
            $("#systematicCompareResult").hide();
        }
        else if(systematicCheck2==0){
            $(".systematicComparePrincipleError").show();
            $(".systematicCompareRateError").hide();
            $(".systematicCompareLumpsumErrorMsg").hide();
            $("#systematicCompareCalculator").show();
            $("#systematicCompareResult").hide();
        }
        else if(rate2==""){
            $(".systematicCompareRateError").show();
            $(".systematicComparePrincipleError").hide();
            $(".systematicCompareLumpsumErrorMsg").hide();
        }
        else if(lumpsum2==""){
            $(".systematicCompareLumpsumErrorMsg").show();
            $(".systematicComparePrincipleError").hide();
            $(".systematicCompareRateError").hide();
            $("#systematicCompareCalculator").show();
            $("#systematicCompareResult").hide();
        }
       /* else if(lumpsum2Check==0){
            $(".systematicCompareLumpsumErrorMsg").show();
            $(".systematicComparePrincipleError").hide();
            $(".systematicCompareRateError").hide();
            $("#systematicCompareCalculator").show();
            $("#systematicCompareResult").hide();
        }*/
        else{
            $(".systematicCompareRateError").hide();
            $(".systematicComparePrincipleError").hide();
            $(".errorMsg").hide();
            $(".systematicCompareLumpsumErrorMsg").hide();


        $.ajax({
            url: "/bin/systematicCalculator",
            type: "POST",
            data: { data: data2, reqType: "systematic" },
            success: function (res) {
    
                $("#systematicCompareCalculator").hide();
                $("#systematicCompareResult").show();
    
                var parsedRes2 = JSON.parse(res);
                var totalInvst2 = parsedRes2.totalInvst;
    
                var finalInvest2 = totalInvst2 + parseInt(lumpsum2);
                var finalInvestINT2 = parseFloat(finalInvest2);
                var finalInvestSTD2 = (finalInvestINT2.toLocaleString('en-IN'));

                var sipAsString2 = parsedRes2.sipAsString;
                var sipAsStringINT2 = parseFloat(sipAsString2);
                var sipAsStringSTD2 = (sipAsStringINT2.toLocaleString('en-IN'));

                $("#totalInvestCompare").html(finalInvestSTD2);
                $("#sipCompare").html(sipAsStringSTD2);
                $("#finalYearCompare").html(finalYear2);

            },
            error: function (err) {
                $(".errorMsg").show();
            }
        });
        }
    });
    });
$(document).ready(function(){
 var systematicQuantity=0;

    $('#systematicAdd').click(function(e){
          e.preventDefault();
      var systematicQuantity = parseInt($(this).parents('.systematicAdd_sub').find('input').val());
        if(systematicQuantity<=14){
            $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity + 1 +'%');
        }
        else{
              $(this).parents('.systematicAdd_sub').find('input').val(18 +'%');
            if(systematicQuantity == 18){
              $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity + 2 +'%');
            }
            else if(systematicQuantity >18){
                $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity + 5 +'%');
                if(systematicQuantity==40){
                    $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity + 0 +'%');
                }
            }

        }
     });

      $('#systematicSub').click(function(e){
         e.preventDefault();
         var systematicQuantity = parseInt($(this).parents('.systematicAdd_sub').find('input').val());
             if(systematicQuantity<=40){
                $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity - 5 +'%') ;
                 if(systematicQuantity<= 20){
                     $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity - 2 +'%') ;
                     if(systematicQuantity <= 18){
                       $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity - 3 +'%') ;
                         if(systematicQuantity<=15){
                           $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity - 1 +'%') ;
                             if(systematicQuantity==4){
                                 $(this).parents('.systematicAdd_sub').find('input').val(systematicQuantity - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

var systematicCompareQuantity = 0;
    $('#systematicCompareAdd').click(function(e){
          e.preventDefault();
      var systematicCompareQuantity = parseInt($(this).parents('.systematicCompareAdd_sub').find('input').val());
        if(systematicCompareQuantity<=14){
            $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity + 1 +'%');
        }
        else{
              $(this).parents('.systematicCompareAdd_sub').find('input').val(18 +'%');
            if(systematicCompareQuantity == 18){
              $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity + 2 +'%');
            }
            else if(systematicCompareQuantity >18){
                $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity + 5 +'%');
                if(systematicCompareQuantity==40){
                    $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity + 0 +'%');
                }
            }

        }
     });

      $('#systematicCompareSub').click(function(e){
         e.preventDefault();
         var systematicCompareQuantity = parseInt($(this).parents('.systematicCompareAdd_sub').find('input').val());
             if(systematicCompareQuantity<=40){
                $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity - 5 +'%') ;
                 if(systematicCompareQuantity<= 20){
                     $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity - 2 +'%') ;
                     if(systematicCompareQuantity <= 18){
                       $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity - 3 +'%') ;
                         if(systematicCompareQuantity<=15){
                           $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity - 1 +'%') ;
                             if(systematicCompareQuantity==4){
                                 $(this).parents('.systematicCompareAdd_sub').find('input').val(systematicCompareQuantity - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

 });
