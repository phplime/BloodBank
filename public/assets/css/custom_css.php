<?php header("Content-type: text/css; charset: UTF-8"); ?>

<?php for($i=0;$i<100;$i++){ ?>
	.pt-<?= $i;?>{
		padding-top:<?= $i;?>px;
	}

	.pb-<?= $i;?>{
		padding-bottom:<?= $i;?>px;
	}

	.pl-<?= $i;?>{
		padding-left:<?= $i;?>px;
	}

	.pr-<?= $i;?>{
		padding-right:<?= $i;?>px;
	}

	.p-<?= $i;?>{
		padding:<?= $i;?>px;
	}


	.mt-<?= $i;?>{
		margin-top:<?= $i;?>px;
	}

	.mb-<?= $i;?>{
		margin-bottom:<?= $i;?>px;
	}

	.ml-<?= $i;?>{
		margin-left:<?= $i;?>px;
	}

	.mr-<?= $i;?>{
		margin-right:<?= $i;?>px;
	}

	.m-<?= $i;?>{
		margin:<?= $i;?>px;
	}
	
	.fz-<?= $i;?>{
		font-size:<?= $i;?>px;
	}
	.h-<?= $i;?>{
		height:<?= $i;?>px;
	}
	.w-<?= $i;?>{
		width:<?= $i;?>px;
	}

<?php } ?>