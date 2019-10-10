<div class="row">
	<div class="col-md-10">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Total User</h3>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
					<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body" style="">
				<div class="text-right">
					<a href="<?php echo base_url('dashboard/add_user') ?>" class="btn btn-primary btn-flat"><i class="fa fa-plus"></i> Add User</a>
				</div>
				<br>
				<div class="user_table">
					<table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>SL</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <?php $i=1; foreach ($all_user as $key => $row): ?>
	                <tr>
	                  <td><?php echo $i; ?></td>
	                  <td><?php echo $row['username']; ?></td>
	                  <td><?php echo $row['email']; ?></td>
	                  <td> <?php echo $row['country_name']; ?></td>
	                  <td>
	                  	<span class="label label-info"><?= $row['user_type']==1?"Admin":"User"; ?></span>
	                  </td>
	                  <td><?php if($row['is_active'] == 1){ ?>
	                  	<a href="<?= $this->session->userdata('user_type')==1? base_url('dashboard/change_status/'.$row['id']."/".$row['is_active']):"javascript:;" ?>" class="label label-primary" data-toggle="tooltip" data-placement="top" title="Click to Deactive">Active</a>
	                  <?php }else{ ?>
	                  	<a href="<?= $this->session->userdata('user_type')==1? base_url('dashboard/change_status/'.$row['id']."/".$row['is_active']):"javascript:;" ?>" class="label label-danger" data-toggle="tooltip" data-placement="top" title="Click to Active">Deactive</a>
	                  <?php } ?>
	                  </td>
	                  <td>
	                  	<a href="javascript:;" data-toggle="modal" data-target="#view_modal_<?= $row['id']?>" class="btn btn-flat btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="View user info"><i class="fa fa-eye"></i></a>
						<?php if($this->session->userdata('user_type')==1): ?>

		                  	<a href="<?php echo base_url('dashboard/single_user_by_id/'.$row['id']) ?>" class="btn btn-flat btn-info btn-sm" data-toggle="tooltip" data-placement="top" title="Edit user info"><i class="fa fa-pencil"></i></a>

		                  	<a href="<?php echo base_url('dashboard/delete/'.$row['id']) ?>" onclick="return confirm('Are Want to delete this user')" class="btn btn-flat btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Delete user" ><i class="fa fa-trash-o"></i></a>
	                  	<?php endif; ?>
	                  </td>
	                </tr>
            	<?php $i++; endforeach ?>
                </tbody>
              </table>
				</div>
			</div><!-- /.box-body -->
			<div class="box-footer" style="">
			
			</div>
		</div>
	</div>
</div>


<?php $i=1; foreach ($all_user as $key => $row): ?>
<!-- Modal -->
<div id="view_modal_<?= $row['id']?>" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"><?php echo $row['username']; ?>'s Info</h4>
      </div>
      <div class="modal-body">
        <div class="row">
        	<div class="form-group col-md-6">
        	<label for="">Username</label>
        	<p class="u_info"><?php echo $row['username']; ?></p>
        </div>
        <div class="form-group col-md-6">
        	<label for="">email</label>
        	<p class="u_info"><?php echo $row['email']; ?></p>
        </div>
        </div>

        <div class="row">
        	<div class="form-group col-md-6">
	        	<label for="">country</label>
	        	<p class="u_info"><?php echo $row['country_name']; ?></p>
	        </div>

	        <div class="form-group col-md-6">
	        	<label for="">gender</label>
	        	<p class="u_info"><?= $row['gender'] !=''?$row['gender']:"Gender not provide" ; ?></p>
	        </div>
        </div>

        <div class="row">
        	<div class="form-group col-md-6">
	        	<label for="">Designation</label>
	        	<p class="u_info"><?php echo $row['designation']!=""?$row['designation']:"Designation is empty"; ?></p>
	        </div>

	        <div class="form-group col-md-6">
	        	<label for="">website</label>
	        	<p class="u_info"><?= $row['website']!=""?$row['website']:"website is empty";?></p>
	        </div>
        </div>
        <div class="row">
        	<div class="form-group col-md-12">
	        	<label for="">address</label>
	        	<p class="u_info"><?= $row['address'] !=''?$row['address']:"address not provide" ; ?></p>
	        </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<?php $i++; endforeach ?>