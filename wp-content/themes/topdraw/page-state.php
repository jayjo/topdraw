<?php
/* Template Name: State */
get_header();
setup_postdata($post);
$heroImage = get_field('heroImage');
?>

<section class="internal-hero" style="background-image: url(<?php echo $heroImage['url']; ?>" alt="<?php echo $heroImage['alt']; ?>)">
	<div class="content">
		<div class="wrapper">
			<h1 class="ranger"><?php the_title(); ?></h1>
		</div>
	</div>
</section>

<section class="chart cf">
	<div class="wrapper">
		<div class="content">
			<h1><?php the_title(); ?></h1>
			<div class="intro"><?php the_content(); ?></div>
		</div>
		<div class="analysis-type">
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

<!-- WHEN LOGGED OUT-->

<?php
  $loggedIn = get_body_class();
  if(!in_array('logged-in', $loggedIn)) { ?>

<section class="logged-out"><div class="wrapper"></div></section>
<?php include 'inc/form.php'; ?>

<?php } ?>

<?php get_footer(); ?>