<div class="row">
	<form action="<?php echo base_url('dashboard/add_gallery_image') ?>" method="post" enctype="multipart/form-data" id="add_gallery_image">
		<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


	<div class="col-md-12">
		<input type="file" accept="image/*" class="info_file image_upload" name="file[]" multiple  />
	</div>

	<div class="col-md-12 ">
    	<div class="img_progress">
	        <div class="contest_progress"style="display: none;">
	            <div class="progress">
	               <div class="progress-bar progress-bar-success progress-bar-striped myprogress" role="progressbar" style="width:0%">0%</div>
	        	</div>
	        </div>
	    </div>
    </div>

	<div class="col-md-12">
		<div class="post_btn">
			<button type="submit" name="submit" class="btn btn-default custom_btn">Submit</button>
		</div>
	</div>
</form>

    
</div>

<div class="image_area">
	<div class="row">
		<div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
			<div class="grid_select_area">
				<select name="" id="" class="form-control grid_select select2">
					<option value="">Select Grid</option>
					<option value="2">Grid 2</option>
					<option value="3">Grid 3</option>
					<option value="4">Grid 4</option>
					<option value="5">Grid 5</option>
				</select>
			</div>
		</div>
	</div>
	
	<div class="gallery_area">
		<div id="load_view" class="">
			<?php include 'gallery_ajax_load.php'; ?>
		</div>
	</div>
</div>