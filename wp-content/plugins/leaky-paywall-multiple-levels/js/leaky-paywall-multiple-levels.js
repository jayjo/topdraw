var $leaky_paywall_multiple_levels_settings = jQuery.noConflict();

$leaky_paywall_multiple_levels_settings(document).ready(function($) {
		
	$( '#leaky_paywall_subscription_level_options' ).on( 'click', 'input#add-subscription-row', function( event ) {
		event.preventDefault();
        var data = {
            'action': 'issuem-leaky-paywall-add-new-subscription-row',
            'row-key': ++leaky_paywall_subscription_levels_row_key,
        }
        $.post( ajaxurl, data, function( response ) {
            $( 'td#issuem-leaky-paywall-subscription-level-rows' ).append( response );
        });
	});

});