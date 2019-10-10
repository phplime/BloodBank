<div class="" id="successMessage">
    <?php if ($this->session->flashdata('success')) { ?>
    <div class="alert alert-success alert-dismissible custom_alert" id="successMessage">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4>
            <i class="icon fa fa-check"></i>
            success!
        </h4>
        <?php echo $this->session->flashdata('success'); ?>
    </div>
    <?php } ?>
     <?php if ($this->session->flashdata('error')) { ?>
    <div class="alert alert-danger alert-dismissible custom_alert" id="successMessage">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4>
            <i class="icon fa fa-exclamation-circle"></i>
            Warning!
        </h4>
        <?php echo $this->session->flashdata('error'); ?>
    </div>
    <?php } ?>
</div>

