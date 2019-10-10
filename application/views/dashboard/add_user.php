<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Add New User</h3>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
					<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body" style="">
				<form action="<?php echo base_url('dashboard/user_insert') ?>" method="post">
					
					<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


				      <div class="form-group">
				      	<label for="username">Username</label>
				        <input type="text" name="username" id="username" class="form-control" placeholder="Username">
				        <span class="error"><?php echo form_error('username'); ?></span>
				      </div>
				      <div class="form-group">
				      	<label for="email">Email</label>
				        <input type="email" name="email" id="email" class="form-control" placeholder="xxxx@email.com">
				        <span class="error"><?php echo form_error('email'); ?></span>
				      </div>

				      <div class="form-group">
				      	<label for="country">Country</label>
				        <select name="country" id="country" class="form-control select2">
				        	<option value="">Select Country</option>
				        	<?php foreach ($country as $key => $row) { ?>
				        		<option value="<?= $row['country_id'] ?>"><?= $row['name']; ?></option>
				        	<?php } ?>
				        </select>
				        <span class="error"><?php echo form_error('country'); ?></span>
				      </div>

				      <div class="form-group">
				      	<label for="message">Message</label>
				       	<textarea name="message" class="form-control" id="message" cols="5" rows="5"></textarea>
				      </div>

				</div><!-- /.box-body -->
				<div class="box-footer" style="">
					<span data-toggle="tooltip" data-placement="top" title="Password will create randomly and  send user by email"><i class="fa fa-question-circle fa-2x"></i> </span>
					<div class="pull-right">
		          		<button type="submit" name="register" class="btn btn-primary btn-block btn-flat">Register</button>
		          </div>
				</div>
			</form>
		</div>
	</div>
</div>
