$(function(){

    //$('#faq_accordion .accord:first-child').find('h6 a').attr('aria-expanded','true');
    $('.tabs-left a[data-toggle="tab"]').click(function(){
       $('.tabs-left a[data-toggle="tab"]').removeClass('active show');
    });




});

 /*$('.accord>h6>a').click(function(){
		$('.accord>h6 a').attr('aria-expanded','false');
		if ( $(this).attr('aria-expanded') == 'true' ) {
    		$(this).attr('aria-expanded','false');
        } else if ($(this).attr('aria-expanded') == 'false' ){
            $(this).attr('aria-expanded','true');
        }
    });*/

$(document).ready(function () {

    var questions = [],
        trimed,
        finaltrim,
        finalItem,
        indexofItem,
        ques,
        ques2,
        questions2 = [],
        arr = [],
        arrMob = [],
        validStatement = $(".faq_banner");
    setTimeout(function () { //$("#searchInput").focus();
    }, 800);
    $(".subHeading").each(function () {
        var headingAttrtext = $(this).attr("data-headingText").trim();
        var headingtext = $(this).text().trim();
        $(".tabsearch").each(function () {
            var tabAttrtext = $(this).attr("data-tabText").trim();

            if (headingAttrtext === tabAttrtext) {
                $(this).children().children().find(".accord-header").each(function () {
                    var trimed2 = $(this).text().trim();
                    var finaltrim2 = trimed2.replace(/[^\x20-\x7E]\s\s+/gim, " ") + " - " + headingtext;
                    questions2.push(finaltrim2);

                });

            }
        });
    });


    $(".accord-header").each(function () {
        trimed = $(this).text().trim();
        finaltrim = trimed.replace(/[^\x20-\x7E]\s\s+/gim, " ");
        questions.push(finaltrim);

    });

    if ($(window).width() >= 992) {
        $("#searchInput").autocomplete({
            minLength: 3,
            source: function source(request, response) {
                var results = $.ui.autocomplete.filter(questions2, request.term);
                response(results.slice(0, 6));
            },
            select: function select(event, ui) {
                var origEvent = event;

                while (origEvent.originalEvent !== undefined) {
                    origEvent = origEvent.originalEvent;
                }

                arr = ui.item.value.split(" - ");
                var first = arr.shift().trim();

                if ($.inArray(first, questions) !== -1) {
                    $(".accord-header").parent().parent().parent().removeClass("show active");
                    $(".accord-header").children().children().addClass("collapsed");
                    $(".accord-header").children().children().attr("aria-expanded", "false");
                    $(".accord-header").next().removeClass("collapse show").addClass("collapse");
                    $(".accord-header").each(function (i) {
                        var textItem = $(this).text().trim();
                        finalItem = textItem.replace(/[^\x20-\x7E]\s\s+/gim, " ");

                        if (first === textItem) {
                            $(".discreteTabs").removeClass("active show");
                            $(".tabClass").removeClass("active show");
                            $(".tabClass").attr("aria-selected", false);
                            $(this).parent().parent().parent().addClass("show active");
                            $(this).children().children().attr("aria-expanded", "true");
                            $(this).children().children().removeClass("collapse");
                            $(this).next().addClass("collapse show");
                            ques = $(this).parentsUntil(".tabsearch").parent().attr("data-nestedQuestionHeading");
                            ques2 = $(this).parentsUntil(".tabsearch").parent().attr("data-nestedQuestionHeadingLvl2");
                            $(".nestedSubHeading").each(function () {
                                var subTb = $(this).attr("data-nestedSubHeading");

                                if (ques === subTb) {
                                    $(this).parentsUntil(".discreteTabs").parent().addClass("show active")
                                    var highlightedSec = $(this).parentsUntil(".discreteTabs").parent().attr('id').trim();
                                    $("." + highlightedSec).addClass("show active");
                                    $("." + highlightedSec).attr("aria-selected", true);

                                    $(".nestedSubHeading").removeClass("active show");
                                    $(".nestedSubHeading").parent().removeClass("active");
                                    $(".nestedSubHeading").parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeading").parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(".nestedSubHeadingLvl2").removeClass("active show");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(this).addClass("active show");
                                    $(this).parent().addClass("active");
                                    $(this).parent().parent().parent().parent().removeClass("collapse");
                                    $(this).parent().parent().parent().parent().addClass("collapse show");
                                    $(this).parent().parent().parent().parent().prev().children().attr("aria-expanded", "true");
                                    $(this).parent().parent().parent().parent().prev().parent().parent().parent().parent().removeClass("collapse");
                                    $(this).parent().parent().parent().parent().prev().parent().parent().parent().parent().addClass("collapse show");
                                    $(this).parent().parent().parent().parent().prev().parent().parent().parent().parent().prev().children().attr("aria-expanded", "true");
                                }
                            });
                            $(".nestedSubHeadingLvl2").each(function () {
                                var subTb = $(this).attr("data-nestedSubHeadinglvl2");

                                if (ques2 === subTb) {
                                    $(this).parentsUntil(".discreteTabs").parent().addClass("show active")
                                    var highlightedSec = $(this).parentsUntil(".discreteTabs").parent().attr('id').trim();
                                    $("." + highlightedSec).addClass("show active");
                                    $("." + highlightedSec).attr("aria-selected", true);

                                    $(".nestedSubHeading").removeClass("active show");
                                    $(".nestedSubHeading").parent().removeClass("active");
                                    $(".nestedSubHeading").parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeading").parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeading").parent().parent().parent().parent().prev().parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(".nestedSubHeadingLvl2").removeClass("active show");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().removeClass("collapse show");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().addClass("collapse");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().prev().children().attr("aria-expanded", "false");
                                    $(".nestedSubHeadingLvl2").parent().parent().parent().parent().parent().parent().prev().children().addClass("collapsed");
                                    $(this).addClass("active show");
                                    $(this).parent().parent().parent().parent().parent().parent().removeClass("collapse");
                                    $(this).parent().parent().parent().parent().parent().parent().addClass("collapse show");
                                    $(this).parent().parent().parent().parent().parent().parent().prev().children().attr("aria-expanded", "true");
                                    $(this).parent().parent().parent().parent().parent().parent().prev().children().removeClass("collapsed");
                                }
                            });
                            $("html, body").animate({
                                scrollTop: $(this).offset().top - 400
                            }, 1000);
                            return false;
                        } else if (first == "null") {
                            console.log("not found null");
                        } else {}
                    });
                } else {
                    alert(validStatement);
                }
            }
        });
    } else {
        $("#searchInput").autocomplete({
            minLength: 3,
            source: function source(request, response) {
                var results = $.ui.autocomplete.filter(questions2, request.term);
                response(results.slice(0, 6));
            },
            select: function select(event, ui) {
                var origEvent = event;

                while (origEvent.originalEvent !== undefined) {
                    origEvent = origEvent.originalEvent;
                }

                arrMob = ui.item.value.split(" - ");
                var first = arrMob.shift().trim();

                if ($.inArray(first, questions) !== -1) {
                    $(".discreteTabs").removeClass("active show");
                    $(".tabClass").removeClass("active show");
                    $(".tabClass").attr("aria-selected", false);



                    if ($(".m-tabheading").hasClass("collapsed") == false) {
                        $(".m-tabheading").addClass("collapsed")
                    }
                    $(".m-tabheading").attr("aria-expanded", "false");
                    $(".mlvl2parent").removeClass("show");
                    if ($(".m-subheading").hasClass("collapsed") == false) {
                        $(".m-subheading").addClass("collapsed");
                    }
                    $(".m-subheading").attr("aria-expanded", "false");
                    $(".m-subheading").parent().next().removeClass("show");

                    if ($(".m-subheadingchild").hasClass("collapsed") == false) {
                        $(".m-subheadingchild").addClass("collapsed")
                    }
                    $(".m-subheadingchild").attr("aria-expanded", "false");
                    $(".m-subheadingchild").parent().next().removeClass("show");
                    if ($(".level3mobQues").hasClass("collapsed") == false) {
                        $(".level3mobQues").addClass("collapsed")
                    }
                    $(".level3mobQues").attr("aria-expanded", "false");
                    $(".level3mobQues").parent().parent().next().removeClass("show");


                    if ($(".lvl2mobMainTab").hasClass("collapsed") == false) {
                        $(".lvl2mobMainTab").addClass("collapsed")
                    }
                    $(".lvl2mobMainTab").attr("aria-expanded", "false");
                    $(".level3mobQues").parent().next().removeClass("show");

                    //  indexofItem = $.inArray(ui.item.value, questions2);

                    $(".questionsList").each(function (i) {
                        var textItem = $(this).text().trim();
                        finalItem = textItem.replace(/[^\x20-\x7E]\s\s+/gim, " ");
                        if (first === textItem) {
                            $(this).parentsUntil(".discreteTabs").parent().addClass("show active")
                            var highlightedSec = $(this).parentsUntil(".discreteTabs").parent().attr('id').trim();
                            $("." + highlightedSec).addClass("show active");
                            $("." + highlightedSec).attr("aria-selected", true);
                            if ($(".level3mobQues").hasClass("collapsed") == false) {
                                $(".level3mobQues").addClass("collapsed");
                            }
                            $(".level3mobQues").attr("aria-expanded", "false");
                            $(".level3mobQues").parent().parent().next().removeClass("show");

                            $(this).children().children().removeClass("collapsed");
                            $(this).children().children().attr("aria-expanded", "true");
                            if ($(this).next().hasClass("show") == false) {
                                $(this).next().addClass("show");
                            }

                            $(this).parentsUntil(".m-subheadingchildAccord").parent().prev().children().removeClass("collapsed");
                            $(this).parentsUntil(".m-subheadingchildAccord").parent().prev().children().attr("aria-expanded", "true");
                            if ($(this).parentsUntil(".m-subheadingchildAccord").parent().hasClass("show") == false) {
                                $(this).parentsUntil(".m-subheadingchildAccord").parent().addClass("show");
                            }

                            $(this).parentsUntil(".mlvl3parent").parent().addClass("show");
                            $(this).parentsUntil(".mlvl3parent").parent().prev().children().removeClass("collapsed");
                            $(this).parentsUntil(".mlvl3parent").parent().prev().children().attr("aria-expanded", "true");

                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().children().removeClass("collapsed");
                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().children().attr("aria-expanded", "true");
                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().next().addClass("show");

                            $("html, body").animate({
                                scrollTop: $(this).offset().top - 400
                            }, 1000);
                            return false;
                        } else if (first == "null") {
                            console.log("not found null");
                        }
                    });

                    $(".questionsListLvl2").each(function (i) {
                        var textItem = $(this).text().trim();
                        finalItem = textItem.replace(/[^\x20-\x7E]\s\s+/gim, " ");
                        if (first === textItem) {
                            $(this).parentsUntil(".discreteTabs").parent().addClass("show active")
                            var highlightedSec = $(this).parentsUntil(".discreteTabs").parent().attr('id').trim();
                            $("." + highlightedSec).addClass("show active");
                            $("." + highlightedSec).attr("aria-selected", true);
                            if ($(".level2mobQues").hasClass("collapsed") == false) {
                                $(".level2mobQues").addClass("collapsed");
                            }
                            $(".level2mobQues").attr("aria-expanded", "false");
                            $(".level2mobQues").parent().parent().next().removeClass("show");
                            if ($(".lvl2mobMainTab").hasClass("collapsed") == false) {
                                $(".lvl2mobMainTab").addClass("collapsed");
                            }
                            $(".lvl2mobMainTab").attr("aria-expanded", "false");
                            $(".lvl2mobMainTab").prev().next().removeClass("show");

                            if ($(".m-tabheading").hasClass("collapsed") == false) {
                                $(".m-tabheading").addClass("collapsed");
                            }
                            $(".m-tabheading").attr("aria-expanded", "false");
                            $(".m-tabheading").parent().next().removeClass("show");


                            $(this).children().children().removeClass("collapsed");
                            $(this).children().children().attr("aria-expanded", "true");
                            if ($(this).next().hasClass("show") == false) {
                                $(this).next().addClass("show");
                            }

                            $(this).parentsUntil(".lvl2mobMainTabaccord").parent().children().children().removeClass("collapsed");
                            $(this).parentsUntil(".lvl2mobMainTabaccord").parent().children().children().attr("aria-expanded", "true");
                            if ($(this).parentsUntil(".lvl2mobMainTabaccord").parent().parent().next().hasClass("show") == false) {
                                $(this).parentsUntil(".lvl2mobMainTabaccord").parent().parent().next().addClass("show");
                            }

                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().children().addClass("show");
                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().children().attr("aria-expanded", "true");

                            $(this).parentsUntil(".m-tabheadingAccord").parent().children().first().next().addClass("show");


                            $("html, body").animate({
                                scrollTop: $(this).offset().top - 400
                            }, 1000);
                            return false;
                        } else if (first == "null") {
                            console.log("not found null");
                        }
                    });

                } else {
                    alert(validStatement);
                }
            }
        });
    }

    $("#searchInput").keypress(function (e) {
        if (e.which == 13) {
            var selectedItem = $("#searchInput").val();

            if (selectedItem.localeCompare(finalItem) !== 0) {
                alert("No Results Found");
            }
        }
    }); ///////////////////////////////////////////////

    var url = window.location.href;
    var tabmenu = url.split("?value=#"); //if params exsist

    if (!tabmenu[1]) {
        $("[refid]").eq(0).click();
        $("[lvl2refid]").eq(0).click();
        $("[lvl3refid]").eq(0).click();
        $("[mrefid]").eq(0).click();
        $("[lvl2mrefid]").eq(0).click();
        $("[lvl3mrefid]").eq(0).click();
    } //if top level


    if ($(window).width() >= 992) {
        // :: tab swtich ::
        $("[data-activetab='"+$(".".concat(tabmenu[1])).closest('.discreteTabs').attr('id')+"']").trigger('click');
        if ($(".".concat(tabmenu[1])).attr("refid")) {
            $(".".concat(tabmenu[1])).trigger("click");
        } // if level2
        else if ($(".".concat(tabmenu[1])).attr("lvl2refid")) {
            $(".".concat(tabmenu[1])).closest(".lvl2parent").prev().find("a").click();
            $(".".concat(tabmenu[1])).trigger("click");
            setTimeout(function () {
                $(".".concat(tabmenu[1])).focus();
            }, 900);
        } //if alt level2
        else if ($(".".concat(tabmenu[1])).attr("lvl2altrefid")) {
            $(".".concat(tabmenu[1])).find("a").trigger("click");
            $(".".concat(tabmenu[1])).closest(".lvl2parent").prev().find("a").click();
            setTimeout(function () {
                $(".".concat(tabmenu[1])).focus();
            }, 900);
            $(".".concat(tabmenu[1])).focus();
        } //if level3
        else if ($(".".concat(tabmenu[1])).attr("lvl3refid")) {
            $(".".concat(tabmenu[1])).closest(".lvl2parent").prev().find("a").click();
            $(".".concat(tabmenu[1])).closest(".lvl3parent").prev().find("a").click();
            $(".".concat(tabmenu[1])).trigger("click");
            $(".".concat(tabmenu[1])).addClass("active show");
            setTimeout(function () {
                $(".".concat(tabmenu[1])).focus();
            }, 900);
        }
    } else {
        $("[data-activetab='"+$(".m".concat(tabmenu[1])).closest('.discreteTabs').attr('id')+"']").trigger('click');
        if ($(".m".concat(tabmenu[1])).attr("mrefid")) {
            $(".m".concat(tabmenu[1])).trigger("click");
        } // if level2
        else if ($(".m".concat(tabmenu[1])).attr("lvl2mrefid")) {
            $(".m".concat(tabmenu[1])).closest(".mlvl2parent").prev().find("a").click();
            $(".m".concat(tabmenu[1])).trigger("click");
            setTimeout(function () {
                $(".m".concat(tabmenu[1])).focus();
            }, 900);
        } //if alt level2
        else if ($(".m".concat(tabmenu[1])).attr("lvl2altmrefid")) {
            $(".m".concat(tabmenu[1])).trigger("click");
            $(".m".concat(tabmenu[1])).closest(".mlvl2parent").prev().find("a").click();
            $(".m".concat(tabmenu[1])).focus();
            setTimeout(function () {
                $(".m".concat(tabmenu[1])).focus();
            }, 900);
        } //if level3
        else if ($(".m".concat(tabmenu[1])).attr("lvl3mrefid")) {
            $(".m".concat(tabmenu[1])).closest(".mlvl2parent").prev().find("a").click();
            $(".m".concat(tabmenu[1])).closest(".mlvl3parent").prev().find("a").click();
            $(".m".concat(tabmenu[1])).trigger("click");
            $(".m".concat(tabmenu[1])).addClass("active show");
            setTimeout(function () {
                $(".m".concat(tabmenu[1])).focus();
            }, 900);
        }

        // :: tab swtich ::
    } /////////////////////////////////////////////

    if ($(window).width() >= 992) {
        var faqurl = window.location.href;
        var offsetSize = 400;
        if (faqurl.indexOf("?value=#") >= 0) {
            $("html, body").animate({
                scrollTop: $('#faq-tab-content').offset().top - offsetSize
            }, 500);
        } else {

            setTimeout(function () {
                $("#searchInput").focus();
            }, 800);

        }

    } else {
        var $mfaqurl = window.location.hash.slice(1);
        $('html, body').animate({
            scrollTop: $("a[lvl2altmrefid='" + $mfaqurl + "'], a[lvl3mrefid='" + $mfaqurl + "'], a[mrefid='" + $mfaqurl + "']").offset().top - 60

        }, 500);

    }

});

