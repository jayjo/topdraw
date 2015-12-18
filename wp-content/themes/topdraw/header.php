<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
	  <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-71424112-1', 'auto');
	  ga('send', 'pageview');
	  </script>

    <link href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

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
        <a href="#sign-up" class="button med solid blue join">Join Now</a>
      </nav>
      <nav class="nav">
      	<a href="<?php echo get_permalink(2); ?>" class="logo"><?php include 'inc/logo.php'; ?></a>
        <ul>
          <li><a href="<?php echo get_permalink(7); ?>">What We Do</a></li>
          <li><a href="<?php echo get_permalink(9); ?>">Who We Are</a></li>
        </ul>
      </nav>
    </div>
   </header>