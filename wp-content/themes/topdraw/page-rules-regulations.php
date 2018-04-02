<?php
/* Template Name: Rules & Regulations */
get_header();
setup_postdata($post);

$parent_id = $post->post_parent;
$parentContent = get_page($parent_id);
$heroImage = get_field('heroImage', $parent_id);

?>

<!-- IF LOGGED IN -->

<?php
  $loggedIn = get_body_class();
  if(in_array('logged-in', $loggedIn)) { ?>

<section class="chart cf">
	<div class="wrapper">
		<div class="top-info cf">
			<div class="content">
				<h1><?php echo get_the_title($parent_id); ?> <span class="separator">/</span> <?php the_title(); ?></h1>
				<div class="intro"><?php echo apply_filters('the_content', $parentContent->post_content); ?></div>
			</div>
			<div class="analysis-type content">
				<h5>More in <?php echo get_the_title($parent_id); ?></h5>
				<?php
				  if($post->post_parent)
				  $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0&sort_order=desc");
				  else
				  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0&sort_order=desc");
				  if ($children) { ?>
				  <ul>
				  	<?php echo $children; ?>
				  </ul>
			  <?php } ?>
			</div>
		</div>
		<div class="sector rules cf">
			<div class="navvy unit-info cf">
				<div id="dd" class="button-group cf" tabindex="1">
					<!-- Set up the Rules and Regs repeater to generate links for each Rule -->
					<?php if(have_rows('rules_and_regulations', $parent_id)): ?>
					<span>Fees & Deadlines</span>
					<ul class="info-chooser" tabindex="1">
						<?php while(have_rows('rules_and_regulations', $parent_id)): the_row();
							$rule = get_sub_field('rule', $parent_id);
						?>
						<li class="<?php echo str_replace(' ', '-', $rule); ?>">
							<a href="#<?php echo str_replace(' ', '-', $rule); ?>"><?php echo $rule; ?></a>
						</li>
						<?php endwhile; ?>
					</ul>
					<?php endif; ?>
				</div>
			</div>
			<!-- Set up the Rules Information repeater to generate all of the info for all of the regulations -->
			<?php if(have_rows('regulations')): ?>
			<div class="tabscontent unit-information cf">
				<?php while(have_rows('regulations')): the_row();
					$rule_name = get_sub_field('rule_name');
					$regulation = get_sub_field('regulation');
				?>
				<div id="<?php echo str_replace(' ', '-', $rule_name); ?>" class="cf">
					<?php echo $regulation; ?>
				</div>
				<?php endwhile; ?>
				<p class="footnote showthisthing"><?php the_field('species_info_footnote'); ?></p>
			</div>
			<?php endif; ?>
		</div>
		<div class="analysis-type foot">
			<h5>More in <?php echo get_the_title($parent_id); ?></h5>
			<?php
			  if($post->post_parent)
			  $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0&sort_order=desc");
			  else
			  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0&sort_order=desc");
			  if ($children) { ?>
			  <ul>
			  	<?php echo $children; ?>
			  </ul>
		  <?php } ?>
		</div>
	</div>
</section>

<!-- IF LOGGED OUT -->

<?php } else { ?>

<section class="logged-out">
	<div class="wrapper">
		<h1><?php echo get_the_title($parent_id); ?> <span class="separator">/</span> <?php the_title(); ?></h1>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php } ?>

<?php get_footer(); ?>