<?php
/* Template Name: Membership */
get_header();
setup_postdata($post);
?>

<h1><?php the_title(); ?></h1>

<div class="content">
	<?php the_content(); ?>
</div>

<?php get_footer(); ?>