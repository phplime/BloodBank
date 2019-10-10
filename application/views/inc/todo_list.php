
<table id="example1" class="table table-bordered table-striped">
	<thead>
		<tr>
		
			<th width="2%">SL</th>
			<th width="30%">Details</th>
			<th width="10%">Username</th>
			<th>Schedule</th>
			<th>Status</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php $i=1; foreach ($active_todo as $key => $row): ?>
		<tr class="hide_todo_<?= $row['id']?>" id="todo_list">
			<td><?php echo $i; ?></td>
			<td><?php echo $row['event_name']; ?></td>
			<td><?php echo $row['username']; ?></td>
			<td> <?= $row['is_schedule']==1? $row['schedule_time']:" "; ?></td>
			<td><?php if($row['is_over'] == 0){ ?>
				<a href="javascript:;" class="label label-primary is_over" data-toggle="tooltip" data-placement="top" title="Click to Mark as done" data-status="<?= $row['is_over'];?>" data-id="<?= $row['id'];?>" >Active</a>
			<?php }else{ ?>
				<a href="javascript:;" data-status="<?= $row['is_over'];?>" data-id="<?= $row['id'];?>" class="label label-danger is_over" data-toggle="tooltip" data-placement="top" title="Click to Mark as live">Done</a>
			<?php } ?>
		</td>
		<td>
			<a href="javascript:;" data-id="<?= $row['id']?>" class="btn btn-flat btn-danger btn-sm todo_delete" data-toggle="tooltip" data-placement="top" title="Delete Event"><i class="fa fa-trash-o"></i></a>
		</td>
	</tr>
	<?php $i++; endforeach ?>
</tbody>
</table>
<div class="finish">Finished Events</div>
<table id="example2" class="table table-bordered table-striped">
<thead>
		<tr>
		<th width="5%"><input type="checkbox" id="checkAll" data-toggle="tooltip" data-placement="top" title="Checked all"></th>
		<th style="width: 5px;">SL</th>
		<th width="25%">Details</th>
		<th width="10%">Username</th>
		<th>Schedule</th>
		<th>Status</th>
		<th>Action</th>
	</tr>
</thead>
<tbody>
	<?php $i=1; foreach ($over_todo as $key => $row): ?>
	<tr class="hide_todo_<?= $row['id']?>">
		<td><input type="checkbox" class="check" name="check_delete" value="<?= $row['id']?>"></td>
		<td><?php echo $i; ?></td>
		<td><?php echo $row['event_name']; ?></td>
		<td><?php echo $row['username']; ?></td>
		<td> <?= $row['is_schedule']==1? $row['schedule_time']:" "; ?></td>
		<td><?php if($row['is_over'] == 0){ ?>
			<a href="javascript:;" class="label label-danger is_over" data-toggle="tooltip" data-placement="top" title="Click to Mark as done" data-status="<?= $row['is_over'];?>" data-id="<?= $row['id'];?>" >Done</a>
		<?php }else{ ?>
			<a href="javascript:;" data-status="<?= $row['is_over'];?>" data-id="<?= $row['id'];?>" class="label label-danger is_over" data-toggle="tooltip" data-placement="top" title="Click to Mark as live">Done</a>
		<?php } ?>
	</td>
	<td>
		<a href="javascript:;" data-id="<?= $row['id']?>" class="btn btn-flat btn-danger btn-sm todo_delete" data-toggle="tooltip" data-placement="top" title="Delete Event"><i class="fa fa-trash-o"></i></a>
	</td>
</tr>
<?php $i++; endforeach ?>
</tbody>
</table>
</div>

<?php
				// print "<br/><br/><b>PHP getdate() returns current date components.</b><br/>";
			 // $c = getdate();
			 // echo $c['hours'].":".$c['minutes'];
				// print "<PRE>";
				// print_r($c);
				// print "</PRE>";
?>