<?php
  $loggedIn = get_body_class();
  if(in_array('logged-in', $loggedIn)) {

  } else { ?>

<section class="third form">
	<div class="wrapper">
		<div class="content" id="sign-up">
			<h2>Want even more information?</h2>
			<p>Sign up today and get access to <?php echo date('Y'); ?>'s Trophy and Unit Analysis for all the Rocky Mountain states. What are you waiting for?!</p>
			<a href="<?php echo home_url('/subscription'); ?>" class="button large red solid">Sign up!</a>
			<p class="email-us">Already a member? <a href="<?php echo home_url('/login'); ?>">Log in here</a></p>
			<p class="email-us bottom">or email us at <a href="mailto:info@topdrawconsulting.com">info@topdrawconsulting.com</a> with questions or if you're having trouble logging in.</p>
		</div>
	</div>
</section>

<?php } ?>