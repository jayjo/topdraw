(function ($, root, undefined) {

  $(function () {

    var $document     = $(document),
        $window       = $(window);

    // Mixpanel Variables
    var page = window.location.pathname,
        hash = window.location.hash,
        animal = $('.animal_chooser li a'),
        rule = $('.info_chooser li a'),
        user = $('#user_login').val(), 
        firstName = $('input[first_name]').val(),
        lastName = $('input[last_name]').val(),
        emailAddress = $('input[email_address]').val();
        displayName = $('input[displayname]').val();
        // urlPart = page.split('/'),
        // state = urlPart.pop() === '' ? urlPart[urlPart.length - 1] : urlPart.pop();

    // MIXPANEL STUFF

		// Assign a user to a profile when signing up
    $document.ready(function(){

      // Track animals viewed
	    $('#leaky-paywall-payment-form').submit(function(e){

	    	var distinct_id = mixpanel.get_distinct_id();

	      mixpanel.identify(distinct_id);
	      
	      mixpanel.people.set_once({
	      	"$last_login": new Date(),
		      "Username": $('#user_login').val(),
		      "Email Address": emailAddress,
          "First Name": firstName,
          "Last Name" : lastName,
		    });

	    });
      
    });

    // Assign a user to a profile when logging in
    $document.ready(function(){

      // Track animals viewed
      $('#loginform').submit(function(e){

        var distinct_id = mixpanel.get_distinct_id();

        mixpanel.identify(distinct_id);
        
        mixpanel.people.set({
          "$last_login": new Date(),
          "Username": $('#user_login').val(),
          "Email Address": emailAddress
        });

      });
      
    });

    // Assign a user to a profile when adjusting profile
    $document.ready(function(){

      // Track animals viewed
      $('#leaky-paywall-profile').submit(function(e){

        var distinct_id = mixpanel.get_distinct_id();

        mixpanel.identify(distinct_id);
        
        mixpanel.people.set({
          "$last_login": new Date(),
          "Username": $('#user_login').val(),
          "Email Address": emailAddress,
          "Display Name": displayName
        });

      });
      
    });

    // Track page views
    $(".nav ul li a").on('click', function(e){
      linkText = $(this).text();
      mixpanel.track("Clicked Link", {
        "Page": linkText
      });
    });

    // Track pages viewed
    mixpanel.track("Viewed Page",{"Page": page});

    // Track animals viewed
    $document.on('click', '.animal-chooser li a', function(e){
      var species = $(this).text();
      mixpanel.track("Viewed Species", {
        "Page": page,
        "Species": species
      });
    });

    // Track rules viewed
    $document.on('click', '.info-chooser li a', function(e){
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

    // Track Contact Attempts
    $('.button, button, .submit, input[type=submit]').on('click', function(e){

      var buttonType = $(this).text(),
          buttonURL = window.location.hash;

      mixpanel.track("Button Clicked", {
        "Page": page,
        "Button Type": buttonType,
        "Species": hash
      });
    });

  });

})(jQuery, this);