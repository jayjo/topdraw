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