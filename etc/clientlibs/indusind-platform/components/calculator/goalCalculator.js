$(document).ready(function () {

	var defValue = $(".goalOptionDefault").val();

    $(".goalOptionDefault").hide();

    var selectedData, selectedData2;
    var authoredGoalPrinciple, authoredGoalYear, authoredGoalRate;
    var defaultyr = $("#goalYear").attr("data-default")
    authoredGoalPrinciple = $("#goalPrinciple").val();
    authoredGoalYear = $("#goalYear").val();
    authoredGoalRate = $("#goalRate").val();

        $('.btn-outline-primary').on('click', function(){

	 var parent_id = $(this).parent().parent().parent().parent().parent().attr('id');
    if((parent_id == undefined) || (parent_id==null))
		parent_id = $(this).parent().parent().parent().parent().parent().parent().attr('id');

    if(parent_id =="goalComapreResult"){
        	resetme();

    }
    if(parent_id =="goalResult1"){
        	resetme();

    }

});

       $('a').click(function(e){ 
      if( $(this).attr('href') != "#")
					resetme();
   });


    function resetme()
    {

 	    $("#goalPrinciple").val(authoredGoalPrinciple);
        $("#goalYear").val(authoredGoalYear);
        $("#goalRate").val(authoredGoalRate);

        $("#goalComparePrinciple").val(authoredGoalPrinciple);
        $("#goalCompareYears").val(authoredGoalYear);
    }



    $("#goalYear").each(function (i) {
        var optionsel = $("#goalYear option").val();
        if (defaultyr === optionsel)
        {
         $(this).attr('selected', true)

        }
    });



    $("#goalPrinciple").on("input", function () {
        if ($("#goalPrinciple").val().length <= 10) {
            this.value = this.value.replace(/[^0-9\0]/g, "");
        }
    });

    $("#goalComparePrinciple").on("input", function () {
        if ($("#goalComparePrinciple").val().length <= 10) {
            this.value = this.value.replace(/[^0-9\0]/g, "");
        }
    });

    $("#goalRate,#goalCompareRate").attr('readonly', 'readonly');


    $('.abc').on('change', function () {

        var isChecked = $(this).is(':checked');
        var $switchLabel = $('.slider_sw');
        if (isChecked) {
            selectedData = $switchLabel.attr('data-on');
        } else {
            selectedData = $switchLabel.attr('data-off');
        }
    });

    $('.swpbtn').on('change', function () {
        var isChecked2 = $(this).is(':checked');
        var $switchLabel2 = $('.slider_sw');
        if (isChecked2) {
            selectedData2 = $switchLabel2.attr('data-on');
        } else {
            selectedData2 = $switchLabel2.attr('data-off');
        }
    });

    $("#goalCompare").on('click', function (e) {
        e.preventDefault();
        $("#goalCompareCalDiv").show();
        $("#goalCompareCal").show();
        $("#goalComapreResult").hide();
        $(".link_compare_close").show();
        $(this).hide();

        $("#goalComparePrinciple").val(authoredGoalPrinciple);
        $("#goalCompareYears").val(authoredGoalYear);
        $("button[data-id='goalCompareYears']").children().children().children().html(authoredGoalYear);
        $("#goalCompareRate").val(authoredGoalRate);
    });

    $('.link_compare_close').click(function (e) {
        e.preventDefault();
        $(this).parents('.col-md-6').hide();
        $('.link_compare_close').hide();
        $('#goalCompare').show();
    });

    $('#goalReload').click(function (e) {
        e.preventDefault();
        $('.calc_main .selected_items, .calc_main #goalLoan_calculated,.compare_col_added, .compare_col_added .calc_box:last-child').hide();
        $('.compare_col .link_compare').show();
        $('.calc_main .vehicle-tab-container, .calc_main #goalLoan_inputs').slideDown('slow');

        $("#goalPrinciple").val(authoredGoalPrinciple);
        $("#goalYear").val(authoredGoalYear);
        $("#goalRate").val(authoredGoalRate);

        $("#goalComparePrinciple").val(authoredGoalPrinciple);
        $("#goalCompareYears").val(authoredGoalYear);
        $("button[data-id='goalYear']").children().children().children().html(authoredGoalYear);
		//$("#goalYear").val(authoredGoalRate);




    });

    $('#goalCalculate').click(function (e) {

        e.preventDefault();
        var goalPrinciple = $("#goalPrinciple").val();
        var goalcheck = goalPrinciple[0];
        var goalYear = $("#goalYear").val();
        var rate = $("#goalRate").val();
        var goalSplitRate = rate.split("%");
        var goalRate = goalSplitRate[0];

        if (goalPrinciple == "") {
            $(".goalPrincipleError").show();
            $(".goalRateError").hide();
            $(".selected_items").hide();
        }
        else if (goalcheck == 0) {
            $(".goalPrincipleError").show();
            $(".goalRateError").hide();
        }
        else if (goalRate == "") {
            $(".goalRateError").show();
            $(".goalPrincipleError").hide();
        }
        else {
            callthecalculator(goalPrinciple, goalYear, goalRate, selectedData);
            $(".goalPrincipleError").hide();
            $(".goalRateError").hide();
            $(".errorMsg").hide();
            $("#goalCompare").show();
        }
    });

    $('#goalCompareCalculate').click(function (e) {
        e.preventDefault();

        var goalComparePrinciple = $("#goalComparePrinciple").val();
        var goalcheck2 = goalComparePrinciple[0];
        var goalCompareYear = $("#goalCompareYears").val();
        var rateCompare = $("#goalCompareRate").val();
        var goalSplitRateCompare = rateCompare.split("%");
        var goalRateCompare = goalSplitRateCompare[0];

        if (goalComparePrinciple == "") {
            $(".goalComparePrincipleError").show();
            $(".goalCompareRateError").hide();
            $("#goalCompareCal").show();
            $("#goalComapreResult").hide();
        }
        else if (goalcheck2 == 0) {
            $(".goalComparePrincipleError").show();
            $(".goalCompareRateError").hide();
            $("#goalCompareCal").show();
            $("#goalComapreResult").hide();
        }
        else if (goalRateCompare == "") {
            $(".goalCompareRateError").show();
            $(".goalComparePrincipleError").hide();
        }
        else {
            calltheCompareCalculator(goalComparePrinciple, goalCompareYear, goalRateCompare, selectedData2);
            $(".goalComparePrincipleError").hide();
            $(".goalCompareRateError").hide();
            $(".errorMsg").hide();
        }
    });
});

//Goal Calculator AJAX wrapped inside a Function
function callthecalculator(goalPrinciple, goalYear, goalRate, selectedData) {

    var tdate = new Date();
    var realYear = tdate.getFullYear();
    var finalYear = parseInt(realYear) + parseInt(goalYear);

    var dta = {
        costofgoals: goalPrinciple,
        rate: goalRate,
        years: goalYear,
        callType: "tab1"
    }

    var data = JSON.stringify(dta);

    $.ajax({
        url: "/bin/GoalCalculator",
        type: "POST",
        data: { data: data, callType: "tab1" },
        success: function (res) {

            if (selectedData == "SIP") {

                $("#sipResult").show();
                $("#oneTimeResult").hide();
            }
            else {

                $("#oneTimeResult").show();
                $("#sipResult").hide();
            }

            $("#goalLoan_calculated").show();
            $("#goalLoan_inputs").hide();
            $("#goalResult1").show();
            $("#goalCompareCalDiv").hide();
            $(".selected_items").show();



            var parsedRes = JSON.parse(res);
            var systematicInt = parsedRes.systematicAsString;
            var systematic = parseInt(systematicInt);
            var oneTimeInt = parsedRes.oneTimeAsString;
            var oneTime = parseInt(oneTimeInt);
            $("#realyears").html(finalYear);
            $(".yearsG").html(goalYear);
            $("#sipResult1").html(systematic.toLocaleString('en-IN'));
            $("#oneTimeResult1").html(oneTime.toLocaleString('en-IN'));

        },
        error: function (err) {

        }
    });

}


function calltheCompareCalculator(goalComparePrinciple, goalCompareYear, goalRateCompare, selectedData2) {

    var tdate = new Date();
    var realYear = tdate.getFullYear();
    var finalYearCompare = parseInt(realYear) + parseInt(goalCompareYear);

    var dtaCompare = {
        costofgoals: goalComparePrinciple,
        rate: goalRateCompare,
        years: goalCompareYear,
        callType: "tab1"
    }

    var dataCompare = JSON.stringify(dtaCompare);

    $.ajax({
        url: "/bin/GoalCalculator",
        type: "POST",
        data: { data: dataCompare, callType: "tab1" },
        success: function (res) {

            if (selectedData2 == "SIP") {

                $("#compareResultSIP").show();
                $("#compareResultOneTime").hide();

            }
            else {
                $("#compareResultOneTime").show();
                $("#compareResultSIP").hide();
            }

            $("#goalCompareCal").hide();
            $("#goalComapreResult").show();

            var parsedResCompare = JSON.parse(res);
            var systematicCompareInt = parsedResCompare.systematicAsString;
            var systematicCompare = parseInt(systematicCompareInt);
            var oneTimeCompareInt = parsedResCompare.oneTimeAsString;
            var oneTimeCompare = parseInt(oneTimeCompareInt);
            $("#realyearsCompare").html(finalYearCompare);
            $(".tenureG").html(goalCompareYear);
            $("#sipCompareGoal").html(systematicCompare);
            $("#oneTimeCompare").html(oneTimeCompare.toLocaleString('en-IN'));

        },
        error: function (err) {
            $(".errorMsg").show();
        }
    });





}
$(document).ready(function(){
 var goalQuantitiy=0;

    $('#goalAdd').click(function(e){
          e.preventDefault();
      var goalQuantitiy = parseInt($(this).parents('.goalAdd_sub').find('input').val());
        if(goalQuantitiy<=14){
            $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy + 1 +'%');
        }
        else{
              $(this).parents('.goalAdd_sub').find('input').val(18 +'%');
            if(goalQuantitiy == 18){
              $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy + 2 +'%');
            }
            else if(goalQuantitiy >18){
                $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy + 5 +'%');
                if(goalQuantitiy==40){
                    $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy + 0 +'%');
                }
            }

        }
     });

      $('#goalSub').click(function(e){
         e.preventDefault();
         var goalQuantitiy = parseInt($(this).parents('.goalAdd_sub').find('input').val());
             if(goalQuantitiy<=40){
                $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy - 5 +'%') ;
                 if(goalQuantitiy<= 20){
                     $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy - 2 +'%') ;
                     if(goalQuantitiy <= 18){
                       $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy - 3 +'%') ;
                         if(goalQuantitiy<=15){
                           $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy - 1 +'%') ;
                             if(goalQuantitiy==4){
                                 $(this).parents('.goalAdd_sub').find('input').val(goalQuantitiy - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

var goalCompareQuantitiy = 0;
    $('#goalCompareAdd').click(function(e){
          e.preventDefault();
      var goalCompareQuantitiy = parseInt($(this).parents('.goalCompareAdd_sub').find('input').val());
        if(goalCompareQuantitiy<=14){
            $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy + 1 +'%');
        }
        else{
              $(this).parents('.goalCompareAdd_sub').find('input').val(18 +'%');
            if(goalCompareQuantitiy == 18){
              $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy + 2 +'%');
            }
            else if(goalCompareQuantitiy >18){
                $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy + 5 +'%');
                if(goalCompareQuantitiy==40){
                    $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy + 0 +'%');
                }
            }
        }
     });

      $('#goalCompareSub').click(function(e){
         e.preventDefault();
         var goalCompareQuantitiy = parseInt($(this).parents('.goalCompareAdd_sub').find('input').val());
             if(goalCompareQuantitiy<=40){
                $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy - 5 +'%') ;
                 if(goalCompareQuantitiy<= 20){
                     $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy - 2 +'%') ;
                     if(goalCompareQuantitiy <= 18){
                       $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy - 3 +'%') ;
                         if(goalCompareQuantitiy<=15){
                           $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy - 1 +'%') ;
                             if(goalCompareQuantitiy==4){
                                 $(this).parents('.goalCompareAdd_sub').find('input').val(goalCompareQuantitiy - 0 +'%') ;
                             }
                         }
                     }
                 }
             }
          else{

          }
     });

 });
