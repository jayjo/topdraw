<?php
/* Template Name: Deadlines */
get_header();
setup_postdata($post);

?>

<!-- IF LOGGED IN -->

<?php
  $loggedIn = get_body_class();
  if(in_array('logged-in', $loggedIn)) { ?>

<section class="chart cf">
	<div class="wrapper">
		<div class="top-info cf">
			<h1 class="centery"><?php the_title(); ?></h1>
		</div>
	</div>
</section>

<div class="tabscontent deadline-chart cf">
	<?php the_content(); ?>
</div>

<!-- IF LOGGED OUT -->

<?php } else { ?>

<section class="logged-out">
	<div class="wrapper">
		<h1><?php the_title(); ?></h1>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php } ?>

<?php get_footer(); ?>