(function ($, root, undefined) {

	$(function () {

		var $document = $(document),
				$window = $(window);

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

		// $('header').scrollupbar();

		//Sticky Stuff
		$window.scroll(function(e){
			var y = $(this).scrollTop();
			if (y >= '250'){
				$('header').addClass('shown');
			} else {
				$('header').removeClass('shown');
			}
		});

		$('.hamburger').on('click', function(e){
			$(this).toggleClass('active');
			$('nav.nav').toggleClass('active');
			e.preventDefault();
		});

		$('.join').on('click', function(){
			$('.nav').removeClass('active');
		});

		// True Odds Calculator

		var calc    = $('.calc'),
				odds    = $('.drawOdds'),
				originalValues = getoriginalValues();

		function getoriginalValues(){
	    var values = [];
	    odds.each(function(index){
	    	values[index] = $(this).text();
	  	});
		  return values;
		}

		function setDrawOddValues(){
			var curVal = calc.val();
			$document.find('.drawOdds').each(function(index){
        var oddsVal = (originalValues[index] / curVal);
        var origVal = (originalValues[index] / 1);
        if(!calc.val() || calc.val() === "0" || calc.val() === "1") {
        	$(this).text(origVal);
        	// $('.draw').text(headVal);
        	$('.draw, .drawOdds').removeClass('highlight');
        } else {
        	$(this).text(oddsVal);
        	$('.drawOdds').addClass('highlight');
        	// $('.draw').text("True Draw Odds");
        	// $('.draw, .drawOdds').addClass('highlight');
        }
	    });
		}

		$document.on('keyup', '.calc', function(e){
	    setDrawOddValues();
		});

		$('.animal_chooser li a').on('click', function(){
			$('.calc').val("");
			setDrawOddValues();
		});

		var calcValues = $('.calculatorValues').text(),
				calcValStr = calcValues.substring(0, calcValues.length-1);

		$document.on('click ready', function(e){
			if($(calcValStr).hasClass('current')) {
				$('.calculating').hide();
			} else {
				$('.calculating').show();
			}
		});

		// MEMBERSHIP STUFF

		$('.ms-price.price').html('<span class="dollar">$</span>99');
		$document.ready(function(e){
			var alertBox = $('.ms-alert-box').clone();
			$('.ms-account-wrapper .ms-alert-box').remove();
			$('body').prepend(alertBox);
		});

		// MIXPANEL STUFF

		var page = window.location.pathname,
	  		urlPart = page.split('/'),
	  		state = urlPart.pop() === '' ? urlPart[urlPart.length - 1] : urlPart.pop();
	  		// linkText = $(this).text();

	  // Track page views
	  $(".nav ul li a").on('click', function(e){
	  	linkText = $(this).text();
	  	mixpanel.track("Clicked Link", {
	  		"Page": linkText
	  	});
	  });

	});

})(jQuery, this);