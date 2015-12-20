(function ($, root, undefined) {

	$(function () {

		$('input[type="text"], input[type="email"]').each(function(){

			var default_value = this.value;

				$(this).focus(function(){
					if(this.value === default_value) {
						this.value = '';
					}
				});

				$(this).blur(function(){
					if(this.value === '') {
						this.value = default_value;
					}
				});
		});

		$('.animal_selector').fancySelect();
		$(".table").tablesorter({
			sortList: [[0,0], [1,0]]
		});

		$('#state').flexselect();
		$('#state_flexselect').on('focus', function(){
			$(this).input.select();
		});

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

		$('.hamburger').on('click', function(e){
			$(this).toggleClass('active');
			$('nav.nav').toggleClass('active');
			e.preventDefault();
		});

		$('.join').on('click', function(){
			$('.nav').removeClass('active');
		});

	});

	// MIXPANEL STUFF

})(jQuery, this);