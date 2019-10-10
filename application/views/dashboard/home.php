  <?php $u_info = user_info(); ?>
  <div class="row">
   <div class="col-lg-3 col-xs-6">
    <!-- small box -->
    <div class="small-box bg-yellow">
      <div class="inner">
        <h3><?php echo $u_info->total_user; ?></h3>

        <p>Registred  Users</p>
      </div>
      <div class="icon">
        <i class="ion ion-person-add"></i>
      </div>
      <a href="<?php echo base_url('dashboard/total_user') ?>" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->

   <div class="col-lg-3 col-xs-6">
    <!-- small box -->
    <div class="small-box bg-green">
      <div class="inner">
        <h3><?= isset($u_info->reg_user)?$u_info->reg_user:"0"; ?></h3>

        <p>Active Users</p>
      </div>
      <div class="icon">
        <i class="ion ion-person-add"></i>
      </div>
      <a href="<?php echo base_url('dashboard/total_user') ?>" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->

  <div class="col-lg-3 col-xs-6">
    <!-- small box -->
    <div class="small-box bg-aqua">
      <div class="inner">
        <h3><?= isset($u_info->total_event)?$u_info->total_event:"0"; ?></h3>

        <p>Total Events</p>
      </div>
      <div class="icon">
        <i class="ion ion-stats-bars"></i>
      </div>
      <a href="<?php echo base_url('todo') ?>" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->

  <div class="col-lg-3 col-xs-6">
    <!-- small box -->
    <div class="small-box bg-primary">
      <div class="inner">
        <h3><?= isset($image->total_image)?$image->total_image:"0"; ?></h3>

        <p>Total Images</p>
      </div>
      <div class="icon">
        <i class="ion ion-image"></i>
      </div>
      <a href="<?php echo base_url('dashboard/gallery') ?>" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
  <!-- ./col -->

</div>



