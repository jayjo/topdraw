<?php

/*************************** LOAD THE BASE CLASS *******************************
 *******************************************************************************
 * The WP_List_Table class isn't automatically available to plugins, so we need
 * to check if it's available and load it if necessary.
 */
if( !class_exists( 'WP_List_Table' ) )
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );

class Leaky_Paywall_Subscriber_List_Table extends WP_List_Table {
	
	function ajax_user_can() {
		return current_user_can( 'manage_network_users' );
	}
	
	function prepare_items() {
		global $usersearch, $wpdb;
	
		/**
		 * REQUIRED. Now we need to define our column headers. This includes a complete
		 * array of columns to be displayed (slugs & titles), a list of columns
		 * to keep hidden, and a list of columns that are sortable. Each of these
		 * can be defined in another method (as we've done here) before being
		 * used to build the value for our _column_headers property.
		 */
		$columns = $this->get_columns();
		$hidden = array();
		$sortable = $this->get_sortable_columns();
	   
		/**
		 * REQUIRED. Finally, we build an array to be used by the class for column
		 * headers. The $this->_column_headers property takes an array which contains
		 * 3 other arrays. One for all columns, one for hidden columns, and one
		 * for sortable columns.
		 */
		$this->_column_headers = array($columns, $hidden, $sortable);

		$usersearch = isset( $_REQUEST['s'] ) ? $_REQUEST['s'] : '';

		$users_per_page = $this->get_items_per_page( 'users_network_per_page' );

		$paged = $this->get_pagenum();

		$args = array(
			'number' => $users_per_page,
			'offset' => ( $paged-1 ) * $users_per_page,
			'search' => $usersearch,
		);

		// If a search is not being performed, show only the latest users with no paging in order
		// to avoid expensive count queries.
		if ( !$usersearch ) {
			if ( !isset( $_REQUEST['orderby'] ) ) {
				$_GET['orderby'] = $_REQUEST['orderby'] = 'ID';
			}
			if ( !isset( $_REQUEST['order'] ) ) {
				$_GET['order'] = $_REQUEST['order'] = 'DESC';
			}
			$args['count_total'] = false;
		}

		if ( !empty( $_REQUEST['orderby'] ) ) {
			$args['orderby'] = $_REQUEST['orderby'];
		}

		if ( !empty( $_REQUEST['order'] ) )
			$args['order'] = $_REQUEST['order'];

		// Query the user IDs for this page
		global $blog_id;
		$results = leaky_paywall_subscriber_query( $args, $blog_id );

		$settings = get_leaky_paywall_settings();

		if ( is_multisite_premium() && is_main_site( $blog_id ) ) {
			$results = array_merge( $results, leaky_paywall_subscriber_query( $args, false ) );
		}
		
		$this->items = $results;
		
		$args['number'] = 0;
		$this->set_pagination_args( array(
			'total_items' => count( leaky_paywall_subscriber_query( $args ) ),
			'per_page' => $users_per_page,
		) );
	}

	function no_items() {
		_e( 'No Leaky Paywall subscribers found.' );
	}

	function get_columns() {
		$users_columns = array(
			'wp_user_login' => __( 'WordPress Username', 'leaky-paywall' ),
			'email'         => __( 'E-mail', 'leaky-paywall' ),
			'name'         => __( 'Name', 'leaky-paywall' ),
			'level_id' 		=> __( 'Level ID', 'leaky-paywall' ),
			'susbcriber_id' => __( 'Subscriber ID', 'leaky-paywall' ),
			'price'         => __( 'Price', 'leaky-paywall' ),
			'plan'          => __( 'Plan', 'leaky-paywall' ),
			'created'       => __( 'Created', 'leaky-paywall' ),
			'expires'       => __( 'Expires', 'leaky-paywall' ),
			'has_access'    => __( 'Has Access', 'leaky-paywall' ),
			'gateway'       => __( 'Gateway', 'leaky-paywall' ),
			'status'        => __( 'Payment Status', 'leaky-paywall' ),
		);
		$users_columns = apply_filters( 'leaky_paywall_subscribers_columns', $users_columns );

		return $users_columns;
	}

	function get_sortable_columns() {
		$sortable_columns = array(
			'wp_user_login' => array( 'wp_user_login', false ),
			'email'         => array( 'email', false ),
			'level_id' 		=> array( 'level_id', false ),
			'susbcriber_id' => array( 'susbcriber_id', false ),
			'price'         => array( 'price', false ),
			'plan'          => array( 'plan', false ),
			'gateway'       => array( 'payment_gateway', false ),
			'status'        => array( 'payment_status', false ),
		);
		$sortable_columns = apply_filters( 'leaky_paywall_subscribers_sortable_columns', $sortable_columns );

		return $sortable_columns;
	}
	
	function user_views() {
		$user_type = !empty( $_GET['user-type'] ) ? $_GET['user-type'] : 'lpsubs';
	
		echo '<div class="alignleft actions">';
		echo '<label for="user-type-selector" class="screen-reader-text">' . __( 'Select User Type' ) . '</label>';
		echo '<select name="user-type" id="user-type-selector">';
		echo '<option value="lpsubs" ' . selected( 'lpsubs', $user_type, false ) . '>' . __( 'Leaky Paywall Subscribers' ) . '</option>';
		echo '<option value="wpusers" ' . selected( 'wpusers', $user_type, false ) . '>' . __( 'All WordPress Users' ) . '</option>';
		echo '</select>';

		submit_button( __( 'Apply' ), 'primary', false, false );
		echo '</div>';

	}

	public function extra_tablenav( $which ) {

		if ( $which != 'top' ) {
			return;
		}

		$levels = leaky_paywall_get_levels();
		$lev = isset( $_GET['filter-level'] ) ? esc_attr( $_GET['filter-level'] ) : 'all';	
		$stat = isset( $_GET['filter-status'] ) ? esc_attr( $_GET['filter-status'] ) : 'all';	
		?>
		
		<div class="alignleft actions">
			<label for="filter-by-level" class="screen-reader-text">Filter by level</label>
			<select name="filter-level" id="filter-by-level">
				<option value="all" <?php selected( $lev, 'all' ); ?>>All Levels</option>
				<?php 
					foreach( $levels as $key => $level ) {
						echo '<option ' . selected( $key, $lev, false ) . ' value="' . $key . '">' . $level['label'] . '</option>';
					}
				?>
			</select>

			<label for="filter-by-status" class="screen-reader-text">Filter by status</label>
			<select name="filter-status" id="filter-by-status">
				<option value="all" <?php selected( $stat, 'all' ); ?>>All Statuses</option>
				<option value="active" <?php selected( $stat, 'active' ); ?>>Active</option>
				<option value="deactivated" <?php selected( $stat, 'deactivated' ); ?>>Deactivated</option>
				<option value="canceled" <?php selected( $stat, 'canceled' ); ?>>Canceled</option>
			</select>

			<input name="filter_action" id="subscriber-query-submit" class="button" value="Filter" type="submit">
		</div>
		
		<?php 
	}

	function display_rows() {
		global $current_site, $blog_id;
		$settings = get_leaky_paywall_settings();
	
		if ( is_multisite_premium() ) {
			global $blog_id;			
			if ( !is_main_site( $blog_id ) ) {
				$sites = array( '_all', '_' . $blog_id );
			} else {
				$sites = array( '_all', '_' . $blog_id, '' );
			}
		} else {
			// create a generic array so that single site installs will iterate through the sites loop below
			$sites = array( '_all' );
		}

		$alt = '';

		foreach ( $this->items as $user ) {
			$user = get_user_by( 'email', $user->user_email );
			$mode = 'off' === $settings['test_mode'] ? 'live' : 'test';
		
			foreach( $sites as $site ) {

				$alt = ( 'alternate' == $alt ) ? '' : 'alternate';

				if ( is_multisite_premium() ) {
					$payment_gateway = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_gateway' . $site, true );
				} else {
					$payment_gateway = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_gateway', true );
				}
				
				if ( !empty( $_GET['user-type'] ) && 'wpusers' !== $_GET['user-type'] ) {
					if ( empty( $payment_gateway ) ) {
						continue;
					}
				}
				
				?>
				<tr class="<?php echo $alt; ?>">
				<?php
	
				list( $columns, $hidden ) = $this->get_column_info();
	
				foreach ( $columns as $column_name => $column_display_name ) {
					$class = "class='$column_name column-$column_name'";
	
					$style = '';
					if ( in_array( $column_name, $hidden ) )
						$style = ' style="display:none;"';
	
					$attributes = "$class$style";
	
					switch ( $column_name ) {
						case 'wp_user_login':
							echo "<td $attributes>"; ?>
								<strong><?php echo $user->user_login; ?></strong>

								<?php 
								// if the user switching plugin is activated, add switch to link to LP subscriber table for easier testing
								if ( class_exists( 'user_switching' ) ) {
									if ( $link = user_switching::maybe_switch_url( $user ) ) {
										echo '<br><a href="' . esc_url( $link ) . '">' . esc_html__( 'Switch&nbsp;To', 'leaky-paywall' ) . '</a>';
									}
								}
								
								?>
							</td>
						<?php
						break;
						case 'email':
							$edit_link = esc_url( add_query_arg( 'edit', urlencode( $user->user_email ) ) );
							echo "<td $attributes>"; ?>
								<strong><a href="<?php echo $edit_link; ?>" class="edit"><?php echo $user->user_email; ?></a></strong>
							</td>
						<?php
						break;
						
						case 'name':
						
							echo "<td $attributes>"; ?>
								<?php echo $user->first_name; ?> <?php echo $user->last_name; ?>
							</td>
						<?php
						break;
						
						case 'level_id':
							if ( is_multisite_premium() ) {
								$level_id = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_level_id' . $site, true );
							} else {
								$level_id = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_level_id', true );
							}
							
							$level_id = apply_filters( 'get_leaky_paywall_users_level_id', $level_id, $user, $mode, $site );
							$level_id = apply_filters( 'get_leaky_paywall_subscription_level_level_id', $level_id );
							if ( false === $level_id || empty( $settings['levels'][$level_id]['label'] ) ) {
								$level_name = __( 'Undefined', 'issuem-leaky-paywall' );
							} else {
								$level_name = stripcslashes( $settings['levels'][$level_id]['label'] );
							}
								
							echo "<td $attributes>" . $level_name . '</td>';
						break;
						
						case 'susbcriber_id':
							if ( is_multisite_premium() ) {
								echo "<td $attributes>" . get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_subscriber_id' . $site, true ) . '</td>';
							} else {
								echo "<td $attributes>" . get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_subscriber_id', true ) . '</td>';
							}
							
						break;
	
						case 'price':
							if ( is_multisite_premium() ) {
								echo "<td $attributes>" . number_format( (float)get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_price' . $site, true ), '2' ) . '</td>';
							} else {
								echo "<td $attributes>" . number_format( (float)get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_price', true ), '2' ) . '</td>';
							}
							
						break;
	
						case 'plan':
							if ( is_multisite_premium() ) {
								$plan = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_plan' . $site, true );
							} else {
								$plan = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_plan', true );
							}
							
							if ( empty( $plan ) ) {
								$plan = __( 'Non-Recurring', 'issuem-leaky-paywall' );	
							} else if ( 'paypal_standard' === $payment_gateway || 'paypal-standard' === $payment_gateway ) {
								$plan = sprintf( __( 'Recurring every %s', 'issuem-leaky-paywall' ), str_replace( array( 'D', 'W', 'M', 'Y' ), array( 'Days', 'Weeks', 'Months', 'Years' ), $plan ) );
							}
							
							echo "<td $attributes>" . $plan . '</td>';
						break;
	
						case 'created':
							if ( is_multisite_premium() ) {
								$created = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_created' . $site, true );
							} else {
								$created = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_created', true );
							}
							
							$created = apply_filters( 'do_leaky_paywall_profile_shortcode_created_column', $created, $user, $mode, $site, $level_id );
							
							$date_format = get_option( 'date_format' );
							$created = mysql2date( $date_format, $created );
							
							echo "<td $attributes>" . $created . '</td>';
						break;
	
						case 'expires':
							if ( is_multisite_premium() ) {
								$expires = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_expires' . $site, true );
							} else {
								$expires = get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_expires', true );
							}
							
							$expires = apply_filters( 'do_leaky_paywall_profile_shortcode_expiration_column', $expires, $user, $mode, $site, $level_id );
							
							if ( empty( $expires ) || '0000-00-00 00:00:00' === $expires || 'Never' === $expires ) {
								$expires = __( 'Never', 'issuem-leaky-paywall' );
							} else {
								$date_format = get_option( 'date_format' );
								$expires = mysql2date( $date_format, $expires );
							}
							
							echo "<td $attributes>" . $expires . '</td>';
						break;

						case 'has_access':
							$has_access = leaky_paywall_user_has_access( $user );

							if ( $has_access ) {
								echo '<td ' . $attributes . '>Yes</td>';
							} else {
								echo '<td ' . $attributes . '>No</td>';
							}
						break;

						case 'gateway':
							echo "<td $attributes>" . leaky_paywall_translate_payment_gateway_slug_to_name( $payment_gateway ) . '</td>';
						break;
	
						case 'status':
							if ( is_multisite_premium() ) {
								echo "<td $attributes>" . get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status' . $site, true ) . '</td>';
							} else {
								echo "<td $attributes>" . get_user_meta( $user->ID, '_issuem_leaky_paywall_' . $mode . '_payment_status', true ) . '</td>';
							}
							
						break;
	
						default:
							echo "<td $attributes>" . apply_filters( 'manage_leaky_paywall_subscribers_custom_column', '&nbsp;', $column_name, $user->ID ) . '</td>';
						break;
					}
				}
			}
			?>
			</tr>
			<?php
		}
	}
	
}
