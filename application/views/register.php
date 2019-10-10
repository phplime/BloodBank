<?php $setting = settings(); ?>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<div class="login-boxs" style="min-height: 470px; margin-bottom: 30px;">
				<?php if(isset($setting->registration_option) && $setting->registration_option =="1"|| empty($setting)): ?>
					<div class="login-logo">
						<a href="#"><?= isset($setting->site_name) && $setting->site_name !=""?substr($setting->site_name,0,20):"AdminLTE";  ?></a>
					</div>
					<!-- /.login-logo -->
					<div class="login-box-body">
						<p class="login-box-msg"><b>Regiter</b> to create a account</p>
						<span class="reg_msg"></span>
						<form action="<?php echo base_url('home/user_insert') ?>" method="post" id="user_insert_form">

							<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">


							<div class="form-group">
								<label for="username">Username</label>
								<input type="text" name="username" id="username" class="form-control" placeholder="Username">
							</div>
							<div class="form-group">
								<label for="email">Email</label>
								<input type="email" name="email" id="email" class="form-control" placeholder="xxxx@email.com">
							</div>

							<div class="form-group">
								<label for="country">Gender</label>
								<select name="gender" id="gender" class="select2 form-control">
									<option value="">Select Gender</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>

							<div class="form-group">
								<label for="country">Country</label>
								<select name="country" id="country" class="form-control select2">
									<option value="">Select Country</option>
									<?php foreach ($all_country as $key => $row) { ?>
										<option value="<?= $row['country_id'] ?>"><?= $row['name']; ?></option>
									<?php } ?>
								</select>
							</div>

							<div class="form-group">
								<label for="password">Password</label>
								<input type="password" name="password" id="password" class="form-control" placeholder="Password">
							</div>

							<div class="form-group">
								<label for="cpassword">Confirm Password</label>
								<input type="password" name="cpassword" id="cpassword" class="form-control" placeholder="Confirm Password">
							</div>


							<div class="row">
								<!-- /.col -->
								<div class="col-xs-6 col-md-offset-6 text-right">
									<div class="pull-right">
										<button type="submit" name="register" class="btn btn-primary btn-block btn-flat">Register</button>
									</div>
								</div>
								<!-- /.col -->
							</div>
						</form>

						<div class="social-auth-links text-center">

						</div>
						<!-- /.social-auth-links -->
						<p> Already a member? <a href="<?php echo base_url('home') ?>" class="text-center"> Login</a></p>

					</div>
					<!-- /.login-box-body -->
					<?php else: ?>
						<div class="alert alert-danger alert-dismissible" style="margin-top: 22%;">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
							<h4><i class="icon fa fa-ban"></i> Sorry!</h4>
							<div class="text-center">
								<p>Registration system is off Now. Please try later</p>
								<a href="<?php echo base_url('home') ?>" class="btn btn-primary btn-flat" style="text-decoration: none;">Back</a>
							</div>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>