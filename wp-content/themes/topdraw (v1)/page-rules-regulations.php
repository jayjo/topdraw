<?php
/* Template Name: Rules & Regulations */
get_header();
setup_postdata($post);

$parent_id = $post->post_parent;
$parentContent = get_page($parent_id);
$heroImage = get_field('heroImage', $parent_id);

?>

<section class="internal_hero">
	<img src ="<?php echo $heroImage['url']; ?>" alt="<?php echo $heroImage['alt']; ?>" class="inside_hero" />
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php echo get_the_title($parent_id); ?></h1>
			<h2><?php the_title(); ?></h2>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<div class="top_info">
			<h1><?php echo get_the_title($parent_id); ?> - <?php the_title(); ?></h1>
			<div class="intro"><?php echo apply_filters('the_content', $parentContent->post_content); ?></div>
		</div>
		<div class="analysis_type">
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
		<div class="sector rules cf">
			<div class="navvy unit_info cf">
				<h4>Legend</h4>
				<div class="button_group cf">
					<!-- Set up the Rules and Regs repeater to generate links for each Rule -->
					<?php if(have_rows('rules_and_regulations', $parent_id)): ?>
					<ul class="info_chooser">
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
			<div class="tabscontent unit_information cf">
				<?php while(have_rows('regulations')): the_row();
					$rule_name = get_sub_field('rule_name');
					$regulation = get_sub_field('regulation');
				?>
				<div id="<?php echo str_replace(' ', '-', $rule_name); ?>" class="cf">
					<?php echo $regulation; ?>
				</div>
				<?php endwhile; ?>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>