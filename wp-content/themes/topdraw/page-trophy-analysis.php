<?php
/* Template Name: Trophy Analysis */
get_header();
setup_postdata($post);

$parent_title = get_the_title($post->post_parent);

?>

<section class="internal_hero">
	<img src="<?php bloginfo('template_directory'); ?>/assets/img/colorado.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php echo $parent_title; ?></h1>
			<h2><?php the_title(); ?></h2>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<div class="top_info">
			<h1><?php echo $parent_title; ?> - <?php the_title(); ?></h1>
			<?php include 'inc/colorado_explanation.php'; ?>
		</div>
		<?php include 'inc/analysis_type.php'; ?>
		<div class="sector species trophy cf">
			<div class="navvy species cf">
				<h4>Species</h4>
				<div class="button_group cf">
					<ul class="animal_chooser">
						<li class="current"><a href="#elk">Elk</a></li>
						<li><a href="#mule-deer">Mule Deer</a></li>
						<li><a href="#pronghorn">Pronghorn</a></li>
						<li><a href="#rocky-mountain-bighorn">Rocky Mountain Bighorn</a></li>
						<li><a href="#desert-bighorn">Desert Bighorn</a></li>
						<li><a href="#rocky-mountain-goat">Rocky Mountain Goat</a></li>
						<li><a href="#moose">Moose</a></li>
					</ul>
				</div>
			</div>
			<div class="tabscontent species_information cf">
				<?php include 'inc/elk.php'; ?>
				<?php include 'inc/mule_deer.php'; ?>
				<?php include 'inc/pronghorn.php'; ?>
				<?php include 'inc/rocky_mountain_bighorn.php'; ?>
				<?php include 'inc/desert_bighorn.php'; ?>
				<?php include 'inc/rocky_mountain_goat.php'; ?>
				<?php include 'inc/moose.php'; ?>
			</div>
		</div>
		<div class="tabscontent species_chart cf">
			<?php include 'inc/elk_trophy_chart.php'; ?>
			<?php include 'inc/mule_deer_trophy_chart.php'; ?>
			<?php include 'inc/pronghorn_trophy_chart.php'; ?>
			<?php include 'inc/rocky_mountain_bighorn_trophy_chart.php'; ?>
			<?php include 'inc/desert_bighorn_trophy_chart.php'; ?>
			<?php include 'inc/rocky_mountain_goat_trophy_chart.php'; ?>
			<?php include 'inc/moose_trophy_chart.php'; ?>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>