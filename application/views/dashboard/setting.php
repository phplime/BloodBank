<?php $setting = settings(); ?>
<div class="row">
	<div class="col-md-7">
		<?php if($this->session->userdata('user_type')==1): ?>
		<div class="box box-success">
			<div class="box-header with-border">
				<h3 class="box-title">Settings</h3>
			</div>
			<div class="box-body">
				<div class="post">
					<form class="form-horizontal" action="<?php echo base_url('dashboard/add_settings') ?>" method="post">

						<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">

						<div class="form-group">
							<label for="inputName" class="col-sm-3">Site Name</label>

							<div class="col-sm-9">
								<input type="text" name="site_name" placeholder="Site Name" class="form-control" value="<?= isset($setting->site_name) && $setting->site_name !=""?$setting->site_name:"Coderheart";  ?>">
								<span class="error"><?php echo form_error('site_name'); ?></span>
							</div>
						</div>

						<div class="form-group">
							<label class="col-sm-3">Admin Email</label>

							<div class="col-sm-9">
								<input type="text" name="email" placeholder="Site Name" class="form-control" value="<?= $setting->email;  ?>">
								<span class="error"><?php echo form_error('email'); ?></span>
							</div>
						</div>

						<div class="form-group">
							<label for="inputName" class="col-sm-3">Registration</label>

							<div class="col-sm-9">
								<div class="left_form">
									<label> <input <?= (isset($setting->registration_option) && $setting->registration_option=="1")?"checked":""; ?> type="radio" name="registration_option" class="icheck" value="1" required>  On </label> 
								</div>
								<label> <input <?= (isset($setting->registration_option) && $setting->registration_option=="0")?"checked":""; ?> type="radio" name="registration_option" class="icheck" value="0" required> Off </label>
							</div>
						</div>

						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10 text-right">
								<button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> &nbsp;Save Change</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<?php else: ?>
			<div class="alert alert-danger alert-dismissible">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
				<h4><i class="icon fa fa-ban"></i> Sorry!</h4>
				<div class="text-center">
					<p>Only Admin can control this</p>
					<a href="<?php echo base_url('dashboard') ?>" class="btn btn-primary btn-flat">Back</a>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>