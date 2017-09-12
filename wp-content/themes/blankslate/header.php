<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />

  <!-- <script src="/min/?g=js"></script>
  <link rel='stylesheet' href='/min/?g=css' /> -->

	<?php wp_head(); ?>

	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/vendors.js" type="text/javascript"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/custom.js" type="text/javascript"></script>

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