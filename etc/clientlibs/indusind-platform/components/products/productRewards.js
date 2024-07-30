$(document).ready(function () {
	var displayData,hideLoadMore, itemsTodisplay;
	
	itemsTodisplay = 3;

    //displayData();
	/**
	 * Load More Button Click Event
	 */
	$(".load-more-btn").click(function () {
		displayData();
		hideLoadMore();
	});

	/**
	 * Function to hide Load More Button
	 */
	hideLoadMore = function () {
        var elements = $("#display-product-cards").children('[style="display:none;"]').length;
		if (elements === 0) {
			$(".load-more-btn").hide();
		}
	}
	/**
	 * Function to display the hidden cards
	 */
	displayData = function () {
		$(".product-category-allCards:hidden").slice(0, itemsTodisplay).show();
	}
    displayData();

    //$(".section_height_01").mCustomScrollbar();

});

