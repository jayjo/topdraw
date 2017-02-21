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
				rule = $('.info_chooser li a');
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

		// If the email address already exists, let them know
		$document.ready(function(){
			if(window.location.href === "https://topdrawconsulting.com/register/?action=register_user") {
				$('.error-thing').addClass('visible');
				console.log("this is an error yo");
			}
		});

	});

})(jQuery, this);