<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

	public function __construct(){
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
	}

	public function get_all_blood_group()
	{
		header("Access-Control-Allow-Origin: *");
		$group = $this->api_m->select('blood_group');
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($group));
		;
		
	}

	public function get_login_user_info($id)
	{
		header("Access-Control-Allow-Origin: *");
		$user_info = $this->api_m->get_login_user_info($id,'blood_donors');
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($user_info));
		;
		
	}

	public function add_user(){

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

		$formdata = json_decode(file_get_contents('php://input'), true);
		 // echo "<pre>";print_r($formdata);exit();

		if (empty($formdata)) {
			$msg = 'Field must not be empty!!';
			$response = ['st' => 0, 'msg'=> $msg,];
		}else{	
			// $data = array(
			// 	'name' => $formdata['name'],
			// 	'phone' => $formdata['phone'],
			// 	'blood_group' => $formdata['blood_group'],
			// 	'gender' => $formdata['gender'],
			// 	'address' => $formdata['address'],
			// );

			if(isset($formdata['id']) && $formdata['id'] !=0){
				$insert = $this->api_m->update($formdata,$formdata['id'],'blood_donors');
			}else{
				$insert = $this->api_m->insert($formdata,'blood_donors');
			}
			
			if($insert){
				$msg = 'Registration Successfull';
				$response = ['st' => 1, 'msg'=> $msg, 'id'=>$insert];
			}else{
				$msg = 'omethings Were Wrong';
				$response = ['st' => 0, 'msg'=> $msg,];

			}	
			
			
			
		}
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($response));
		;
		
	}


	public function check_existing_value(){

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

		$formdata = json_decode(file_get_contents('php://input'), true);
		  // echo "<pre>";print_r($formdata);exit();

		if (empty($formdata)) {
			$msg = 'Field must not be empty!!';
			$response = ['st' => 0, 'msg'=> $msg,];
		}else{	
			
			$check = $this->api_m->check_existing_value($formdata['field_name'],$formdata['value'],$formdata['table']);
			
			if($check['check']!=1){
				$msg = '<i class="fa fa-check-square-o" style="color:green" title="Done"></i>';
				$response = ['st' => 1, 'msg'=> $msg,];
			}else{
				$msg = '<i class="fa fa-close" style="color:red" title="This <b>'.$formdata['value']. '</b>  already exists"> </i>';
				$response = ['st' => 0, 'msg'=> $msg, 'data'=>$check['result'],];

			}	
			
			
			
		}
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($response));
		;
		
	}


	public function get_single_value(){

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

		$formdata = json_decode(file_get_contents('php://input'), true);	
		$check = $this->api_m->single_select_by_id($formdata['field_value'],$formdata['field_name'],$formdata['table']);
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($check));
		;
		
	}




	public function user_login()
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

		$formdata = json_decode(file_get_contents('php://input'), true);
		if (empty($formdata)) {
			$msg = 'Field must not be empty!!';
			$response = ['st' => 0, 'msg'=> $msg,];
		}else{	
			$phone = $formdata['phone'];
			$password = $formdata['password'];
			$query = $this->api_m->login_info_check($phone,$password);
			if($query){
				
				$s_array= array();
				foreach($query as $row):
					$s_array[] = array(
						'id' => $row['id'],
						'username' => $row['username'],
						'phone' => $row['phone'],
						'gender' => $row['gender'],
						'user_login' => 1,
					);

					$data = array('last_login'=>d_time());
					$this->api_m->update($data,$row['id'],'blood_donors');
				endforeach;
				$msg = 'Login Successfull';
				$response = ['st' => 1, 'msg'=> $msg, 'data' => $s_array];
			}else{
				$msg = 'Login invalid';
				$response = ['st' => 0, 'msg'=> $msg, 'data' => 0];
			} 
			

		} 
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($response));
			;
	}


	public function upload_image()
	{	
		// echo "<pre>";print_r($_POST);exit();
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		header('Content-Type: application/json; charset=utf-8');

	    $data = array();
	    $formdata = json_decode(file_get_contents('php://input'), true);
	    if (!empty($_FILES['file']['name'])) {
	        $filesCount = count($_FILES['file']['name']);
	        for ($i = 0; $i < $filesCount; $i++) {
	              $_FILES['uploadFile']['name'] = str_replace(",","_",$_FILES['file']['name'][$i]);
	              $_FILES['uploadFile']['type'] = $_FILES['file']['type'][$i];
	              $_FILES['uploadFile']['tmp_name'] = $_FILES['file']['tmp_name'][$i];
	              $_FILES['uploadFile']['error'] = $_FILES['file']['error'][$i];
	              $_FILES['uploadFile']['size'] = $_FILES['file']['size'][$i];

	              //Directory where files will be uploaded
	              $uploadPath = 'uploads/';


	              $config['upload_path'] = $uploadPath;
	              // Specifying the file formats that are supported.
	              $config['allowed_types'] = 'jpg|jpeg|png|pdf|doc|docx|xls|xlsx|ppt|pptx|txt|rtf';
	              $config['overwrite'] = TRUE;
				  $config['encrypt_name'] = TRUE;
	              $this->load->library('upload', $config);
	              $this->upload->initialize($config);
	              // resize library
	              $this->load->library('image_lib');

	              if ($this->upload->do_upload('file')) {
	                  $fileData = $this->upload->data();
	                  $uploadData[$i]['file_name'] = $fileData['file_name'];
	                  // echo "<pre>";print_r($fileData);exit();
	                  // resize
			            $config = array(
						    'source_image'      => $fileData['full_path'], 
						    'new_image'         => $uploadPath.'/thumb', //path to
						    'maintain_ratio'    => true,
						    'width'             => 600,
						    'height'            => 600
						);
						    $this->image_lib->initialize($config);
						    $this->image_lib->resize();
						// resize
						    
	              }

	        }

	          
	        if (!empty($uploadData)) {
	          $list=array();
	            foreach ($uploadData as $value) {
		          	$data = array(
		          		'image' => 'uploads/'.$value['file_name'],
		          		'thumb' => 'uploads/thumb/'.$value['file_name'],
		          	);

		          	//insert image into database query
		          	$this->api_m->update($data,$_POST['uid'],'blood_donors');
		          	
	          	}
	    		echo json_encode(array('st'=>1,));
		  	}else{
		    	$msg = 'Please insert an image';
		    	echo json_encode(array('st'=>0,'msg'=>$msg,));
		    }

	    }
	}


	public function change_password(){	
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		$formdata = json_decode(file_get_contents('php://input'), true);
		// echo "<pre>";print_r($formdata);exit();
		$pass = $formdata['old_password'];
		$check = $this->api_m->check_pass($pass,$formdata['id']);

		if($check){
			$data = array(
				'password' => md5($formdata['new_password']),
			);	
			$insert = $this->api_m->update($data,$formdata['id'],'blood_donors');
				if($insert){
					$msg = 'Your password change successfully';
					$response = ['st' => 1, 'msg'=> $msg,];
					
				}else{
					$msg = 'Something Were Wrong! Try again later';
					$response = ['st' => 0, 'msg'=> $msg,];
				}
			}else{
				$msg = 'Your Old password was wrong';
				$response = ['st' => 0, 'msg'=> $msg,];
			}	

			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($response));
			;
	
	}




}
