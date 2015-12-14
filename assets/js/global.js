jQuery(document).ready(function($) {

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
			$('.home header').addClass('shown');
		} else {
			$('.home header').removeClass('shown');
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

	// $(".navvy").sticky({
	// 	topSpacing: 90,
	// 	getWidthFrom: '.wrapper'
	// });

	// $('.table.over').draggable({
	// 	scroll: true,
	// 	scrollSenstivity: 500,
	// 	scrollSpeed: 500
	// });

	// var calc    = $('.calc'),
	// 		odds    = $('.drawOdds');

	// $(document).on('keyup keydown', '.calc', function(e){
	// 	var curVal = calc.val();
	// 	$(document).find('.drawOdds').each(function(){
	// 		var oddsVal = ($(this).html() / curVal);
	// 		$(this).text(oddsVal);
	// 	});
	// });

	//Form submissionß
	$(function(e){
		var form = $('#mainForm');
		var messages = $('.form-messages');
		var email = $('.email-field');
		//listen for when the form is submitted
		$(form).submit(function(event){
			//stop the browser from submitting the form and refreshing
			event.preventDefault();
			//Serialize the data
			var formData = $(form).serialize();
			//Submit the form using AJAX
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response){
				// Make sure the form messages div has a success class
				$(messages).removeClass('error');
				$(messages).addClass('success').addClass('active');
				//Send an event to Mixpanel that they signed up
					mixpanel.track("Signed Up",{
						"Form": "Hero"
					});
				//Set the messsage text
				$(messages).text(response);
				//Clear the form
				$(email).val("");
				setTimeout(function(){
					$('.form-messages.success.active').removeClass('active');
				}, 4000);
			})
			.fail(function(data){
				//Make sure that the form messages div has the error class
				$(messages).removeClass('success');
				$(messages).addClass('error').addClass('active');
				//Set the messages text
				if(data.responseText !== '') {
					$(messages).text(data.responseText);
				} else {
					$(messages).text('Whoops, an error occurred.');
				}
			});
		});
	});

});