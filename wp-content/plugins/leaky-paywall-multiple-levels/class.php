<?php
/**
 * Registers zeen101's Leaky Paywall - Multiple Levels class
 *
 * @package zeen101's Leaky Paywall - Multiple Levels
 * @since 1.0.0
 */

/**
 * This class registers the main Multiple Levels functionality
 *
 * @since 1.0.0
 */
if ( ! class_exists( 'Leaky_Paywall_Multiple_Levels' ) ) {
	
	class Leaky_Paywall_Multiple_Levels {
		
		/**
		 * Class constructor, puts things in motion
		 *
		 * @since 1.0.0
		 */
		function __construct() {

			add_action( 'admin_enqueue_scripts', array( $this, 'admin_wp_enqueue_scripts' ) );
			add_action( 'leaky_paywall_after_subscription_levels', array( $this, 'add_multiple_levels' ) );

		}

		/**
		 * Enqueues backend Leaky Paywall Multiple Levels scripts
		 *
		 * @since 1.0.0
		 */
		function admin_wp_enqueue_scripts( $hook_suffix ) {
		
			if ( 'toplevel_page_issuem-leaky-paywall' === $hook_suffix ) {
				wp_enqueue_script( 'leaky_paywall_multiple_levels_js', LP_MTLV_URL . 'js/leaky-paywall-multiple-levels.js', array( 'jquery' ), LP_MTLV_VERSION );
			}

		}

		/**
		 * Add multiple levels add button to subscription levels metabox
		 *
		 * @since 1.0.0
		 */
		function add_multiple_levels( $last_key ) {

			?>

            	<script type="text/javascript" charset="utf-8">
		            var leaky_paywall_subscription_levels_row_key = <?php echo $last_key; ?>;
		        </script>

                <p class="subscription-options">
                    <input class="button-secondary" id="add-subscription-row" class="add-new-issuem-leaky-paywall-subscription-row" type="submit" name="add_leaky_paywall_row" value="<?php _e( 'Add New Level', 'issuem-leaky-paywall' ); ?>" />
                </p>
		                        
			<?php 

		}

	} // end class

}