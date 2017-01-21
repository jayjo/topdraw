<?php
  $loggedIn = get_body_class();
  if(in_array('ms-member', $loggedIn)) {

  } else { ?>

<section class="third form">
	<div class="wrapper">
		<div class="content" id="sign-up">
			<h1>Want even more information?</h1>
			<p>Sign up today and get access to 2016's Trophy and Unit Analysis for all the Rocky Mountain states. What are you waiting for?!</p>
			<a href="https://topdrawconsulting.com/register/" class="button large red solid">Sign up!</a>
			<p class="email-us">Or email us at <a href="mailto:info@topdrawconsulting.com">info@topdrawconsulting.com</a></p>
		</div>
	</div>
</section>

<?php } ?>