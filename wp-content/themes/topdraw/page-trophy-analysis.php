<?php
/* Template Name: Trophy Analysis */
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
			  <button class="button red outline large expand">Research Analyses</button>
			</div>
		</div>
		<div class="sector species trophy cf">
			<div class="navvy species cf">
				<div id="dd" class="button-group cf" tabindex="1">
					<!-- Set up the Species repeater to generate links for each Species -->
					<?php if(have_rows('species', $parent_id)): ?>
					<span>Animal Species: Elk</span>
					<ul class="animal-chooser" tabindex="1">
						<?php while(have_rows('species', $parent_id)): the_row();
							$species_name = get_sub_field('species_name', $parent_id);
						?>
						<li>
							<a href="#<?php echo str_replace(' ', '-', $species_name); ?>"><?php echo $species_name; ?></a>
						</li>
						<? endwhile; ?>
					</ul>
					<?php endif; ?>
				</div>
			</div>
			<!-- Set up the Trophy Information repeater to generate all of the info for all of the species -->
			<?php if(have_rows('trophy_info')): ?>
			<div class="tabscontent species-information cf">
				<?php while(have_rows('trophy_info')): the_row();
					$trophy_species_name = get_sub_field('trophy_species_name');
				?>
				<div id="<?php echo str_replace(' ', '-', $trophy_species_name); ?>">
					<div class="species_info cf">
						<h4><?php echo $trophy_species_name; ?></h4>
						<?php if(have_rows('records')): ?>
							<?php while(have_rows('records')): the_row();
								$title = get_sub_field('title');
								$record = get_sub_field('record');
							?>
							<div class="record cf">
								<h5><?php echo $title; ?></h5>
								<?php echo $record; ?>
							</div>
							<?php endwhile; ?>
						<?php endif; ?>
					</div>
				</div>
				<?php endwhile; ?>
			</div>
		</div>
		<div class="tabscontent species-chart cf">
		<?php while(have_rows('trophy_info')): the_row();
			$trophy_species_name = get_sub_field('trophy_species_name');
			$species_desc = get_sub_field('species_description');
			$species_table = get_sub_field('species_table');
		?>
		<div id="<?php echo str_replace(' ', '-', $trophy_species_name); ?>">
			<?php echo $species_desc; ?>
			<?php echo $species_table; ?>
		</div>
		<?php endwhile; ?>
		</div>
		<button class="button red outline large expand">Research Trophy Analyses</button>
		<div class="table-head">
			<a href="#" class="close">Close</a>
		</div>
	<?php endif; ?>
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