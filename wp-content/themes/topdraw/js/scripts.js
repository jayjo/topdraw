(function ($, root, undefined) {

	$(function () {

		$('.animal_selector').fancySelect();
		$(".table").tablesorter({
			sortList: [[0,0], [1,0]]
		});

		$('#state').flexselect();
		$('#state').val("");

		$('.tabscontent').tabbedContent({
			links: '.animal_chooser li a',
			currentClass : 'current',
			loop: false
		});

		$('header').scrollupbar();

		//Sticky header
		$(window).scroll(function(e){
			var y = $(this).scrollTop();
			if (y >= '250'){
				$('header').addClass('shown');
			} else {
				$('header').removeClass('shown');
			}
		});

		var unitTable   = $('.unittable'),
				trophyTable = $('.trophytable'),
				pUnit 		  = $('p.unit'),
				pTrophy		 	= $('p.trophy');

		$(document).on('click', 'h3.unit', function(e){
			$(this).addClass('current').siblings().removeClass('current');
			unitTable.addClass('shown').removeClass('hiding');
			trophyTable.addClass('hiding').removeClass('shown');
			pUnit.addClass('showing').removeClass('hiding');
			pTrophy.addClass('hiding').removeClass('showing');
			return false;
		});

		$(document).on('click', 'h3.trophy', function(e){
			$(this).addClass('current').siblings().removeClass('current');
			unitTable.addClass('hiding').removeClass('shown');
			trophyTable.addClass('shown').removeClass('hiding');
			pTrophy.addClass('showing').removeClass('hiding');
			pUnit.addClass('hiding').removeClass('showing');
			return false;
		});

		var calc    = $('.calc'),
				odds    = $('.drawOdds');

		$(document).on('keyup keydown', '.calc', function(e){
			var curVal = calc.val();

			$(document).find('.drawOdds').each(function(){
				var oddsVal = ($(this).text() / curVal);
				console.log(oddsVal);
			});
		});

	});

})(jQuery, this);