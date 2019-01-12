(function ($, root, undefined) {

  $(function () {

    var $document     = $(document),
        $window       = $(window);

    // MIXPANEL STUFF

    // Mixpanel Variables
    var page = window.location.pathname,
        hash = window.location.hash,
        animal = $('.animal_chooser li a'),
        rule = $('.info_chooser li a'),
        user = $('#user_login').val(), 
        firstName = $('input[first_name]').val(),
        lastName = $('input[last_name]').val(),
        emailAddress = $('input[email_address]').val();
        // urlPart = page.split('/'),
        // state = urlPart.pop() === '' ? urlPart[urlPart.length - 1] : urlPart.pop();

    // mixpanel.people.set({
    //   "Username": user,
    //   "Email Address": emailAddress,
    //   "First Name": firstName,
    //   "Last Name": lastName
    // });
    // mixpanel.identify(distinct_id);

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
