<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<!-- <script src="<?php echo get_template_directory_uri(); ?>/js/tracking.js" type="text/javascript"></script> -->

    <link href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
		<meta name="description" content="<?php bloginfo('description'); ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <script src="/min/?g=js"></script>
    <link rel='stylesheet' href='/min/?g=css' />

		<?php wp_head(); ?>
		<script>
      // conditionizr.com
      // configure environment tests
      conditionizr.config({
          assets: '<?php echo get_template_directory_uri(); ?>',
          tests: {}
      });
    </script>

	  <!--[if lt IE 7]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

  </head>
  <body <?php body_class(); ?>>
   <header>
    <div class="wrapper">
      <nav class="loggroup">
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
          if(in_array('ms-member', $loggedIn)) { ?>
          <ul><li><a href="https://topdrawconsulting.com/wp-login.php?action=logout&_wpnonce=c4c5e15504" class="headerLogout">Logout</a></li></ul>
          <?php } else { ?>
          <ul>
            <li><a href="<?php echo home_url('/register/?step=register&do-login=1/'); ?>" class="mainlogin">Login</a></li>
            <li class="right"><a href="<?php echo get_permalink(get_page_by_path('register')); ?>" class="button med solid blue join">Join Now</a></li>
          </ul>
        <?php } ?>
      </nav>
      <div class="hamburger"></div>
    </div>
   </header>