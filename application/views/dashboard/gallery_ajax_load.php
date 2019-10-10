<div id="grid_view" class="grid_4">
	<?php foreach ($gallery as $img): ?>
		<div class="item" id="hide_image_<?php echo $img['id'];?>">
			<div class="single_image ">
				<img src="<?php echo base_url($img['image']); ?>" alt="">
				<a href="javascript:;" class="img_delete" data-id="<?php echo $img['id'];?>"><i class="fa fa-trash"></i></a>
			</div>
		</div>	
	<?php endforeach ?>
</div>
