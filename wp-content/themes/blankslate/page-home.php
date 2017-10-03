<?php
/* Template Name: Home */
get_header();
setup_postdata($post);
?>

<section class="hero" style="background-image: url(<?php bloginfo('template_directory'); ?>/assets/img/hero.png)">
	<div class="wrapper">
		<div class="content">
			<h1>Increase your draw odds.</h1>
			<h2>We guarantee it.</h2>
		</div>
	</div>
</section>

<section class="first">
	<div class="wrapper">
		<div class="content">
			<h1>Who we are</h1>
			<p>Welcome to the site.  I’d like to introduce myself to those that don’t know me.  My name is Eric Bachofner and I founded Top Draw Consulting to help DIY bow hunters like yourself apply for and draw the best hunts available in the Rocky Mountain states.</p>
			<a href="<?php echo get_permalink(7); ?>" class="button blue solid large">More about what we do<span class="arrow"><?php include 'inc/arrow.php'; ?></span></a>
		</div>
	</div>
</section>

<section class="second">
	<div class="group top cf">
		<div class="image-container top cf">
			<img src="<?php bloginfo('template_directory'); ?>/assets/img/elk.png" alt="" />
		</div>
		<div class="content one cf">
			<div class="wrapper">
				<div class="info left">
					<h1>What we do</h1>
					<p>Tired of seeing giants killed every year across the west only to find out it was a guided hunt that cost anywhere between five and ten thousand dollars?  Maybe more.  If forking out that kind of money is not an option for you, there is still a way to hunt the same units that produce trophy after trophy every year.  <b>Through the draw!</b>  It may take a few years, but if you start now and stick with it, you too will eventually be hunting the best units in the world, and at only a fraction of the cost of buying landowner or governor tags.</p>
					<a href="<?php echo get_permalink(9); ?>" class="button blue solid large">Read about Eric<span class="arrow"><?php include 'inc/arrow.php'; ?></span></a>
				</div>
			</div>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>