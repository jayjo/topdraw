(function ($, root, undefined) {

	$(function () {

		var $document = $(document),
				$window = $(window);

		// True Odds Calculator (divided by value)

		function trueOddsCalc() {

			var calc    = $('.calc'),
					odds    = $('.drawOdds'),
					originalValues = getoriginalValues();

			function getoriginalValues(){
				var values = [];
				odds.each(function(index){
					$(this).attr('data-idx', index);
					values[index] = $(this).text();
				});
				return values;
			}

			function setDrawOddValues(){
				var curVal = calc.val();
				$document.find('.drawOdds').each(function(index){
					var index = parseInt($(this).attr('data-idx'));
		      var oddsVal = (originalValues[index] / curVal).toFixed(0);
		      var origVal = (originalValues[index] / 1);
		      if(!calc.val() || calc.val() === "0" || calc.val() === "1") {
						$(this).text(origVal);
						$('.draw, .drawOdds').removeClass('highlight');
		      } else {
						$(this).text(oddsVal);
						$('.drawOdds').addClass('highlight');
		      }
		      if(oddsVal < 1){
		      	$(this).text("1");
		      }
				});
			}

			$document.on('keyup', '.calc', function(e){
				setDrawOddValues();
			});

			$('.animal_chooser li a').on('click', function(e){
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
					$(this).attr('data-idx', index);
					values[index] = $(this).text();
				});
				return values;
			}

			function setDrawOddValues(){
				var curVal = calc.val();
				$document.find('.drawOdds').each(function(index){

					var index = parseInt($(this).attr('data-idx'));
					var oddsVal		     = (originalValues[index] / curVal).toFixed(0);
					var oneP			     = (originalValues[index] / 1).toFixed(0);
					var twoP			     = (originalValues[index] / 2).toFixed(0);
					var threeP		     = (originalValues[index] / 5).toFixed(0);
					var fourP			     = (originalValues[index] / 10).toFixed(0);
					var fiveP			     = (originalValues[index] / 17).toFixed(0);
					var sixP			     = (originalValues[index] / 26).toFixed(0);
					var sevenP		     = (originalValues[index] / 37).toFixed(0);
					var eightP		     = (originalValues[index] / 50).toFixed(0);
					var nineP			     = (originalValues[index] / 65).toFixed(0);
					var tenP			     = (originalValues[index] / 82).toFixed(0);
					var elevenP		     = (originalValues[index] / 101).toFixed(0);
					var twelveP		     = (originalValues[index] / 122).toFixed(0);
					var thirteenP	     = (originalValues[index] / 145).toFixed(0);
					var fourteenP	     = (originalValues[index] / 170).toFixed(0);
					var fifteenP	     = (originalValues[index] / 197).toFixed(0);
					var sixteenP	     = (originalValues[index] / 226).toFixed(0);
					var seventeenP     = (originalValues[index] / 257).toFixed(0);
					var eighteenP	     = (originalValues[index] / 290).toFixed(0);
					var nineteenP	     = (originalValues[index] / 325).toFixed(0);
					var twentyP	       = (originalValues[index] / 362).toFixed(0);
					var twentyoneP     = (originalValues[index] / 401).toFixed(0);
					var twentytwoP     = (originalValues[index] / 442).toFixed(0);
					var twentythreeP	 = (originalValues[index] / 485).toFixed(0);
					var twentyfourP	   = (originalValues[index] / 530).toFixed(0);
					var origVal 	     = (originalValues[index] / 1).toFixed(0);

					if(!calc.val() || calc.val() === "0") {
							$(this).text(origVal);
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
					calcDrawBtnBot	= $('button.calcDraw');
					calcDrawBtnTop	= $('button.calcDrawTop');

			$document.on('click ready', function(e){
				var calculating = $('.calculating'),
						calc 				= $('#calc');

				if($(calcValStr).hasClass('current')) {
					calculating.hide();
					calc.removeClass('');

					calculating.addClass('nocalc');
					calcDrawBtnBot.text('Research Available Hunts');
					calcDrawBtnTop.text('Research Hunts');

				} else if($(calcValStrMulti).hasClass('current')) {
					calculating.show();
					calc.addClass('calcMulti').removeClass('calc');

					calculating.removeClass('nocalc');
					calcDrawBtnBot.text('Research Available Hunts & Calculate Draw Odds');
					calcDrawBtnTop.text('Calculate Draw Odds');

				}	else {
					calculating.show();
					calc.addClass('calc').removeClass('calcMulti');

					calculating.removeClass('nocalc');
					calcDrawBtnBot.text('Research Available Hunts & Calculate Draw Odds');
					calcDrawBtnTop.text('Calculate Draw Odds');

				}
			});

		}

		trueOddsCalcMulti();

	});

})(jQuery, this);
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

		$(".table").tablesorter({
			sortInitialOrder: "desc"
		});
		// $(".table").DataTable();

		$('.species-information, .species-chart').tabbedContent({
			links: '.animal-chooser li a',
			currentClass : 'current',
			loop: false
		});

		$('.unit-information').tabbedContent({
			links: '.info-chooser li a',
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

		// MEMBERSHIP STUFF

		$('.ms-price.price').html('<span class="dollar">$</span>99');
		$document.ready(function(e){
			var alertBox = $('.ms-alert-box').clone();
			$('.ms-account-wrapper .ms-alert-box').remove();
			$('body').prepend(alertBox);
		});

		// Expand the table to full screen
		$document.on('click', '.expand', function(e){
			$('body').addClass('table-active');
			return false;
		});

		// Close the table to full screen
		$document.on('click', '.close', function(e){
			$('body').removeClass('table-active');
			return false;
		});

		// Animal Chooser Dropdown stuff
		function DropDown(el) {
			this.dd = el;
			this.placeholder = this.dd.children('span');
			this.opts = this.dd.find('ul.animal-chooser > li');
			this.optsInfo = this.dd.find('ul.info-chooser > li');
			this.val = '';
			this.index = -1;
			this.initEvents();
		}

		DropDown.prototype = {
			initEvents : function() {
				var obj = this;
				var hash = window.location.hash.substring(1);

				obj.dd.on('click', function(event){
					$(this).find('ul').toggleClass('active');
					event.preventDefault();
				});

				obj.opts.on('click', function(){
					var opt = $(this);
					obj.val = opt.text();
					obj.index = opt.index();
					obj.placeholder.text('Animal Species: ' + obj.val);
				});

				obj.optsInfo.on('click', function(){
					var opt = $(this);
					obj.val = opt.text();
					obj.index = opt.index();
					obj.placeholder.text(obj.val);
				});

				$document.ready(function(){
					var unit = $('body').hasClass('page-template-page-unit-analysis'),
							trophy = $('body').hasClass('page-template-page-trophy-analysis'),
							rules = $('body').hasClass('page-template-page-rules-regulations');

					if(hash !== '' && unit){
						obj.placeholder.text('Animal Species: ' + hash);
					}
					else if(hash !== '' && trophy ) {
						obj.placeholder.text('Animal Species: ' + hash);
					}
					else if(hash !== '' && rules ) {
						obj.placeholder.text(hash);
					}
				});

			},
			getValue : function(){
				return this.val;
			},
			getIndex : function(){
				return this.index;
			}
		};

		$(function(){

			var dd = new DropDown($('#dd'));

			$document.on('click', function(){
				$('.button-group').removeClass('active');
			});

		});

		// Change the class and margin on paragraphs that have a strong (in the BOXES and RECORDS AREA)
		$(function(){
			$('.boxes p').addClass('item');
			$('.boxes p strong').parent().addClass('header').removeClass('item');
			$('.boxes p').each(function(){
				var $p = $(this),
						txt = $p.html();

				if(txt === '&nbsp;'){
					$p.addClass('spacer-thing').removeClass('item');
				}
			});
			$('.record').each(function(){
				var $p = $(this),
						num = $p.children().length;
				if(num === 2){
					$p.addClass('full-width');
				}
			});
		});

		// If the email address already exists, let them know
		$document.ready(function(){
			if(window.location.href === "https://topdrawconsulting.com/register/?action=register_user") {
				$('.error-thing').addClass('visible');
				console.log("this is an error yo");
			}
		});

		// If a link has the words coming soon add a class that makes them inactive
		$(".sub-menu a:contains('Coming Soon')").addClass('coming-soon-link');
		$(".animal-chooser a:contains('Coming Soon')").addClass('coming-soon-link');

		$("p.footnote:empty").addClass("hidden");

		// Mountain Goat Table Stuff

		$('.goat-toggle h6').on('click', function(e){
			if($(this).hasClass('current')){
			} else if(!$(this).hasClass('current')){
				$(this).addClass('current').siblings().removeClass('current');
				$(this).parent().siblings('table.current').removeClass('current').siblings('table').addClass('current');
			}
		});

		// // TOOLTIP STUFF
		// // NEED TO APPLY THIS TO ALL OF THE TOOLTIPS THROUGHOUT TOPDRAW

		// function toolTip(e){

		// 	$document.ready(function(e){
		// 		var dataCell	= $('td.orange');
		// 		var dataText 	= dataCell.data('tooltip');

		// 		dataCell.on('mouseenter', function(){
		// 			if(dataText !== '') {
		// 				$(this).text($(this).data('tooltip'));
		// 			}
		// 		});

		// 	});

		// 	$('td').each(function(e){
		// 		if($(this).hasClass('orange')){
		// 			$(this).clone().children().remove().end().text();
		// 		}
		// 	});

		// }

		// toolTip();

		// Mobile Stuff
		////
		////
		////
		////
		////

		// Hamburger Menu
		$('.nav').on('click', function(){
			$('.menu-header-menu-container').toggleClass('active');
			$('.login-stuff').toggleClass('active');
		});

	});

})(jQuery, this);