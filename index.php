<?php

$body_class = 'home';
$page_title = 'home';

$jquery_plugins = array(
	'something.js'
	);

include 'inc/header.php';

?>

<section class="hero">
	<div class="hero_image">
		<img src="assets/images/hero.png" alt="" />
	</div>
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger">We Help You Hunt</h1>
			<h2>Let us help plan and book the best hunt of your life.</h2>
		</div>
	</div>
</section>

<section class="first">
	<div class="content">
		<div class="wrapper">
			<h1>What We Do</h1>
			<p>We provide state-by-state research and analysis of the best types of hunts, seasons, and areas to draw tags Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			<a href="state.php" class="button red solid large">Learn More<span class="arrow"><?php include 'inc/arrow.php'; ?></span></a>
		</div>
	</div>
</section>

<section class="second">
	<div class="group top cf">
		<div class="image_container top">
			<img src="assets/images/elk.png" alt="" />
		</div>
		<div class="content one cf">
			<div class="wrapper">
				<div class="info left">
					<h1>Who We Are</h1>
					<p>We provide state-by-state research and analysis of the best types of hunts, seasons, and areas to draw tags Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					<a href="#" class="button red solid large">Learn More<span class="arrow"><?php include 'inc/arrow.php'; ?></span></a>
				</div>
			</div>
		</div>
	</div>
	<div class="group bottom cf">
		<div class="image_container bottom">
			<img src="assets/images/map.png" alt="" />
		</div>
		<div class="content two cf">
			<div class="wrapper">
				<div class="info right">
					<h1>Who We Are</h1>
					<p>We provide state-by-state research and analysis of the best types of hunts, seasons, and areas to draw tags Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					<a href="#" class="button red solid large">Learn More<span class="arrow"><?php include 'inc/arrow.php'; ?></span></a>
				</div>
			</div>
		</div>
	</div>
	<div class="bullseye">
		<img src="assets/images/icon_bullseye.png" alt= "" />
	</div>
</section>

<section class="third">
	<div class="wrapper">
		<div class="content">
			<h2>Receive your free consultation</h2>
			<p>To get started planning your next hunt, use the form below to send us a message! Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
			<form action="" name="homePage" id="homeform">
				<div class="input">
					<label for="Full Name">Full Name</label>
					<input type="text" name="Full Name">
				</div>
				<div class="input">
					<label for="Email Address">Email Address</label>
					<input type="email" name="Email Address">
				</div>
				<input type="submit" class="button med red solid">
			</form>
		</div>
	</div>
</section>

<?php include 'inc/footer.php'; ?>