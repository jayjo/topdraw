<?php
/* Template Name: Unit Analysis */
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
		<div class="sector species cf">
			<div class="navvy species cf">
				<h4>Species</h4>
				<div class="button_group cf">
					<ul class="animal_chooser">
						<li class="elk current"><a href="#elk">Elk</a></li>
						<li class="mule-deer"><a href="#mule-deer">Mule Deer</a></li>
						<li class="pronghorn"><a href="#pronghorn">Pronghorn</a></li>
						<li class="rocky-mountain-bighorn"><a href="#rocky-mountain-bighorn">Rocky Mountain Bighorn</a></li>
						<li class="desert-bighorn"><a href="#desert-bighorn">Desert Bighorn</a></li>
						<li class="rocky-mountain-goat"><a href="#rocky-mountain-goat">Rocky Mountain Goat</a></li>
						<li class="moose"><a href="#moose">Moose</a></li>
					</ul>
				</div>
			</div>
			<div class="tabscontent species_information cf">
				<div id="elk">
					<h4>Elk</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Elk – Bull or Either Sex</p>
								<p>Elk – Cow</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$619</p>
								<p>$464</p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado runs a preference point system for elk applicants.  We list your true odds of drawing a permit with the minimum number of points required for each hunt as a nonresident.  We list all available archery nonresident hunts in the table below.</p>
				</div>
				<div id="mule-deer">
					<h4>Mule Deer</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Mule Deer</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$374 </p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado runs a preference point system for mule deer applicants.  We list your true odds of drawing a permit with the minimum number of points required for each hunt as a nonresident.  We list all archery nonresident hunts requiring a minimum of one point to draw in the table below.</p>
				</div>
				<div id="pronghorn">
					<h4>Pronghorn</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Pronghorn</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$374 </p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado runs a preference point system for pronghorn applicants.  We list your true odds of drawing a permit with the minimum number of points required for each hunt.  Residents & nonresidents are drawn from the same pool and there is no cap on nonresident permits.  We list all available archery hunts in the table below.</p>
				</div>
				<div id="rocky-mountain-bighorn">
					<h4>Rocky Mountain Bighorn</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Rocky Mountain Bighorn Sheep</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$2064</p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado provides horn measurements for every sheep taken in each unit.  We provide that information in the bighorn sheep Unit Analysis table below.  Most archery hunters just want to fill a tag when it comes to hunting sheep.  If that’s the case for you, look at a unit with a good balance of draw odds and harvest success.  If you want to draw a unit with the best chance at a bigger ram, start by looking at the units with the best bases.  Field judging sheep is a tricky endeavor and the most difficult part of that is judging base mass.  This measurement also happens to be the single most important factor in a higher scoring ram.  Judging horn length will be a little easier with some practice.  If you can pull a unit with good bases and are willing to stick it out and hunt hard, the payoff can be incredible!</p>
					<p>Colorado runs a preference AND bonus point system for bighorn sheep applicants.  You are not eligible to draw a permit until you have accrued 3 preference points.  After doing so, you are eligible in the draw and awarded a bonus point for each year that you are unsuccessful.  We list your true odds of drawing a permit in last year’s draw by tallying up the total number of nonresident’s applicants along with the sum of each applicant’s bonus points.  We list all available nonresident archery only bighorn sheep hunts below.</p>
					<p><b>How many BONUS POINTS do you have for bighorn sheep?</b></p>
				</div>
				<div id="desert-bighorn">
					<h4>Desert Bighorn</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Desert Bighorn Sheep</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$1,379</p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>There is no point system for desert sheep in Colorado as it is runs on a truly random draw.  In other words, a first time applicant has the same draw odds as someone who has been applying for 20 years.  The only hunt available to nonresidents is shown below.  Remember, you may only apply for rocky mountain bighorn OR desert sheep!</p>
				</div>
				<div id="rocky-mountain-goat">
					<h4>Rocky Mountain Goat</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Mountain Goat </p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$2,064 </p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado runs a preference AND bonus point system for mountain goat applicants.  You are not eligible to draw a permit until you have accrued 3 preference points.  After doing so, you are eligible in the draw and awarded a bonus point for each year that you are unsuccessful.  We list your true odds of drawing a permit in last year’s draw by tallying up the total number of nonresident’s applicants along with the sum of each applicant’s bonus points.  Currently, only unit 5 offers an archery only hunt to nonresidents.  Draw odds for this hunt are getting steeper by the year and we recommend taking a look at some of the any weapon hunts offering much better draw odds.  If drawn, you may hunt with archery equipment.   We list the unit 5 archery hunt along with all available nonresident ANY WEAPON mountain goat hunts below.</p>
					<p><b>How many BONUS POINTS do you have for mountain goat?</b></p>
				</div>
				<div id="moose">
					<h4>Moose</h4>
					<div class="app_deadline_info cf">
						<h5>2015 Colorado Application Fees & Deadlines</h5>
						<div class="boxes">
							<div class="animal">
								<p><span>Application: </span>Habitat Stamp (required to apply) </p>
								<p>Moose</p>
							</div>
							<div class="cost">
								<p><span>Cost:</span> $10</p>
								<p>$2,064 </p>
							</div>
							<div class="date">
								<p><span>Deadline:</span> April 7, Midnight</p>
								<p>April 7, Midnight</p>
							</div>
						</div>
					</div>
					<p>Colorado usually offers archery hunters better draw odds than they do to any weapon hunters.  This is not the case for moose, as we are drawn from the same pool as the rifle hunt applicants.  Because of this and a low moose tag allotment, nonresident odds for moose are still very steep.</p>
					<p>Colorado runs a preference AND bonus point system for moose applicants.  You are not eligible to draw a permit until you have accrued 3 preference points.  After doing so, you are eligible in the draw and awarded a bonus point for each year that you are unsuccessful.  We list your true odds of drawing a permit in last year’s draw by tallying up the total number of nonresident’s applicants along with the sum of each applicant’s bonus points.  We list all available nonresident archery only moose hunts below.</p>
					<p><b>How many BONUS POINTS do you have for moose?</b></p>
				</div>
			</div>
		</div>
		<div class="table_toggle calculating">
			<p class="centery">
				<div class="input">
					<label for="calculator">True draw odds</label>
					<input type="text" name="calculator" class="calc" placeholder="Enter bonus points..." value=""/>
				</div>
			</p>
		</div>
		<div class="tabscontent species_chart cf">
			<?php include 'inc/elk_unit_chart.php'; ?>
			<?php include 'inc/mule_deer_unit_chart.php'; ?>
			<?php include 'inc/pronghorn_unit_chart.php'; ?>
			<?php include 'inc/rocky_mountain_bighorn_unit_chart.php'; ?>
			<?php include 'inc/desert_bighorn_unit_chart.php'; ?>
			<?php include 'inc/rocky_mountain_goat_unit_chart.php'; ?>
			<?php include 'inc/moose_unit_chart.php'; ?>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>