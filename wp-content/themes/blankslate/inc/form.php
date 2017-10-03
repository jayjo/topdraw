<?php
  $loggedIn = get_body_class();
  if(in_array('ms-member', $loggedIn)) {

  } else { ?>

<section class="third form">
	<div class="wrapper">
		<div class="content" id="sign-up">
			<h2>Want even more information?</h3>
			<p>Sign up today and get access to <?php echo date('Y'); ?>'s Trophy and Unit Analysis for all the Rocky Mountain states. What are you waiting for?!</p>
			<a href="https://topdrawconsulting.com/register/" class="button large red solid">Sign up!</a>
			<p class="email-us">or email us at <a href="mailto:info@topdrawconsulting.com">info@topdrawconsulting.com</a></p>
		</div>
	</div>
</section>

<?php } ?>