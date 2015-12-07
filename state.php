<?php

$body_class = 'nothome chart';
$page_title = 'Colorado';

$jquery_plugins = array(
	'something.js'
	);

include 'inc/header.php';

?>

<section class="internal_hero">
	<img src="assets/images/colorado.png" alt="" class="inside_hero"/>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger">Colorado</h1>
		</div>
	</div>
</section>

<section class="chart">
	<div class="wrapper">
		<div class="top_info">
			<h1>Colorado</h1>
			<p>Good stuff about Colorado that you need to know, for sure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officiis accusamus totam iure neque consequuntur, molestias laboriosam quas quidem quisquam.</p>
		</div>
		<div class="navvy">
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
			<!-- <div class="animal">
				<select name="animal" id="animal" class="animal_selector">
					<option value="elk">Elk</option>
					<option value="moose">Moose</option>
					<option value="sheep">Sheep</option>
					<option value="duck">Duck</option>
					<option value="goat">Goat</option>
				</select>
			</div> -->
		</div>
		<div class="tabscontent">
			<?php include 'inc/elk.php'; ?>
			<?php include 'inc/mule_deer.php'; ?>
			<?php include 'inc/pronghorn.php'; ?>
			<?php include 'inc/rocky_mountain_bighorn.php'; ?>
			<?php include 'inc/desert_bighorn.php'; ?>
		</div>
	</div>
</section>

<?php include 'inc/footer.php'; ?>