<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct(){
		parent::__construct();
	}

	public function index()
	{
		$data = array();
		$data['page_title'] = "Login";
        $data['page'] = "User Panel";
		$data['main_content'] = $this->load->view('login', $data, TRUE);
		$this->load->view('index',$data);
	}
	
	
/**
  *** login action
**/ 
	public function user_login()
	{
			$this->form_validation->set_rules('email', 'Email', 'trim|required|xss_clean|valid_email');		
			$this->form_validation->set_rules('password', 'password', 'trim|required|xss_clean');
		if ($this->form_validation->run() == FALSE) {
			$msg = '<div class="alert alert-danger alert-dismissible">
				  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				  <strong>Sorry ! </strong> '.validation_errors().'
				</div>';
			echo json_encode(array('st' => 0, 'msg'=> $msg,));
		}else{	
			$email = $this->input->post('email');
			$password = $this->input->post('password');
			$query = $this->common_model->login_info_check($email,$password);
			if($query){
				$s_array= array();
				foreach($query as $row):
					$s_array = array(
						'id' => $row->id,
						'username' => $row->username,
						'email' => $row->email,
						'user_type' => $row->user_type,
						'is_active' => $row->is_active,
						'user_login' => TRUE,
					);
					
				if($row->is_active == 1):
					$url = base_url('dashboard');
					$this->session->set_userdata($s_array);
					$data =array(
						'login_time' => d_time()
					);
					
					$this->common_model->update($data,$row->id,'users');
					$msg = '<div class="alert alert-success alert-dismissible">
							  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
							  <strong>Welcome ! </strong> Login successfull <i class="fa fa-smile-o"></i>

							</div>';
							echo json_encode(array('st' => 1, 'msg'=> $msg, 'url'=> $url));
					else:
						$msg = '<div class="alert alert-danger alert-dismissible">
							  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
							  <strong>Sorry ! </strong> Your account is not approved <i class="fa fa-frown-o"></i>

							</div>';
							echo json_encode(array('st' => 2, 'msg'=> $msg));
					endif;
				
				
				endforeach;

			}else{
				$msg = '<div class="alert alert-danger alert-dismissible">
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						<strong>Sorry  ! </strong> Login invalid <i class="fa fa-frown-o" ></i>
						</div>';
						echo json_encode(array('st' => 3, 'msg'=> $msg));
			} 
			//end login_info_check if

		} 
		//end validation if	
	}

/**
  *** Registration 
**/ 
	public function register()
	{
		$data = array();
		$data['page_title'] = "Registration";
        $data['page'] = "Admin Panel";
		$data['main_content'] = $this->load->view('register', $data, TRUE);
		$this->load->view('index',$data);
	}

/**
  *** user registration option 
**/ 
	public function user_insert(){
		$this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');		
		$this->form_validation->set_rules('email', 'Email', 'trim|required|xss_clean|valid_email|is_unique[users.email]',array('is_unique'=>'The email is already Exists'));			
		$this->form_validation->set_rules('gender', 'Gender', 'trim|required');		
		$this->form_validation->set_rules('password', 'password', 'trim|required|xss_clean|min_length[4]');
		$this->form_validation->set_rules('cpassword', 'Confirm password', 'trim|required|xss_clean|matches[password]');
		if ($this->form_validation->run() == FALSE) {
			$msg = '<div class="alert alert-danger alert-dismissible">
				  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				  <strong>Sorry ! </strong> '.validation_errors().'
				</div>';
			echo json_encode(array('st' => 0, 'msg'=> $msg,));
		}else{	
			$data = array(
				'username' => $this->input->post('username'),
				'email' => $this->input->post('email'),
				'gender' => $this->input->post('gender'),
				'password' => md5($this->input->post('password')),
			);

			$insert = $this->common_model->insert($data,'users');
			if($insert){
				$msg = '<div class="alert alert-success alert-dismissible">
				  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				  <strong>Success ! </strong> Data Insert Successfully
				</div>';
				echo json_encode(array('st' => 1, 'msg'=> $msg,));
			}else{
				$msg = '<div class="alert alert-danger alert-dismissible">
					  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					  <strong>Sorry ! </strong> Somethings Were Wrong
					</div>';
				echo json_encode(array('st' => 0, 'msg'=> $msg,));
			
			}	
		}
		//end validation check
	}



/**
  ***  Logout
**/ 
	public function logout()
	{
        $this->session->unset_userdata('user_login');
        $this->session->sess_destroy();
        $sdata = array();
        $sdata['msg'] = 'You are Successfully logout';
        $this->session->set_userdata($sdata);
        redirect('home','refresh');
    }

	

}
