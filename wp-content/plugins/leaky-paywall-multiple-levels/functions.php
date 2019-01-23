<?php 

if ( !function_exists( 'build_leaky_paywall_subscription_row_post_type_ajax' ) ) {

	/**
	 * AJAX Wrapper
	 *
	 * @since 1.0.0
	 */
	function build_leaky_paywall_subscription_row_post_type_ajax() {
	
		if ( isset( $_REQUEST['select-post-key'] ) && isset( $_REQUEST['row-key'] ) ) {
			$settings = get_leaky_paywall_settings();
			
			if ( is_multisite_premium() && preg_match( '#^' . network_admin_url() . '#i', $_SERVER['HTTP_REFERER'] ) ) {
				if ( !defined( 'WP_NETWORK_ADMIN' ) ) {
					define( 'WP_NETWORK_ADMIN', true );
				}
			}
			
			die( build_leaky_paywall_subscription_row_post_type( array(), $_REQUEST['select-post-key'], $_REQUEST['row-key'] ) );
		}
		die();
	}
	add_action( 'wp_ajax_issuem-leaky-paywall-add-new-subscription-row-post-type', 'build_leaky_paywall_subscription_row_post_type_ajax' );
	
}