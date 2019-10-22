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
		$user_info = $this->api_m->get_login_user_info($id,'blood_donner');
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($user_info));
		;
		
	}

	public function add_user(){

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

		$formdata = json_decode(file_get_contents('php://input'), true);

		if (empty($formdata)) {
			$msg = 'Field must not be empty!!';
			$response = ['st' => 0, 'msg'=> $msg,];
		}else{	
			$data = array(
				'name' => $formdata['name'],
				'phone' => $formdata['phone'],
				'blood_group' => $formdata['blood_group'],
				'gender' => $formdata['gender'],
				'address' => $formdata['address'],
			);

			if(isset($formdata['id']) && $formdata['id'] !=0){
				$insert = $this->api_m->update($data,$formdata['id'],'blood_donner');
			}else{
				$insert = $this->api_m->insert($data,'blood_donner');
			}
			
			if($insert){
				$msg = 'Registration Successfull';
				$response = ['st' => 1, 'msg'=> $msg,];
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
						'phone' => $row['name'],
						'phone' => $row['phone'],
						'gender' => $row['gender'],
						'user_login' => 1,
					);

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


}
