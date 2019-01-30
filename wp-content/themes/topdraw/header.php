<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
	<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/style.css" />

  <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicons/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <meta property="og:locale" content="en_US"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="Top Draw Consulting - Hunt the Rockies." />

	<?php wp_head(); ?>

	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/vendors.js" type="text/javascript"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/custom.js" type="text/javascript"></script>

  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/5bfa4b2b0590b80d7aea5b561/68a59b57fdc40c201204c29ae.js");</script>

  <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
  <script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us7.list-manage.com","uuid":"5bfa4b2b0590b80d7aea5b561","lid":"b442ebcec9","uniqueMethods":true}) })</script>

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
          <ul class="login-stuff">
            <li><a href="<?php echo home_url('/profile'); ?>">Profile</a></li>
            <li><a href="<?php echo wp_logout_url( get_permalink() ); ?>" class="headerLogout">Logout</a></li>
          </ul>
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