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

		$('.species_information, .species_chart').tabbedContent({
			links: '.animal_chooser li a',
			currentClass : 'current',
			loop: false
		});

		$('.unit_information').tabbedContent({
			links: '.info_chooser li a',
			currentClass: 'current',
			loop: false
		});

		$('header').scrollupbar();

		//Sticky Stuff
		$(window).scroll(function(e){
			var y = $(this).scrollTop();
			if (y >= '250'){
				$('header').addClass('shown');
			} else {
				$('header').removeClass('shown');
			}
		});

		var calc    = $('.calc'),
				odds    = $('.drawOdds');

		$('.hamburger').on('click', function(e){
			$(this).toggleClass('active');
			$('nav.nav').toggleClass('active');
			e.preventDefault();
		});

		$('.join').on('click', function(){
			$('.nav').removeClass('active');
		});

		// True Odds Calculator

		var originalValues = getoriginalValues();

		function getoriginalValues(){
	    var values = [];
	    $('.drawOdds').each(function(index){
	    	values[index] = $(this).text();
	  	});
		  return values;
		}

		function setDrawOddValues(){
			var curVal = calc.val();
			$(document).find('.drawOdds').each(function(index){
        var oddsVal = (originalValues[index] / curVal);
        var origVal = (originalValues[index] / 1);
        if(!$('.calc').val() || $('.calc').val() === "0" || $('.calc').val() === "1") {
        	$(this).text(origVal);
        	$('.draw').text("2014 Draw Odds");
        	$('.draw, .drawOdds').removeClass('highlight');
        } else {
        	$(this).text(oddsVal);
        	$('.draw').text("True Draw Odds");
        	$('.draw, .drawOdds').addClass('highlight');
        }
	    });
		}

		$(document).on('keyup', '.calc', function(e){
	    // if (!calc.val()) return;
	    setDrawOddValues();
		});

		$('.animal_chooser li a').on('click', function(){
			$('.calc').val("");
			setDrawOddValues();
		});

		$(document).on('click ready', function(e){
			if($('.elk, .mule-deer, .pronghorn, .desert-bighorn').hasClass('current')) {
				$('.calculating').hide();
			} else {
				$('.calculating').show();
			}
			ePreventDefault();
		});

	});

	// MIXPANEL STUFF

})(jQuery, this);