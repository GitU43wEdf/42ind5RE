$(document).ready(function(){
$('.ui-carousel-pane').addClass('no_transform');
    $('.new_old_radios .custom-control:first-child').addClass('active');

   if ($('#customRadio').hasClass('active')){

        	$('.hidden_section').addClass('active');
        	$('.assist-journey-btns-box').find('.row').addClass('justify-content-center');

    }

//$('.custom_select').extendSelect();
// $('input[type=radio]').click(function(){
//     if($(this).is(':checked')) { 
//         $(this).parent().parent().find('.custom-radio').removeClass('active');
//         $(this).parent().addClass('active');
//         $('.radiobox .dropdown').removeClass('active');
//         $('.new_old_radios').slideDown();
//         $('.radiobox select option').attr('selected',false); 
//         $('.radiobox select option:eq(0)').attr('selected','selected'); 
//         //$('.dropdown-menu .dropdown-item').removeClass('active');
//        //$('.dropdown-menu .dropdown-item[data-index="0"]').addClass('active');
//        //$('.dropdown .btn').text($('.radiobox select option:eq(0)').val());
//        $('.hidden_section').addClass('active');
//     }
//     else{
//         $('.radiobox').removeClass('active');
//     }
// });

$('#customRadio_4w_2').click(function() {
    console.log('clicked on radio 2');
    var cardBenefitSlider = new Swiper('.card-privileges-slider', {
    slidesPerView: 4,
    spaceBetween: 60,
    loop: false,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1200,
    grabCursor: true,
    // init: false,
    pagination: {
        el: '.swiper-pagination-info',
        clickable: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 2,                
            spaceBetween: 20,
        }
    }
});

    //cardBenefitSlider.destroy();

    //cardBenefitSlider.reInit();


});

$('.custom-control.custom-radio input[type=radio]').click(function(){
    if($(this).is(':checked')) { 
        $(this).parent().parent().find('.custom-radio').removeClass('active');
        $(this).parent().addClass('active');
        $('.radiobox .dropdown').removeClass('active');
        $('.new_old_radios').slideDown();
        $('.radiobox select option').attr('selected',false); 
        $('.radiobox select option:eq(0)').attr('selected','selected'); 
        //$('.dropdown-menu .dropdown-item').removeClass('active');
       //$('.dropdown-menu .dropdown-item[data-index="0"]').addClass('active');
       //$('.dropdown .btn').text($('.radiobox select option:eq(0)').val());
       $('.hidden_section').addClass('active');
    }


});

//$('.back-journey').hide();
$('.assist-journey-btns-box .custom-radios input[type=radio]').click(function(){
    if($(this).is(':checked')) { 
		window.open($(this).attr("data"),"_self");
       /* $('.back-journey').show();
        $(this).parents('.assist-journey-btns-box').find('.row > div').siblings().removeClass('active');
        $(this).parent().parent().siblings().css('display', 'none');
        $(this).parent().parent().addClass('active');
        $(this).parents('.assist-journey-btns-box').find('.row').addClass('justify-content-center');
        $('.radiobox .dropdown').removeClass('active');
        $('.new_old_radios').slideDown();
        $('.radiobox select option').attr('selected',false); 
        $('.radiobox select option:eq(0)').attr('selected','selected'); 
        //$('.dropdown-menu .dropdown-item').removeClass('active');
       //$('.dropdown-menu .dropdown-item[data-index="0"]').addClass('active');
       //$('.dropdown .btn').text($('.radiobox select option:eq(0)').val());
       $('.hidden_section').addClass('active');*/
    }
    else{
        $('.radiobox').removeClass('active');
    }
});


$('.radiobox select').change(function(){

    window.open($(this).val(),"_self");

   /* $('.hidden_section').addClass('active');
    $('.back-journey').show();
    $(this).parent().parent().parent().addClass('active');
    $(this).parents('.assist-journey-btns-box').find('.row').addClass('justify-content-center');
    $(this).parents('.assist-journey-btns-box').find('.row > div').siblings().removeClass('active');
    $(this).parent().parent().parent().siblings().css('display', 'none');
    $('input:radio[name=vehicle]').each(function () { 
        $(this).prop('checked', false); 
    });
    $('.new_old_radios').slideUp();
    $('.radiobox .dropdown').addClass('active');
    $('.radiobox .custom_select_wrap').addClass('active');*/
});
$('.btn_reload_calc, .back-journey a').click(function(){
    window.location.reload();
})

//$('.detail_calc_height').mCustomScrollbar();

})
$(document).ready(function(){

    

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function ($) {
    var elementContainer = 'select-extended-element';
    var pureElement = 'select-extend';
    var selectSearch = 'select-search';
    var lastElement = 'select-last-element';
    var options = {
        search: 'Search',
        notSelectedTitle: 'Nothing to shown',
        empty: 'Nothing to shown',
        activeClass: 'active',
        disabledClass: 'disabled',
        maxOptionMessage: 'Limit reached (%items items max)',
        maxOptionMessageDelay: 2000,
        popoverResize: false,
        dropdownResize: false
    };

    function rendPopperPosition(element) {
        if (element.attr('x-placement') !== 'top-start') return;

        var elementPosition = element.outerHeight(true);
        element.css('transform', 'translate3d(0px, -' + elementPosition + 'px, 0px)');
    }

    function rendDropdown(menu, items, select) {
        $(menu).find('.dropdown-header, .dropdown-item').remove();

        var appendItem = function appendItem(element) {
            var label = element.innerText;
            var item = $('<a href="#" class="dropdown-item" />').text(label);

            item.attr('data-index', $(element).data('index'));

            if ($(element).is('option:selected')) {
                item.addClass(options.activeClass);
            }

            if ($(element).is('option:disabled')) {
                item.addClass(options.disabledClass);
            }

            menu.append(item);
        };

        var appendHeader = function appendHeader(element) {
            var label = $(element).attr('label');
            var item = $('<span class="dropdown-header"/>').text(label);
            menu.append(item);
        };

        var appendNotSownElement = function appendNotSownElement() {
            var empty = select.data('empty') || options.empty;
            var item = $('<span class="dropdown-header"/>').text(empty);
            menu.append(item);
        };

        var randElements = function randElements(elements) {
            $(elements).each(function (index, element) {
                if (select.data('hide-disabled') && $(element).is(':disabled')) {
                    return;
                }

                if ($(element).is('optgroup')) {
                    var childElements = $(element).children();

                    appendHeader(element);
                    randElements(childElements);
                }

                if ($(element).is('option')) {
                    appendItem(element);
                }
            });
        };

        items = items.filter(function (index, item) {
            return select.data('hide-disabled') ? $(item).is(':enabled') : true;
        });

        if (items.length === 0) {
            appendNotSownElement();
            return;
        }

        randElements(items);
    }

    function showDropdown(event) {
        var select = $(this).next('.' + pureElement);
        var menu = $(this).find('.dropdown-menu');
        var button = $(this).find('.btn');
        var liveSearch = $(select).data('live-search');

        function optionFilter(search) {
            return function (index, item) {
                return $(item).text().toLowerCase().includes(search.toLowerCase());
            };
        }

        function changeSearch() {
            var search = $(this).val();

            var filtered = select.find('option').filter(optionFilter(search));
            var elements = search ? filtered : select.children();

            if (!options.popoverResize) {
                menu.css('height', menu.outerHeight());
            }

            rendDropdown(menu, elements, select);
            options.popoverResize && rendPopperPosition(menu);
        }

        if (liveSearch) {
            var searchPlaceholder = $(select).data('live-search-placeholder') || options.search;
            var item = $('<input class="form-control" type="text" autofocus>').addClass(selectSearch).attr('placeholder', searchPlaceholder);

            $('.' + selectSearch).remove();

            menu.append(item);
            menu.find('.' + selectSearch).on('input', changeSearch);
        }

        rendDropdown(menu, select.children(), select);
        setTimeout(function () {
            return $('[autofocus]', event.target).focus();
        }, 100);

        if (options.dropdownResize) {
            menu.css('min-width', button.outerWidth());
        }
    }

    function hideDropdown() {
        $(this).find('.dropdown-menu .select-search').off('change');
    }

    function toggleElement(event) {
        event.preventDefault();

        var select = $(this).parents(2).next('.' + pureElement);
        var dropdown = $(this).parent();
        var multiple = select.attr('multiple');
        var maxOptions = select.data('max-options');
        var maxOptionsMessage = select.data('max-options-message') || options.maxOptionMessage;
        var selectedCount = select.find("option:selected").length;
        var index = $(this).data('index');
        var option = select.find('option[data-index="' + index + '"]');

        if (multiple) {
            event.stopPropagation();
        }

        if ($(this).hasClass(options.disabledClass) || $(this).hasClass('dropdown-header') || $(this).hasClass(selectSearch)) {
            return;
        }

        if (maxOptions && !$(option).attr('selected') && selectedCount >= maxOptions) {
            var _ret = function () {
                var selectExtendAlert = $(dropdown).find('.select-extend-alert');

                $(selectExtendAlert).text(maxOptionsMessage.replace('%items', maxOptions));
                $(selectExtendAlert).fadeIn(200);

                setTimeout(function () {
                    return $(selectExtendAlert).fadeOut(200);
                }, options.maxOptionMessageDelay);
                return {
                    v: void 0
                };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (!multiple) {
            select.find('option').attr('selected', false);
            dropdown.find('.' + options.activeClass).removeClass(options.activeClass);
        }

        $(option).attr('selected', !$(option).attr('selected')).trigger("change");
        $(this).toggleClass(options.activeClass);

        changeOption(select);
    }

    function getSelectedLabel(element) {
        var selected = $(element).find("option:selected");
        var selectedArray = [];
        var notSelectedTitle = $(element).data('not-selected') || options.notSelectedTitle;

        selected.each(function (index, option) {
            selectedArray.push(option.innerText);
        });

        return selected.length !== 0 ? selectedArray.join(', ') : notSelectedTitle;
    }

    function updateElement(select, extended) {
        var label = getSelectedLabel(select);
        $(extended).find('.btn').text(label);
    }

    function changeOption(select) {

        var selectElement = $(select);
        var selectExtendedElement = $(selectElement).prev('.' + elementContainer);

        updateElement(selectElement, selectExtendedElement);
    }

    function createSelectElement(element) {
        if (!$(element).is('select')) {
            throw new Error('Only <select /> elements are allowed');
        }

        if ($(element).hasClass(pureElement)) {
            return;
        }

        var type = $(element).data('type') ? 'select-' + $(element).data('type') : '';
        var group = $(element).data('input-group') ? 'input-group-prepend' : '';
        var btnClasses = $(element).data('btn-class') || 'btn-secondary';
        var label = getSelectedLabel(element);
        var button = $('<button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>').addClass(btnClasses);
        var alert = $('<div class="alert alert-danger select-extend-alert" role="alert"/>');
        var dropdown = $('<div class="dropdown-menu"/>').append(alert);
        var types = [elementContainer, group, type].join(' ');
        var select = $('<div class="dropdown"/>').addClass(types);

        $(element).find('option').each(function (index, option) {
            return $(option).attr('data-index', index);
        });

        $(element).addClass(pureElement);
        $(element).before(select.append(button.text(label), dropdown));

        if ($(element).data('input-group')) {
            $(element).parent().children(':visible:last').addClass(lastElement);
        }
    }

    $('body').on('click', '.' + elementContainer + ' .dropdown-menu > *', toggleElement).on('show.bs.dropdown', '.' + elementContainer, showDropdown).on('hide.bs.dropdown', '.' + elementContainer, hideDropdown).on('change', '.' + pureElement, function () {
        changeOption(this);
    });

    // jQuery plugin with options
    $.fn.extendSelect = function (overrideOptions) {
        try {
            if (overrideOptions) {
                options = Object.assign(options, overrideOptions);
            }

            $(this).each(function (index, element) {
                return createSelectElement(element);
            });
        } catch (e) {
            console.error(e);
        }
    };
    
})(jQuery);
})
