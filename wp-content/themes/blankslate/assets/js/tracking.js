(function ($, root, undefined) {

	$(function () {

		var $document 		= $(document),
				$window 			= $(window);

		// MIXPANEL STUFF

		// Mixpanel Variables
		var page = window.location.pathname,
				hash = window.location.hash,
				animal = $('.animal_chooser li a'),
				rule = $('.info_chooser li a'),
				buttonAttribute;
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

		// Track Signups
		$('.signup-button').on('click', function(e){
			var buttonAttribute = $(this).attr('location');
			mixpanel.track("Signed Up", {
				"Page": page,
				"Button Location": buttonAttribute,
				"Species": hash
			});
		});

		// Track Contact Attempts
		$('.contact-button').on('click', function(e){
			var buttonAttribute = $(this).attr('location');
			mixpanel.track("Contact Attempt", {
				"Page": page,
				"Button Location": buttonAttribute,
				"Species": hash
			});
		});

	});

})(jQuery, this);