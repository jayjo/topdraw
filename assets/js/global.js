jQuery(document).ready(function($) {

	$('.animal_selector').fancySelect();
	$(".table").tablesorter({
		sortList: [[0,0], [1,0]]
	});

});