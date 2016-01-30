<?php
/* Template Name: State */
get_header();
setup_postdata($post);
$heroImage = get_field('heroImage');
?>

<section class="internal_hero">
	<img src ="<?php echo $heroImage['url']; ?>" alt="<?php echo $heroImage['alt']; ?>" class="inside_hero" />
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php the_title(); ?></h1>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<h1><?php the_title(); ?></h1>
		<div class="intro"><?php the_content(); ?></div>
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
	</div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>