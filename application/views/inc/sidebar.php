  <?php $ac = user_info(); ?>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="<?php echo base_url()?>assets/admin/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p><?php echo $ac->username; ?></p>
          <span id="time"></span>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <!-- <li class="header">MAIN NAVIGATION</li> -->
        <li class="<?= isset($page_title) && $page_title =="Dashboard"?"active":""; ?>">
          <a href="<?php echo base_url('dashboard') ?>">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </a>
        </li>
       
        <li class="treeview <?php if(isset($page_title) && $page_title=="Total User" || $page_title=="Add User"){echo "active";}else{echo "";} ?>">
          <a href="#">
            <i class="fa fa-users"></i>
            <span>User's</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="<?= $page_title =="Total User"?"active":"";?>"><a href="<?php echo base_url('dashboard/total_user') ?>"><i class="fa fa-angle-double-right"></i> All User's</a></li>

            <li class="<?= $page_title =="Add User"?"active":"";?>"><a href="<?php echo base_url('dashboard/add_user') ?>"><i class="fa fa-angle-double-right"></i> Add User's</a></li>
          </ul>
          
        </li>

        
        <li class="<?= $page_title =="To Do List"?"active":"";?>">
          <a href="<?php echo base_url('todo') ?>">
            <i class="fa fa-list"></i> <span>To Do List</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green"><?=  isset($ac->own_event)?$ac->own_event:"new"; ?></small>
            </span>
          </a>
        </li>

        <li class="<?= $page_title =="Gallery"?"active":"";?>">
          <a href="<?php echo base_url('dashboard/gallery') ?>">
            <i class="fa fa-picture-o"></i> <span>Gallery</span>
          </a>
        </li>

        <li class="<?= $page_title =="Settings"?"active":"";?>">
          <a href="<?php echo base_url('dashboard/settings') ?>">
            <i class="fa fa-cog"></i> <span>Settings</span>
          </a>
        </li>
        <?php if(isset($ac->user_type) && $ac->user_type==1){ ?>
        <li>
          <a href="<?php echo base_url('dashboard/db_backup') ?>">
            <i class="fa fa-database"></i> <span>Backup Database</span>
          </a>
        </li> 
        <?php } ?>
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb">
          <li><a href="<?php echo base_url('dashboard'); ?>"><i class="fa fa-home"></i> Home</a></li>
          <li class="active"><?php if(isset($page_title) && $page_title!=""){echo $page_title;} ?></li>
        </ol>
        <div class="alert_area">
            <?php $this->load->view('inc/success_msg'); ?>
        </div>
      
    </section>
    
    <!-- Main content -->
    <section class="content">