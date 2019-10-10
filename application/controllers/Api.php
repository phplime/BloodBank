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
			
			$insert = $this->api_m->insert($data,'blood_donner');
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


}
