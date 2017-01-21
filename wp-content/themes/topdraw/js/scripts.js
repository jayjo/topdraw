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

		// True Odds Calculator (divided by value)

		function trueOddsCalc() {

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
		      var oddsVal = (originalValues[index] / curVal).toFixed(0);
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

		}

		trueOddsCalc();

		function trueOddsCalcMulti() {

			var calc    = $('.calcMulti'),
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

					var oddsVal		     = (originalValues[index] / curVal).toFixed(0);
					var oneP			     = (originalValues[index] * 1).toFixed(0);
					var twoP			     = (originalValues[index] * 2).toFixed(0);
					var threeP		     = (originalValues[index] * 5).toFixed(0);
					var fourP			     = (originalValues[index] * 10).toFixed(0);
					var fiveP			     = (originalValues[index] * 17).toFixed(0);
					var sixP			     = (originalValues[index] * 26).toFixed(0);
					var sevenP		     = (originalValues[index] * 37).toFixed(0);
					var eightP		     = (originalValues[index] * 50).toFixed(0);
					var nineP			     = (originalValues[index] * 65).toFixed(0);
					var tenP			     = (originalValues[index] * 82).toFixed(0);
					var elevenP		     = (originalValues[index] * 101).toFixed(0);
					var twelveP		     = (originalValues[index] * 122).toFixed(0);
					var thirteenP	     = (originalValues[index] * 145).toFixed(0);
					var fourteenP	     = (originalValues[index] * 170).toFixed(0);
					var fifteenP	     = (originalValues[index] * 197).toFixed(0);
					var sixteenP	     = (originalValues[index] * 226).toFixed(0);
					var seventeenP     = (originalValues[index] * 257).toFixed(0);
					var eighteenP	     = (originalValues[index] * 290).toFixed(0);
					var nineteenP	     = (originalValues[index] * 325).toFixed(0);
					var twentyP	       = (originalValues[index] * 362).toFixed(0);
					var twentyoneP     = (originalValues[index] * 401).toFixed(0);
					var twentytwoP     = (originalValues[index] * 442).toFixed(0);
					var twentythreeP	 = (originalValues[index] * 485).toFixed(0);
					var twentyfourP	   = (originalValues[index] * 530).toFixed(0);
					var origVal 	     = (originalValues[index] / 1).toFixed(0);

					if(!calc.val() || calc.val() === "0") {
							$(this).text(origVal);
							// $('.draw').text(headVal);
							$('.draw, .drawOdds').removeClass('highlight');
						}
							else if(calc.val() === "1") {

							$(this).text(oneP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "2") {

							$(this).text(twoP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "3") {

							$(this).text(threeP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "4") {

							$(this).text(fourP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "5") {

							$(this).text(fiveP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "6") {

							$(this).text(sixP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "7") {

							$(this).text(sevenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "8") {

							$(this).text(eightP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "9") {

							$(this).text(nineP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "10") {

							$(this).text(tenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "11") {

							$(this).text(elevenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "12") {

							$(this).text(twelveP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "13") {

							$(this).text(thirteenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "14") {

							$(this).text(fourteenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "15") {

							$(this).text(fifteenP);
							$('.drawOdds').addClass('highlight');
						}
							else {

							$(this).text(origVal);
							$('.drawOdds').addClass('highlight');
							// $('.draw').text("True Draw Odds");
							// $('.draw, .drawOdds').addClass('highlight');
						}

					if (document.location.pathname.indexOf("/nevada/") == "0") {

						if(calc.val() === "16") {

							$(this).text(sixteenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "17") {

							$(this).text(seventeenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "18") {

							$(this).text(eighteenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "19") {

							$(this).text(nineteenP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "20") {

							$(this).text(twentyP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "21") {

							$(this).text(twentyoneP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "22") {

							$(this).text(twentytwoP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "23") {

							$(this).text(twentythreeP);
							$('.drawOdds').addClass('highlight');
						}
							else if(calc.val() === "24") {

							$(this).text(twentyfourP);
							$('.drawOdds').addClass('highlight');
						}

					}

				});
			}

			$document.on('keyup', '.calcMulti', function(e){
				setDrawOddValues();
			});

			$('.animal_chooser li a').on('click', function(){
				$('.calcMulti').val("");
				setDrawOddValues();
			});

			var calcValues 			= $('.calculatorValues').text(),
					calcValuesMulti = $('.calculatorValuesMulti').text(),
					calcValStr 			= calcValues.substring(0, calcValues.length-1),
					calcValStrMulti = calcValuesMulti.substring(0, calcValuesMulti.length-1);

			$document.on('click ready', function(e){
				var calculating = $('.calculating'),
						calc 				= $('#calc');
				if($(calcValStr).hasClass('current')) {
					calculating.hide();
					calc.removeClass('');
					// console.log('no calculator');
				} else if($(calcValStrMulti).hasClass('current')) {
					calculating.show();
					calc.addClass('calcMulti').removeClass('calc');
					// console.log('multi');
				}	else {
					calculating.show();
					calc.addClass('calc').removeClass('calcMulti');
					// console.log('reg');
				}
			});

		}

		trueOddsCalcMulti();

		// MEMBERSHIP STUFF

		$('.ms-price.price').html('<span class="dollar">$</span>99');
		$document.ready(function(e){
			var alertBox = $('.ms-alert-box').clone();
			$('.ms-account-wrapper .ms-alert-box').remove();
			$('body').prepend(alertBox);
		});

		// //// Expand the table to full screen
		// $document.on('click', '.expand', function(e){
		//  $(this).siblings('.tabscontent').find('div:visible').addClass('fullScreen');
		//  $('.shrink').addClass('visible');
		// });

		// $document.on('click', '.shrink', function(e){
		//  $(this).removeClass('visible');
		//  $('div').removeClass('fullScreen');
		// });

		// MIXPANEL STUFF

		// Mixpanel Variables
		var page = window.location.pathname,
				hash = window.location.hash,
				animal = $('.animal_chooser li a'),
				rule = $('.info_chooser li a'),
				// distinctID = mixpanel.get_distinct_id();
				// urlPart = page.split('/'),
				// state = urlPart.pop() === '' ? urlPart[urlPart.length - 1] : urlPart.pop();

		// Track page views
		$(".nav ul li a").on('click', function(e){
			linkText = $(this).text();
			mixpanel.track("Clicked Link", {
				"Page": linkText
			});
		});

		// Track pages viewed
		$document.ready(function(){
			mixpanel.track("Viewed Page",{"Page": page});
			// console.log(distinctID);
		});

		// Track animals viewed
		$document.on('click', '.animal_chooser li a', function(e){
			var species = $(this).text();
			mixpanel.track("Viewed Species", {
				"Page": page,
				"Species": species
			});
		});

		// Track rules viewed
		$document.on('click', '.info_chooser li a', function(e){
			var rule = $(this).text();
			mixpanel.track("Viewed Rule", {
				"Page": page,
				"Rule": rule
			});
		});

		// Track Tables Interacted with
		$('table th').on('click', function(e){
			var header = $(this).text();
			mixpanel.track("Sorted Table", {
				"Page": page,
				"Column": header,
				"Species": hash
			});
		});

	});

	// If the email address already exists, let them know
	$document.ready(function(){
		if(window.location === "https://topdrawconsulting.com/register/?action=register_user") {
			$('.error-thing').addClass('visible');
			console.log("this is an error yo");
		}
	});

})(jQuery, this);