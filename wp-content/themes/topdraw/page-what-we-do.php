<?php
/* Template Name: What We Do */
get_header();
setup_postdata($post);
?>

<section class="internal-hero" style="background-image: url(https://topdrawconsulting.com/wp-content/themes/topdraw/assets/img/adams-sneak.png)" alt="">
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php the_title(); ?></h1>
		</div>
	</div>
</section>

<?php the_content(); ?>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>