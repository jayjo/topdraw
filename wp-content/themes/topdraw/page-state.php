<?php
/* Template Name: State */
get_header();
setup_postdata($post);
?>

<section class="internal_hero">
	<img src="<?php bloginfo('template_directory'); ?>/assets/img/colorado.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php the_title(); ?></h1>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<!-- <div class="top_info">
			<h1><?php the_title(); ?></h1>
			<p><?php the_content(); ?></p>
		</div> -->
		<div class="analysis_type">
			<ul class="type">
				<li><a href="#">Unit Analysis</a></li>
				<li><a href="#">Trophy Analysis</a></li>
				<li><a href="#">Rules & Regulations</a></li>
			</ul>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>