<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />

	<?php wp_head(); ?>

	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/vendors.min.js" type="text/javascript"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/custom.min.js" type="text/javascript"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/tracking.js" type="text/javascript"></script>

</head>
<body <?php body_class(); ?>>

	<header>
    <div class="wrapper">
      <nav class="logo-group">
        <a href="<?php echo get_permalink(2); ?>" class="logo"><?php include 'inc/logo.php'; ?></a>
      </nav>
      <nav class="nav">
        <?php
          wp_nav_menu(array(
            'theme_location' => 'header-menu'
          ));
        ?>
        <?php
          $loggedIn = get_body_class();
          if(in_array('logged-in', $loggedIn)) { ?>
          <ul class="login-stuff"><li><a href="<?php echo wp_logout_url( get_permalink() ); ?>" class="headerLogout">Logout</a></li></ul>
          <?php } else { ?>
          <ul class="login-stuff">
            <li><a href="<?php echo home_url('/login'); ?>" class="main-login">Login</a></li>
            <li class="right"><a href="<?php echo home_url('/subscription'); ?>" class="button med solid red join signup-button" attr="Header">Join Now</a></li>
          </ul>
        <?php } ?>
      </nav>
      <div class="hamburger"></div>
    </div>
   </header>