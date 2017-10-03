<?php
/**
 * Paypal Standard Payment Gateway Class
 *
 * @package     Leaky Paywall
 * @subpackage  Classes/Roles
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       4.0.0
*/

class Leaky_Paywall_Payment_Gateway_PayPal extends Leaky_Paywall_Payment_Gateway {

	private $api_endpoint;
	private $checkout_url;
	protected $username;
	protected $password;
	protected $signature;


	/**
	 * Get things going
	 *
	 * @since  4.0.0
	 */
	public function init() {

		$settings = get_leaky_paywall_settings();

		$this->supports[]	= 'one-time';
		$this->supports[]	= 'recurring';
		// $this->supports[]	= 'fees';

		$this->test_mode	= 'off' === $settings['test_mode'] ? false : true;

		if ( $this->test_mode ) {

			$this->api_endpoint = 'https://api-3t.sandbox.paypal.com/nvp';
			$this->checkout_url = 'https://www.paypal.com/cgi-bin/webscr';

		} else {

			$this->api_endpoint = 'https://api-3t.paypal.com/nvp';
			$this->checkout_url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
		}

	}

	public function fields() 
	{

		$settings = get_leaky_paywall_settings();
		
		if ( $settings['enable_paypal_on_registration'] != 'on' ) {
			return;
		}

		$level_id = esc_html( $_GET['level_id'] );
		$level = get_leaky_paywall_subscription_level( $level_id );

		if ( $level['price'] == 0 ) {
			return;
		}

		ob_start(); ?>

		<div class="leaky-paywall-payment-method-container">
			<input id="payment_method_paypal" class="input-radio" name="payment_method" value="paypal_standard" checked="checked" data-order_button_text="Subscribe with PayPal" type="radio">

			<label for="payment_method_paypal"> Paypal <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="PayPal Logo"></label>
		</div>
		
		<script>
			jQuery(document).ready(function($) {

				var method = $('#leaky-paywall-payment-form').find('input[name="payment_method"]:checked').val();
				var button = $('#leaky-paywall-submit');

				if ( method == 'paypal_standard' ) {
					$('.leaky-paywall-card-details').slideUp();
					button.text('Subscribe with Paypal');
				}

				$('#leaky-paywall-payment-form input[name="payment_method"]').change(function() {

					var method = $('#leaky-paywall-payment-form').find('input[name="payment_method"]:checked').val();

					if ( method == 'paypal_standard' ) {
						$('.leaky-paywall-card-details').slideUp();
						button.text('Subscribe with Paypal');
					} else {
						$('.leaky-paywall-card-details').slideDown();
						button.text('Subscribe');
					}

				});

				$('#leaky-paywall-payment-form').on('submit', function(e) {

					var method = $('#leaky-paywall-payment-form').find('input[name="payment_method"]:checked').val();

					if ( method == 'paypal_standard' ) {
						// alert('save data and send to paypal');
						// e.preventDefault();
					}

				});


			});

		</script>
		<?php 
		return ob_get_clean();	
	}

	public function scripts() 
	{
		?>
		<!-- <script src="https://www.paypalobjects.com/api/checkout.js" data-version-4></script> -->
		<?php 
	}

	/**
	 * Process registration
	 *
	 * @since 4.0.0
	 */
	public function process_signup() {

		// echo '<pre>';
		// print_r( $_POST );
		// echo '</pre>';

		// for recurring, cmb = _xclick-subscriptions

		// https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/

		$settings = get_leaky_paywall_settings();
		$paypal_sandbox = 'off' === $settings['test_mode'] ? '' : 'sandbox';

		$paypal_args = http_build_query( $this->get_paypal_args(), '', '&' );

		if ( $paypal_sandbox ) {
			$url = 'https://www.sandbox.paypal.com/cgi-bin/webscr?test_ipn=1&' . $paypal_args;
		} else {
			$url = 'https://www.paypal.com/cgi-bin/webscr?' . $paypal_args;
		}

		wp_redirect( $url );

		exit;

		// send data to paypal

	}

	// documentation: https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/
	protected function get_paypal_args() {

		$settings = get_leaky_paywall_settings();
		$mode = 'off' === $settings['test_mode'] ? 'live' : 'test';
		$paypal_sandbox = 'off' === $settings['test_mode'] ? '' : 'sandbox';
		$paypal_account = 'on' === $settings['test_mode'] ? $settings['paypal_sand_email'] : $settings['paypal_live_email'];
		$currency = $settings['leaky_paywall_currency'];
		$current_user = wp_get_current_user();

		$level = get_leaky_paywall_subscription_level( $this->level_id );
		
		$args = array(
			'cmd' => '_xclick',
			'business'      => $paypal_account,
			'no_note'       => 1,
			'currency_code' => $currency,
			'charset'       => 'utf-8',
			'rm'            => 2,
			'upload'        => 1,
			'return'        => esc_url_raw( add_query_arg( 'leaky-paywall-confirm', 'paypal_standard', get_page_link( $settings['page_for_after_subscribe'] ) ) ),
			'cancel_return' => esc_url_raw( add_query_arg( 'leaky-paywall-paypal-standard-cancel-return', '1', get_page_link( $settings['page_for_profile'] ) ) ),
			'page_style'    => 'paypal',
			'image_url'     => esc_url_raw( $settings['paypal_image_url'] ),
			'paymentaction' => 'sale',
			'bn'            => 'LeakyPaywall_AddToCart_WPS_US',
			'invoice'       => 'LP-' . $this->level_id . '-' . wp_rand(99, 999),
			'custom'        => $this->email,
			'notify_url'    => esc_url_raw( add_query_arg( 'listener', 'IPN', get_site_url() . '/' ) ),
			'first_name'    => $this->first_name,
			'last_name'     => $this->last_name,
			'email'         => $this->email,
			'amount' => $this->amount,
			'quantity'	=> 1,
			'item_name'	=> $this->level_name,
			'item_number'	=> $this->level_id,
			'custom'	=> $this->email,
			'no_shipping'	=> 1
		);

		if ( !empty( $level['recurring'] ) && 'on' === $level['recurring'] ) {
			unset($args['amount']);
			$args['src'] = 1;
			$args['a3'] = $this->amount;
			$args['p3'] = $level['interval_count'];
			$args['t3'] = strtoupper( substr( $level['interval'], 0, 1 ) );
			$args['item_name'] = $this->level_name;
			$args['cmd'] = '_xclick-subscriptions';
			$args['bn']	= 'LeakyPaywall_Subscribe_WPS_US';
		
		}

		leaky_paywall_log( $args, 'paypal standard args');

		return $args;

	}

	/**
	 * Process registration and payment confirmation after returning from PayPal
	 *
	 * @since 4.0.0
	 */
	public function process_confirmation() {

		if ( empty( $_GET['leaky-paywall-confirm'] ) && $_GET['leaky-paywall-confirm'] != 'paypal_standard' ) {
			return false;
		}

		leaky_paywall_log( $_REQUEST, 'paypal standard confirm data');
		
		$settings = get_leaky_paywall_settings();
		$mode = 'off' === $settings['test_mode'] ? 'live' : 'test';
							
		if ( !empty( $_REQUEST['tx'] ) ) //if PDT is enabled
			$transaction_id = $_REQUEST['tx'];
		else if ( !empty( $_REQUEST['txn_id'] ) ) //if PDT is not enabled
			$transaction_id = $_REQUEST['txn_id'];
		else
			$transaction_id = NULL;
			
		if ( !empty( $_REQUEST['cm'] ) )
			$user_email = $_REQUEST['cm'];
		else
			$user_email = NULL;

		if ( !empty( $_REQUEST['amt'] ) ) //if PDT is enabled
			$transaction_amount = $_REQUEST['amt'];
		else if ( !empty( $_REQUEST['mc_gross'] ) ) //if PDT is not enabled
			$transaction_amount = $_REQUEST['mc_gross'];
		else
			$transaction_amount = NULL;

		if ( !empty( $_REQUEST['st'] ) ) //if PDT is enabled
			$transaction_status = $_REQUEST['st'];
		else if ( !empty( $_REQUEST['payment_status'] ) ) //if PDT is not enabled
			$transaction_status = $_REQUEST['payment_status'];
		else
			$transaction_status = NULL;
					
		if ( !empty( $transaction_id ) && !empty( $transaction_amount ) && !empty( $transaction_status ) ) {

			try {

				$customer_id = $transaction_id; //temporary, will be replaced with subscriber ID during IPN

				switch( strtolower( $transaction_status ) ) {
					
					case 'denied' :
						throw new Exception( __( 'Error: PayPal denied this payment.', 'issuem-leaky-paywall' ) );
						break;
					case 'failed' :
						throw new Exception( __( 'Error: Payment failed.', 'issuem-leaky-paywall' ) );
						break;
					case 'completed':
					case 'success':
					case 'canceled_reversal':
					case 'processed' :
					default:
						$args['payment_status'] = 'active';
						break;
					
				}
				
				$paypal_api_url       = ( 'test' === $mode ) ? PAYPAL_NVP_API_SANDBOX_URL : PAYPAL_NVP_API_LIVE_URL;
				$paypal_api_username  = ( 'test' === $mode ) ? $settings['paypal_sand_api_username'] : $settings['paypal_live_api_username'];
				$paypal_api_password  = ( 'test' === $mode ) ? $settings['paypal_sand_api_password'] : $settings['paypal_live_api_password'];
				$paypal_api_signature = ( 'test' === $mode ) ? $settings['paypal_sand_api_secret'] : $settings['paypal_live_api_secret'];
				
				$request = array(
					'USER'          => trim( $paypal_api_username ),
					'PWD'           => trim( $paypal_api_password ),
					'SIGNATURE'     => trim( $paypal_api_signature ),
					'VERSION'       => '96.0', //The PayPal API version
					'METHOD'        => 'GetTransactionDetails',
					'TRANSACTIONID' => $transaction_id,
				);
					
				$response = wp_remote_post( $paypal_api_url, array( 'body' => $request, 'httpversion' => '1.1' ) );

				if ( !is_wp_error( $response ) ) {
				
					$array = array();
					parse_str( wp_remote_retrieve_body( $response ), $response_array );
					
					$transaction_status = $response_array['PAYMENTSTATUS'];
					$level = get_leaky_paywall_subscription_level( $response_array['L_NUMBER0'] );
							
					if ( !is_email( $user_email ) ) {
						$user_email = $response_array['EMAIL'];
					}
						
					if ( $transaction_id != $response_array['TRANSACTIONID'] )
						throw new Exception( __( 'Error: Transaction IDs do not match! %s, %s', 'issuem-leaky-paywall' ) );
					
					if ( number_format( $response_array['AMT'], '2', '', '' ) != number_format( $level['price'], '2', '', '' ) )
						throw new Exception( sprintf( __( 'Error: Amount charged is not the same as the subscription total! %s | %s', 'issuem-leaky-paywall' ), $response_array['AMT'], $level['price'] ) );

					$args = array(
						'level_id' 			=> $response_array['L_NUMBER0'],
						'subscriber_id' 	=> $customer_id,
						'subscriber_email' 	=> $user_email,
						'price' 			=> $level['price'],
						'description' 		=> $level['label'],
						'payment_gateway' 	=> 'paypal_standard',
						'payment_status' 	=> 'active',
						'interval' 			=> $level['interval'],
						'interval_count' 	=> $level['interval_count'],
						'site' 				=> !empty( $level['site'] ) ? $level['site'] : '',
					);
					
					//Mimic PayPal's Plan...
					if ( !empty( $level['recurring'] ) && 'on' == $level['recurring'] )
						$args['plan'] = $level['interval_count'] . ' ' . strtoupper( substr( $level['interval'], 0, 1 ) );
								
					if ( is_user_logged_in() || $user = get_user_by( 'email', $user_email ) ) {
						$user_id = leaky_paywall_update_subscriber( NULL, $user_email, $customer_id, $args ); //if the email already exists, we want to update the subscriber, not create a new one
					} else {
						$user_id = leaky_paywall_new_subscriber( NULL, $user_email, $customer_id, $args );
					}

					do_action( 'leaky_paywall_paypal_signup', $user_id );

					wp_set_current_user( $user_id );
					wp_set_auth_cookie( $user_id, true );
					
				} else {
					
					throw new Exception( $response->get_error_message() );
					
				}

				do_action( 'leaky_paywall_paypal_confirm_before_redirect', $user_id );
					
				// send the newly created user to the appropriate page after logging them in
	        	if ( !empty( $settings['page_for_after_subscribe'] ) ) {
	                wp_safe_redirect( get_page_link( $settings['page_for_after_subscribe'] ) );
	        	} else if ( !empty( $settings['page_for_profile'] ) ) {
					wp_safe_redirect( get_page_link( $settings['page_for_profile'] ) );
				} else if ( !empty( $settings['page_for_subscription'] ) ) {
					wp_safe_redirect( get_page_link( $settings['page_for_subscription'] ) );
				}

				exit;
					
			}
			catch ( Exception $e ) {
				
				return new WP_Error( 'broke', sprintf( __( 'Error processing request: %s', 'issuem-leaky-paywall' ), $e->getMessage() ) );

			}
			
		}				

		return false;
				

	}


	/**
	 * Process PayPal IPN. This is also where Paypal Subscribe buttons are processed.
	 * 
	 * @since 4.0.0
	 */
	public function process_webhooks() {

		// this listener won't get set if the user cancel's their account in paypal...
		// if( ! isset( $_GET['listener'] ) || strtoupper( $_GET['listener'] ) != 'IPN' ) {
		// 	return;
		// }

		// so we are using this instead
		if ( ! isset( $_POST['txn_type'] ) ) {
			return;
		}

		leaky_paywall_log( $_POST, 'paypal standard ipn');
		
		$site = '';
		$settings = get_leaky_paywall_settings();
		$mode = 'off' === $settings['test_mode'] ? 'live' : 'test';
	    $payload['cmd'] = '_notify-validate';

	    foreach( $_POST as $key => $value ) {
		    $payload[$key] = stripslashes( $value );
	    }

		$paypal_api_url = !empty( $_REQUEST['test_ipn'] ) ? PAYPAL_PAYMENT_SANDBOX_URL : PAYPAL_PAYMENT_LIVE_URL;
		$response = wp_remote_post( $paypal_api_url, array( 'body' => $payload, 'httpversion' => '1.1' ) );
		$body = wp_remote_retrieve_body( $response );
		
		if ( 'VERIFIED' === $body ) {
		
			if ( !empty( $_REQUEST['txn_type'] ) ) {
			    
				$args= array(
					'level_id' 		=> $_REQUEST['item_number'], //should be universal for all PayPal IPNs we're capturing
					'description' 		=> $_REQUEST['item_name'], //should be universal for all PayPal IPNs we're capturing
					'payment_gateway' 	=> 'paypal_standard',
				);

				$level = get_leaky_paywall_subscription_level( $args['level_id'] );
				$args['interval'] = $level['interval'];
				$args['interval_count'] = $level['interval_count'];
				
				if ( is_multisite_premium() && !empty( $level['site'] ) && !is_main_site( $level['site'] ) ) {
					$site = '_' . $level['site'];
				} else {
					$site = '';
				}

				switch( $_REQUEST['txn_type'] ) {
												
					case 'web_accept':
						if ( isset( $_REQUEST['mc_gross'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['mc_gross'];
						} else if ( isset( $_REQUEST['payment_gross'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['payment_gross'];
						}
						
						if ( isset( $_REQUEST['txn_id'] ) ) { //subscr_payment
							$args['subscr_id'] = $_REQUEST['txn_id'];
						}
						
						$args['plan'] = '';
						
						if ( 'completed' === strtolower( $_REQUEST['payment_status'] ) ) {
							$args['payment_status'] = 'active';
						} else {
							$args['payment_status'] = 'deactivated';
						}
						break;
						
					case 'subscr_signup':
						if ( isset( $_REQUEST['mc_amount3'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['mc_amount3'];
						} else if ( isset( $_REQUEST['amount3'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['amount3'];
						}
						
						if ( isset( $_REQUEST['subscr_id'] ) ) { //subscr_payment
							$args['subscr_id'] = $_REQUEST['subscr_id'];
						}
						
						if ( isset( $_REQUEST['period3'] ) ) {
							$args['plan'] = $_REQUEST['period3'];
							$new_expiration = date_i18n( 'Y-m-d 23:59:59', strtotime( '+' . str_replace( array( 'D', 'W', 'M', 'Y' ), array( 'Days', 'Weeks', 'Months', 'Years' ), $args['plan'] ), strtotime( $_REQUEST['subscr_date'] ) ) );
							$args['expires'] = $new_expiration;
						}
						
						$args['payment_status'] = 'active';	//It's a signup, of course it's active!
						break;
						
					case 'subscr_payment':
						if ( isset( $_REQUEST['mc_gross'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['mc_gross'];
						} else if ( isset( $_REQUEST['payment_gross'] ) ) { //subscr_payment
							$args['price'] = $_REQUEST['payment_gross'];
						}
						
						if ( !empty( $_REQUEST['subscr_id'] ) ) { //subscr_payment
							$args['subscr_id'] = $_REQUEST['subscr_id'];
						}
						
						if ( 'completed' === strtolower( $_REQUEST['payment_status'] ) ) {
							$args['payment_status'] = 'active';
						} else {
							$args['payment_status'] = 'deactivated';
						}

						$user = get_leaky_paywall_subscriber_by_subscriber_id( $args['subscr_id'], $mode );
						
						if ( is_multisite_premium() ) {
							if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['subscr_id'] ) ) {
								$site = '_' . $site_id;
							}
						}
						
						if ( !empty( $user ) && 0 !== $user->ID 
							&& ( $plan = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_plan' . $site, true ) )
							&& 'completed' === strtolower( $_REQUEST['payment_status'] ) ) {
							$args['plan'] = $plan;
							$new_expiration = date_i18n( 'Y-m-d 23:59:59', strtotime( '+' . str_replace( array( 'D', 'W', 'M', 'Y' ), array( 'Days', 'Weeks', 'Months', 'Years' ), $plan ), strtotime( $_REQUEST['payment_date'] ) ) );
							$args['expires'] = $new_expiration;
						} else {
							$args['plan'] = $level['interval_count'] . ' ' . strtoupper( substr( $level['interval'], 0, 1 ) );
							$new_expiration = date_i18n( 'Y-m-d 23:59:59', strtotime( '+' . str_replace( array( 'D', 'W', 'M', 'Y' ), array( 'Days', 'Weeks', 'Months', 'Years' ), $args['plan'] ), strtotime( $_REQUEST['payment_date'] ) ) );
							$args['expires'] = $new_expiration;
						}
						break;
						
					case 'subscr_cancel':
						if ( isset( $_REQUEST['subscr_id'] ) ) { //subscr_payment
							$user = get_leaky_paywall_subscriber_by_subscriber_id( $_REQUEST['subscr_id'], $mode );
							if ( is_multisite_premium() ) {
								if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['subscr_id'] ) ) {
									$site = '_' . $site_id;
								}
							}
							if ( !empty( $user ) && 0 !== $user->ID ) {
								update_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, 'canceled' );

								do_action('leaky_paywall_cancelled_subscriber', $user, 'paypal' );
							}
						}
						return true; //We don't need to process anymore
						
					case 'subscr_eot':
						if ( isset( $_REQUEST['subscr_id'] ) ) { //subscr_payment
							$user = get_leaky_paywall_subscriber_by_subscriber_id( $_REQUEST['subscr_id'], $mode );
							if ( is_multisite_premium() ) {
								if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['subscr_id'] ) ) {
									$site = '_' . $site_id;
								}
							}
							if ( !empty( $user ) && 0 !== $user->ID ) {
								update_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, 'expired' );
							}
						}
						return true; //We don't need to process anymore
						
					case 'recurring_payment_suspended_due_to_max_failed_payment':
						if ( isset( $_REQUEST['recurring_payment_id'] ) ) { //subscr_payment
							$user = get_leaky_paywall_subscriber_by_subscriber_id( $args['recurring_payment_id'], $mode );
							if ( is_multisite_premium() ) {
								if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['recurring_payment_id'] ) ) {
									$site = '_' . $site_id;
								}
							}
							if ( !empty( $user ) && 0 !== $user->ID ) {
								update_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, 'deactivated' );
								do_action( 'leaky_paywall_failed_payment', $user );
							}
						} 
						return true; //We don't need to process anymore
						
					case 'recurring_payment_suspended':
						if ( isset( $_REQUEST['subscr_id'] ) ) { //subscr_payment
							$user = get_leaky_paywall_subscriber_by_subscriber_id( $_REQUEST['subscr_id'], $mode );
							if ( is_multisite_premium() ) {
								if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['subscr_id'] ) ) {
									$site = '_' . $site_id;
								}
							}
							if ( !empty( $user ) && 0 !== $user->ID ) {
								update_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, 'suspended' );
							}
						} else if ( isset( $_REQUEST['recurring_payment_id'] ) ) { //subscr_payment
							$user = get_leaky_paywall_subscriber_by_subscriber_id( $args['recurring_payment_id'], $mode );
							if ( is_multisite_premium() ) {
								if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['recurring_payment_id'] ) ) {
									$site = '_' . $site_id;
								}
							}
							if ( !empty( $user ) && 0 !== $user->ID ) {
								update_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, 'suspended' );
							}
						} 
						return true; //We don't need to process anymore
				}
			
				if ( !empty( $_REQUEST['custom'] ) && is_email( $_REQUEST['custom'] ) ) {
					$user = get_user_by( 'email', $_REQUEST['custom'] );
					if ( empty( $user ) ) {
						$user = get_leaky_paywall_subscriber_by_subscriber_email( $_REQUEST['custom'], $mode );
						if ( is_multisite_premium() ) {
							if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_email( $_REQUEST['custom'] ) ) {
								$args['site'] = $site_id;
							}
						}
					}
				}
					
				if ( empty( $user ) && !empty( $_REQUEST['payer_email'] ) && is_email( $_REQUEST['payer_email'] ) ) {
					$user = get_user_by( 'email', $_REQUEST['payer_email'] );
					if ( empty( $user ) ) {
						$user = get_leaky_paywall_subscriber_by_subscriber_email( $_REQUEST['payer_email'], $mode );
						if ( is_multisite_premium() ) {
							if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_email( $_REQUEST['payer_email'] ) ) {
								$args['site'] = $site_id;
							}
						}
					}
				}
					
				if ( empty( $user ) && !empty( $_REQUEST['txn_id'] ) ) {
					$user = get_leaky_paywall_subscriber_by_subscriber_id( $_REQUEST['txn_id'], $mode );
					if ( is_multisite_premium() ) {
						if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['txn_id'] ) ) {
							$args['site'] = $site_id;
						}
					}
				}
					
				if ( empty( $user ) && !empty( $_REQUEST['subscr_id'] ) ) {
					$user = get_leaky_paywall_subscriber_by_subscriber_id( $_REQUEST['subscr_id'], $mode );
					if ( is_multisite_premium() ) {
						if ( $site_id = get_leaky_paywall_subscribers_site_id_by_subscriber_id( $_REQUEST['subscr_id'] ) ) {
							$args['site'] = $site_id;
						}
					}
				}
				
				if ( !empty( $user ) ) {
					//WordPress user exists
					$args['subscriber_email'] = $user->user_email;
					$user_id = leaky_paywall_update_subscriber( NULL, $args['subscriber_email'], $args['subscr_id'], $args );
				} else {
					//Need to create a new user
					$args['subscriber_email'] = is_email( $_REQUEST['custom'] ) ? $_REQUEST['custom'] : $_REQUEST['payer_email'];
					$user_id = leaky_paywall_new_subscriber( NULL, $args['subscriber_email'], $args['subscr_id'], $args );

				}

				leaky_paywall_log( $args, 'after paypal standard ipn');

				do_action( 'leaky_paywall_after_process_paypal_webhooks', $_REQUEST, $args, $user_id );
				
			}
		
		} else {
			
			error_log( sprintf( __( 'Invalid IPN sent from PayPal: %s', 'issuem-leaky-paywall' ), maybe_serialize( $payload ) ) );

		}
		
		return true;
		
	}

}
