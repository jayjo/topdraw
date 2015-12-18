<?php
/* Template Name: Who We Are */
get_header();
setup_postdata($post);
?>

<section class="internal_hero">
	<img src="<?php bloginfo('template_directory'); ?>/assets/img/eric_bachofner_ram.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger">Who We Are</h1>
		</div>
	</div>
</section>

<section class="internal_content">
	<div class="wrapper">
		<h1>About Eric Bachofner</h1>
		<div class="col layout cf">
			<div class="two_col left cf">
				<p>Hello everyone, welcome to Top Draw. I’d like to introduce myself to those that don’t know me.  My name is  Eric Bachofner and I founded Top Draw Consulting to help DIY bow hunters like yourself apply for and draw the best hunts available in the Rocky Mountain states. </p>
				<p>Born and raised in northwest Montana, I grew up outdoors, eventually falling hard for chasing bugling elk with a bow.  The more of it I did, the more I realized I couldn’t get enough of it.  So I began applying for hunts as a non-resident in as many western states as I could afford.  Each year, countless hours were spent calculating true draw odds, harvest rates and trophy entries.</p>
				<p>Though difficult at first I began to enjoy the process of compiling and crunching the numbers almost as much as drawing and going on the hunts themselves.  </p>
			</div>
			<div class="two_col right cf">
				<img src="<?php bloginfo('template_directory'); ?>/assets/img/eric_bachofner_elk.png" alt="" class="col_image"/>
			</div>
		</div>
		<div class="col layout cf">
			<div class="two_col left cf">
				<img src="<?php bloginfo('template_directory'); ?>/assets/img/eric_bachofner_goat.png" alt="" class="col_image"/>
			</div>
			<div class="two_col right cf">
				<p>Eventually the work began to pay off and I started pulling the permits I had analyzed during application season.  </p>
				<p>Fast forward a few years later and I had drawn out on all of Montana’s trophy species with a mountain goat permit, eventually harvesting what would be the second biggest billy taken with a bow in Montana.</p>
				<p>Further yet, I had become the only hunter to take a moose, bighorn sheep and mountain goat from my home state that each met the Pope & Young minimum.  This included a 47” moose as well as a Boone & Crockett bighorn.   The point here is not to brag.  Sure some luck is involved in pulling tags like these, but it’s not all luck.  By combining trophy harvest statistics with reasonable true draw odds, it is possible to put more quality archery tags in your pocket.  Put Top Draw to work for you and see the draw results you’ve spent years waiting for!</p>
				<p class="spacer">&nbsp;</p>
				<p class="centery"><a href="<?php echo get_permalink(7); ?>" class="button large solid red">Learn more about what we do</a></p>
			</div>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>