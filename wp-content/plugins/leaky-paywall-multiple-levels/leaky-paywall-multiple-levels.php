<?php
/**
 * Plugin Name: Leaky Paywall - Multiple Levels
 * Plugin URI: http://www.zeen101.com
 * Description: Create Multiple Levels in Leaky Paywall 
 * Version: 1.3.0
 * Author: Zeen101 Development Team
 * Author URI: http://www.zeen101.com
 * Text Domain: lp-multiple-levels
 * License: GPL2
 */


//Define global variables...
if ( !defined( 'ZEEN101_STORE_URL' ) )
	define( 'ZEEN101_STORE_URL',	'http://zeen101.com' );
	
define( 'LP_MTLV_NAME', 		'Leaky Paywall - Multiple Levels' );
define( 'LP_MTLV_SLUG', 		'lp-multiple-levels' );
define( 'LP_MTLV_VERSION', 	'1.3.0' );
define( 'LP_MTLV_DB_VERSION', '1.0.0' );
define( 'LP_MTLV_URL', 		plugin_dir_url( __FILE__ ) );
define( 'LP_MTLV_PATH', 		plugin_dir_path( __FILE__ ) );
define( 'LP_MTLV_BASENAME', 	plugin_basename( __FILE__ ) );
define( 'LP_MTLV_REL_DIR', 	dirname( LP_MTLV_BASENAME ) );

/**
 * Instantiate Pigeon Pack class, require helper files
 *
 * @since 1.0.0
 */
function leaky_paywall_multiple_levels_plugins_loaded() {
	
	include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	if ( is_plugin_active( 'issuem-leaky-paywall/issuem-leaky-paywall.php' ) || is_plugin_active( 'leaky-paywall/leaky-paywall.php' ) ) {
		
		require_once( 'class.php' );
	
		// Instantiate the Pigeon Pack class
		if ( class_exists( 'Leaky_Paywall_Multiple_Levels' ) ) {
			
			global $leaky_paywall_multiple_levels;
			
			$leaky_paywall_multiple_levels = new Leaky_Paywall_Multiple_Levels();
			
			require_once( 'functions.php' );

			//Internationalization
			load_plugin_textdomain( 'lp-multiple-levels', false, LP_MTLV_REL_DIR . '/i18n/' );
				
		}

		// Upgrade function based on EDD updater class
		if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
			include( dirname( __FILE__ ) . '/include/EDD_SL_Plugin_Updater.php' );
		} 

		$license = new Leaky_Paywall_License_Key( LP_MTLV_SLUG, LP_MTLV_NAME );
		$settings = $license->get_settings();

		$license_key = trim( $settings['license_key'] );

		$edd_updater = new EDD_SL_Plugin_Updater( ZEEN101_STORE_URL, __FILE__, array(
			'version' 	=> LP_MTLV_VERSION, // current version number
			'license' 	=> $license_key,	
			'item_name' => LP_MTLV_NAME,	
			'author' 	=> 'Zeen101 Development Team'
		) );
	
	} else {
	
		add_action( 'admin_notices', 'leaky_paywall_multiple_levels_requirement_nag' );
		
	}

}
add_action( 'plugins_loaded', 'leaky_paywall_multiple_levels_plugins_loaded', 4815162343 ); //wait for the plugins to be loaded before init

function leaky_paywall_multiple_levels_requirement_nag() {
	?>
	<div id="leaky-paywall-requirement-nag" class="update-nag">
		<?php _e( 'You must have the Leaky Paywall plugin activated to use the Leaky Paywall Multiple Levels plugin.' ); ?>
	</div>
	<?php
}

