<div class="container">
	<div class="row">
		<div class="col-md-7">
			<div class="box box-info">
				<div class="box-header">
					<h4>Edit User</h4>
				</div>
				<form action="<?php echo base_url('dashboard/user_edit/'.$user->id) ?>" method="post">

					 <input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


					<div class="box-body">
						<div class="row">
							<div class="form-group col-md-6">
								<label for="username">Username</label>
								<input type="text" name="username" id="username" class="form-control" value="<?= $user->username; ?>">
							</div>
							<div class="form-group col-md-6">
								<label for="email">Email</label>
								<input type="text" name="email" id="email" class="form-control" value="<?= $user->email; ?>" readonly>
							</div>
						</div>
					<div class="row">
						<div class="form-group col-md-6">
					      	<label for="country">Country</label>
					        <select name="country" id="country" class="select2 form-control">
					        	<option value="">Select Country</option>
					        	<?php foreach ($country as $key => $row) { ?>
					        		<option <?= $user->country == $row['country_id']?"selected":""; ?> value="<?= $row['country_id'] ?>"><?= $row['name']; ?></option>
					        	<?php } ?>
					        </select>
				      </div>

				        <div class="form-group col-md-6">
					      	<label for="gender">Gender</label>
					        <select name="gender" id="gender" class="select2 form-control">
					        	<option value="">Select Gender</option>
					        	
					        	<option <?= ($user->gender !='') && $user->gender=="Male"?$m="selected":$m=""; ?> value="Male">Male</option>
					        	<option <?= ($user->gender !='') && $user->gender=="Female"?$m="Female":$m=""; ?> value="Female">Female</option>
					        </select>
				        </div>
					</div>  

					<div class="row">
						<div class="form-group col-md-6">
							<label for="">Designation</label>
							<input type="text" name="designation" id="designation" class="form-control" value="<?= $user->designation; ?>">
						</div>
						<div class="form-group col-md-6">
							<label for="">Website</label>
							<input type="text" name="website" id="website" class="form-control" value="<?= $user->website; ?>">
						</div>
					</div>    

				      <div class="form-group">
							<label for="address">Address</label>
							<textarea name="address" class="form-control" id="address" cols="10" rows="3" placeholder="Type Your Address"><?= $user->address; ?></textarea>
						</div>


					</div>
					<div class="box-footer">
						<div class="pull-left">
							<a href="<?php echo base_url('dashboard/total_user') ?>" class="btn btn-default">Cancel</a>		
						</div>
						<div class="pull-right">
							<button class="btn btn-primary" type="submit">Save Change</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>


