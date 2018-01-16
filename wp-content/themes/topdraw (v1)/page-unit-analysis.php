<?php
/* Template Name: Unit Analysis */
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
		<div class="sector species cf">
			<div class="navvy species cf">
				<h4>Species</h4>
				<div class="button_group cf">
					<!-- Set up the Species repeater to generate links for each Species -->
					<?php if(have_rows('species', $parent_id)): ?>
					<ul class="animal_chooser">
						<?php while(have_rows('species', $parent_id)): the_row();
							$species_name = get_sub_field('species_name', $parent_id);
						?>
						<li class="<?php echo str_replace(' ', '-', $species_name); ?>">
							<a href="#<?php echo str_replace(' ', '-', $species_name); ?>"><?php echo $species_name; ?></a>
						</li>
						<?php endwhile; ?>
					</ul>
					<?php endif; ?>
				</div>
			</div>
			<!-- Set up the Trophy Information repeater to generate all of the info for all of the species -->
			<?php if(have_rows('unit_info')): ?>
			<div class="tabscontent species_information cf">
				<?php while(have_rows('unit_info')): the_row();
					$unit_species_name = get_sub_field('unit_species_name');
					$species_info = get_sub_field('species_info');
					$animals = get_sub_field('animals');
					$deadline = get_sub_field('deadline');
					$cost = get_sub_field('cost');
					$results = get_sub_field('results');
					$species_unit_desc = get_sub_field('species_unit_description');
				?>
				<div id="<?php echo str_replace(' ', '-', $unit_species_name); ?>">
					<!-- <?php echo $species_info; ?> -->
					<h4><?php echo $unit_species_name; ?></h4>
					<div class="app_deadline_info cf">
						<h5><?php the_field('info_headline'); ?></h5>
						<div class="boxes cf">
								<!-- if the species table has results we add the class two to add another column -->
								<div class="animal<?php if($results){ ?> two<?php } ?>">
									<?php echo $animals; ?>
								</div>
								<!-- if the species table has results we add the class two to add another column -->
								<div class="cost<?php if($results){ ?> two<?php } ?>">
									<?php echo $cost; ?>
								</div>
								<!-- if the species table has results we add the class two to add another column -->
								<div class="date<?php if($results){ ?> two<?php } ?>">
									<?php echo $deadline; ?>
								</div>
								<?php if($results){ ?>
								<!-- if the species table has results we add the class two to add another column -->
								<div class="avail<?php if($results){ ?> two<?php } ?>">
									<?php echo $results; ?>
								</div>
								<?php } ?>
						</div>
						<p class="footnote"><?php the_field('species_info_footnote'); ?></p>
					</div>
					<?php echo $species_unit_desc; ?>
				</div>
				<?php endwhile; ?>
			</div>
		</div>
		<div class="table_toggle calculating">
			<p class="centery">
				<div class="input">
					<label for="calculator">True draw odds</label>
					<input type="text" name="calculator" id="calc" class="calc calcMulti" placeholder="Enter bonus points..." value=""/>
				</div>
			</p>
		</div>
		<!-- <button class="button red outline small expand">Open</button>
		<button class="button red outline small shrink">Close</button> -->
		<div class="tabscontent species_chart cf">
		<?php while(have_rows('unit_info')): the_row();
			$unit_species_name = get_sub_field('unit_species_name');
			$unit_table = get_sub_field('unit_table');
		?>
		<div id="<?php echo str_replace(' ', '-', $unit_species_name); ?>">
			<?php echo $unit_table; ?>
		</div>
		<?php endwhile; ?>
		</div>
		<?php endif; ?>
		<p class="footnote"><?php the_field('table_footnote', $parent_id); ?></p>
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php if(have_rows('unit_info')): ?>
	<?php while(have_rows('unit_info')): the_row();
		$unit_species_name = get_sub_field('unit_species_name');
		$calculator = get_sub_field('calculator');
		$drawType = get_sub_field('draw_odds_type');
		$multi = "Multiplier";
		$reg = "Regular";
	?>
	<?php if($drawType === "") { ?>

		<span class="calculatorValues" style="opacity: 0; pointer-events: none;"><?php echo str_replace(' ', '-', '.' . $unit_species_name . ','); ?></span>

		<?php } elseif($drawType === $multi) { ?>

		<span class="calculatorValuesMulti" style="opacity: 0; pointer-events: none;"><?php echo str_replace(' ', '-', '.' . $unit_species_name . ','); ?></span>

		<?php } elseif($drawType === $reg) { ?>


		<?php } ?>

	<?php endwhile; ?>

<?php endif; ?>

<?php get_footer(); ?>