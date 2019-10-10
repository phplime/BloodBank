<div class="row">
	<div class="col-md-7 ">
		<div class="reg_msg"></div>
		<br>
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">To Do List</h3>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
					<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body" style="">
				<div class="row">
					<div class="col-md-12">
						<form action="<?php echo base_url('todo/insert_todo') ?>" method="post" id="todo_form">

							<input type="hidden" name="<?php echo $this->security->get_csrf_token_name(); ?>" value="<?php echo $this->security->get_csrf_hash(); ?>">

							
							<div class="todo">
								<div class="input-group">
									<!-- /btn-group -->
									<input class="form-control" type="text" name="todo" placeholder="Write Your event">
									<div class="input-group-btn">
										<label >
											<span style="display: none;">
												<input type="checkbox" class="schedule" name="is_schedule" value="1">
											</span>
											<span data-toggle="tooltip" data-placement="top" title="Schedule Post" class="btn btn-flat btn-default "><i class="fa fa-clock-o"></i></span>
										</label>
										<button type="submit" name="insert" class="btn btn-primary"><i class="fa fa-plus"></i> Add</button>
										<button type="button" name="delete" class="btn btn-danger delete_checked" data-toggle="tooltip" data-placement="top" title="Delete Checked items"><i class="fa fa-trash"></i> Delete</button>
									</div>
								</div>
								<div class="schedule_area">
									<div class="row">
										<div class="col-md-9">
											<div class="schedule_areas">
												<div class="input-group date">
													<input class="form-control" name="schedule_time" id="datepicker" placeholder="30-07-2018" type="text" />
													<div class="input-group-addon">
														<i class="fa fa-calendar"></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					
				</div>
				<br>
				
				<div class="users_table">
					<?php $this->load->view('inc/todo_list'); ?>
				</div>
			</div><!-- /.box-body -->
		</div>
		<div class="col-md-5">
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
					<i class="fa fa-calendar"></i>

					<h3 class="box-title">Calendar</h3>
					<!-- tools box -->
					<div class="pull-right box-tools">
						<!-- button with a dropdown -->
						<button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
						</button>
						<button type="button" class="btn btn-success btn-sm" data-widget="remove"><i class="fa fa-times"></i>
						</button>
					</div>
					<!-- /. tools -->
				</div>
				<!-- /.box-header -->
				<div class="box-body no-padding">
					<!--The calendar -->
					<div id="calendar" style="width: 100%"></div>
				</div>
				<!-- /.box-body -->
			</div>
		</div>

	</div>
	
</div>



