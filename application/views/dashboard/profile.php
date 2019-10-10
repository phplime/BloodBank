<div class="row">
	<div class="col-md-9">
		<div class="reg_msg"></div>
		<div class="nav-tabs-custom">
			<ul class="nav nav-tabs">
				<li class="active"><a href="#activity" data-toggle="tab"><i class="fa fa-user-circle"></i>  Profile</a></li>
				<li><a href="#settings" data-toggle="tab"><i class="fa fa-key"></i> &nbsp;Change Password</a></li>
			</ul>
			<div class="tab-content">
				<div class="active tab-pane" id="activity">
					<!-- Post -->
					<div class="post">
						<form class="form-horizontal" action="<?php echo base_url('dashboard/update_profile') ?>" method="post">

							<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


							<div class="form-group">
								<label for="inputName" class="col-sm-2 control-label">Name</label>

								<div class="col-sm-10">
									<input type="text" name="username" class="form-control" id="inputName" placeholder="Name" value="<?= $u_info->username; ?>">
								</div>
							</div>
							<div class="form-group">
								<label for="inputEmail" class="col-sm-2 control-label">Email</label>

								<div class="col-sm-10">
									<input type="email" class="form-control" id="inputEmail" name="email" placeholder="Email" value="<?= $u_info->email; ?>">
									
								</div>
							</div>
							<div class="form-group">
								<label for="inputName" class="col-sm-2 control-label">Country</label>

								<div class="col-sm-10">
									<select name="country" id="country" class="select2 form-control">
										<option value="">Select Country</option>
										<?php foreach ($country as $key => $row) { ?>
											<option <?= $u_info->country == $row['country_id']?"selected":""; ?> value="<?= $row['country_id'] ?>"><?= $row['name']; ?></option>
										<?php } ?>
									</select>
								</div>
							</div>

							<div class="form-group">
								<label for="inputName" class="col-sm-2 control-label">Gender</label>

								<div class="col-sm-10">
									<select name="gender" id="gender" class="select2 form-control">
										<option value="">Select Gender</option>
										<option <?= ($u_info->gender !='') && $u_info->gender=="Male"?$m="selected":$m=""; ?> value="Male">Male</option>
										<option <?= ($u_info->gender !='') && $u_info->gender=="Female"?$m="Female":$m=""; ?> value="Female">Female</option>
									</select>
								</div>
							</div>

							<div class="form-group">
								<label for="" class="col-sm-2 control-label">Designation</label>

								<div class="col-sm-10">
									<input type="text" name="designation" class="form-control"  placeholder="Designation" value="<?= $u_info->designation; ?>">
								</div>
							</div>

							<div class="form-group">
								<label for="" class="col-sm-2 control-label">Website</label>

								<div class="col-sm-10">
									<input type="text" name="website" class="form-control" placeholder="website" value="<?= $u_info->website; ?>">
								</div>
							</div>


							<div class="form-group">
								<label for="inputExperience" class="col-sm-2 control-label">Address</label>

								<div class="col-sm-10">
									<textarea class="form-control" id="inputExperience" placeholder="Address" name="address"><?= $u_info->address;?></textarea>
								</div>
							</div>
							
							
							<div class="form-group">
								<div class="col-md-10 col-md-offset-2">
									<a href="<?php echo base_url('dashboard') ?>" class="btn btn-default btn-flat">Cancel</a>
									<div class="pull-right">
										<button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-save"></i> &nbsp;Save Change</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					<!-- /.post -->
				</div>

				<div class="tab-pane" id="settings">
					<form class="form-horizontal " action="<?php echo base_url('dashboard/change_pass') ?>" method="post" id="change_pass_form">

						<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


						<div class="form-group">
							<label for="inputName" class="col-sm-3  control-label">Old Password</label>
							<div class="col-sm-9">
								<input type="password" class="form-control" id="inputName" name="old_pass" placeholder="Old Password">
							</div>
						</div>

						<div class="form-group">
							<label for="inputName" class="col-sm-3 control-label">New Password</label>
							<div class="col-sm-9">
								<input type="password" class="form-control" id="inputName" name="new_pass" placeholder="New Password">
							</div>
						</div>

						<div class="form-group">
							<label for="inputName" class="col-sm-3 control-label">Confirm Password</label>
							<div class="col-sm-9">
								<input type="password" class="form-control" id="inputName" name="c_pass" placeholder="Confirm Password">
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-10 col-md-offset-2">
								<a href="<?php echo base_url('dashboard') ?>" class="btn btn-default btn-flat">Cancel</a>
								<div class="pull-right">
									<button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-save"></i> &nbsp;Save Change</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- /.tab-pane -->
			</div>
			<!-- /.tab-content -->
		</div>
		<!-- /.nav-tabs-custom -->
	</div>
