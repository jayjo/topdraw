<?php
/* Template Name: Default Page */
get_header();
setup_postdata($post);
?>

<section class="internal_content">
  <div class="wrapper cf">
    <h1 class="ranger"><?php the_title(); ?></h1>
    <?php the_content(); ?>
  </div>
</section>

<?php include 'inc/form.php'; ?>

<?php get_footer(); ?>