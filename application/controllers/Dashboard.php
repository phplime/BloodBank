<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function __construct(){
		parent::__construct();
		check_login_user();
	}

	public function index()
	{
		$data = array();
		$data['page_title'] = "Dashboard";
        $data['page'] = "Dashboard";
		$data['main_content'] = $this->load->view('dashboard/home', $data, TRUE);
		$this->load->view('index',$data);
	}
	 
	/**
	  ** Get Total users
	**/  

	public function total_user()
	{
		$data = array();
		$data['page_title'] = "Total User";
        $data['page'] = "Dashboard";
        $data['all_user'] = $this->common_model->get_all_user();
		$data['main_content'] = $this->load->view('dashboard/total_user', $data, TRUE);
		$this->load->view('index',$data);
	}

	/**
	  **  select single user
	**/ 
	public function single_user_by_id($id)
	{
		$data = array();
		$data['page_title'] = "Edit User";
        $data['page'] = "Dashboard";
        $data['user']= $this->common_model->single_select_by_id($id,'users');
		$data['main_content'] = $this->load->view('dashboard/edit_user', $data, TRUE);
		$this->load->view('index',$data);
	}


	/**
	  **change user status by admin 
	**/ 
	public function change_status($id,$is_active)
	{

		if($is_active==0):
			$data = array('is_active' => '1',);
		else:
			$data = array('is_active' => '0',);
		endif;	
		$edit = $this->common_model->update($data,$id,'users');
		if($edit){
			if($is_active==0):
				$this->session->set_flashdata('success', 'User Account is Active Now');
			else:
				$this->session->set_flashdata('error', 'User Account is  Deactive Now ');
			endif;
			redirect($_SERVER['HTTP_REFERER']);
			}else{
			$this->session->set_flashdata('error', 'Somthing worng. Error!!');
			redirect($_SERVER['HTTP_REFERER']);
		}
		
	}

	/**
	  **  user edit
	**/ 
	public function user_edit($id)
	{
			$this->form_validation->set_rules('username', 'Username', 'trim|xss_clean');
			$this->form_validation->set_rules('gender', 'Gender', 'trim|xss_clean');
			$this->form_validation->set_rules('designation', 'Designation', 'trim|xss_clean');
			$this->form_validation->set_rules('website', 'Website', 'trim|xss_clean|valid_url');
			$this->form_validation->set_rules('address', 'Address', 'trim|xss_clean');
		if ($this->form_validation->run() == FALSE) {
			$this->session->set_flashdata('error', validation_errors());
			$this->single_user_by_id($id);
		
		}else{	
			$data = array(
				'username' => $this->input->post('username'),
				'gender' => $this->input->post('gender'),
				'designation' => $this->input->post('designation'),
				'website' => $this->input->post('website'),
				'address' => $this->input->post('address'),
			);
			$insert = $this->common_model->update($data,$id,'users');
			if($insert){
				$this->session->set_flashdata('success', 'Save change Successfull');
				redirect(base_url('dashboard/total_user'));
			}else{
				$this->session->set_flashdata('error', 'Somethings were wrong');
				redirect(base_url('dashboard/total_user'));
			}	
		}
	}


	/**
	  *** add new user by admin
	**/ 
	public function add_user()
		{
			$data = array();
			$data['page_title'] = "Add User";
	        $data['page'] = "Dashboard";
	        $data['all_user'] = $this->common_model->get_all_user();
			$data['main_content'] = $this->load->view('dashboard/add_user', $data, TRUE);
			$this->load->view('index',$data);
		}


/**
  *** Add user 
**/ 
	public function user_insert(){
		$this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');		
		$this->form_validation->set_rules('email', 'Email', 'trim|required|xss_clean|valid_email|is_unique[users.email]',array(
            'is_unique'     => 'This '.$this->input->post('email').' already exists.'
        ));		

		if ($this->form_validation->run() == FALSE) {
			$this->add_user();
		}else{	

			$length = 6;
			$randomString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);

			$data = array(
				'username' => $this->input->post('username'),
				'email' => $this->input->post('email'),
				'password' => md5($randomString),
			);
			$insert = $this->common_model->insert($data,'users');
			if($insert){
				// call send_mail function
				$this->send_mail($data,$_POST['message'],$randomString);

				$this->session->set_flashdata('success', 'New User Added Successfull');
				redirect(base_url('dashboard/total_user'));
			}else{
				$this->session->set_flashdata('error', 'Somethings were wrong');
				redirect(base_url('dashboard/total_user'));
			}
		}
	}

/**
  ** send email after registration successfull
**/
	public function send_mail($data,$msg,$password){
		$setting = $this->common_model->get_setting('setting');
        $mail_array = array();
        $mail_array['name'] = $data['username'];
        $mail_array['email'] = $data['email'];
        $mail_array['password'] = $password;
        $mail_array['message'] = $msg;
        $mail_body = $this->load->view('inc/mail_body',$mail_array,TRUE);

        if(!empty($setting->email)){
        	 $this->email->from($setting->email);
        }else{
        	 $this->email->from('admin@gmail.com');
        }
        $this->email->to($data['email']);
        $this->email->subject('Contact');
        $this->email->message($mail_body);
        $this->load->library('email');
        $this->load->library('encrypt');
        $this->email->set_mailtype('html');
        $this->email->send();
    }


/**
  *** delete user by admin
**/ 
	public function delete($id)
	{
		$del= $this->common_model->delete($id,"users");
		if($del){
			$this->session->set_flashdata('success', 'User Delete Successfully');
			redirect(base_url('dashboard/total_user'));
		}else{
			$this->session->set_flashdata('error', 'Somethings were wrong');
			redirect(base_url('dashboard/total_user'));
		}
	}


/**
  *** user profile 
**/  	
	public function profile()
	{
		$data = array();
		$data['page_title'] = "Profile";
        $data['page'] = "Dashboard";
        $data['u_info']=$this->common_model->get_user_info();
		$data['main_content'] = $this->load->view('dashboard/profile', $data, TRUE);
		$this->load->view('index',$data);
	}

/**
  *** update profile action
**/ 
	public function update_profile()
	{
		$this->form_validation->set_rules('username', 'Username', 'trim|xss_clean');
		$info = user_info();
		if($info->email == $this->input->post('email')){
			$this->form_validation->set_rules('email', 'Email', 'trim|xss_clean|valid_email');
		}else{
			$this->form_validation->set_rules('email', 'Email', 'trim|xss_clean|required|valid_email|is_unique[users.email]',array('is_unique'=>'Sorry This email already exits'));
		}
		$this->form_validation->set_rules('gender', 'Gender', 'trim|xss_clean');
		$this->form_validation->set_rules('designation', 'Designation', 'trim|xss_clean');
		$this->form_validation->set_rules('website', 'Website', 'trim|xss_clean');
		$this->form_validation->set_rules('address', 'Address', 'trim|xss_clean');
		if ($this->form_validation->run() == FALSE) {
			$this->session->set_flashdata('error', validation_errors());
			$this->profile();
			}else{	
				$data = array(
					'username' => $this->input->post('username'),
					'email' => $this->input->post('email'),
					'gender' => $this->input->post('gender'),
					'designation' => $this->input->post('designation'),
					'website' => $this->input->post('website'),
					'address' => $this->input->post('address'),
				);
				$insert = $this->common_model->update_profile($data,'users');
				if($insert){
					$this->session->set_flashdata('success', 'Save change Successfull');
					redirect(base_url('dashboard/profile'));
				}else{
					$this->session->set_flashdata('error', 'Somethings were wrong');
					redirect(base_url('dashboard/profile'));
				}	
		}
	}

/**
    *** Change password 
 **/   
	public function change_pass(){	
		$this->form_validation->set_rules('old_pass', 'Old Password', 'trim|required|min_length[5]|xss_clean');		
		$this->form_validation->set_rules('new_pass', 'New Password', 'trim|required|min_length[5]|xss_clean');
		$this->form_validation->set_rules('c_pass', 'Confirm Password', 'trim|required|min_length[5]|xss_clean|matches[new_pass]');
		if ($this->form_validation->run() == FALSE) {
			$msg = '<div class="alert alert-danger alert-dismissible">
					  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					  '.validation_errors().'
					</div>';
			echo json_encode(array('st' => 0, 'msg'=> $msg));
		}else{	
			$pass = $this->input->post('old_pass');

			$check = $this->common_model->check_pass($pass);

			if($check){
			$data = array(
				'password' => md5($this->input->post('new_pass')),
			);	
				$insert = $this->common_model->update($data,$this->session->userdata('id'),'users');
				if($insert){
					$msg = '<div class="alert alert-success alert-dismissible">
					  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					  <strong>Thank You ! </strong> Your password change successfully <i class="fa fa-smile-o"></i>
					</div>';
					
					echo json_encode(array('st' => 1, 'msg'=> $msg));
					
				}else{
					$msg = '<div class="alert alert-danger alert-dismissible">
					  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					  <strong>Sorry </strong> Try again later
					</div>';
					
					echo json_encode(array('st' => 2, 'msg'=> $msg));
				}
			}else{
				$msg = '<div class="alert alert-danger alert-dismissible">
					  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					  <strong>Sorry </strong> Your Old password was wrong
					</div>';
					
					echo json_encode(array('st' => 3, 'msg'=> $msg));
			}	

		}
	}


	/**
	  ***  settings
	**/ 
	public function settings()
	{
		$data = array();
		$data['page_title'] = "Settings";
        $data['page'] = "Dashboard";
        $data['u_info']=$this->common_model->get_user_info();
		$data['main_content'] = $this->load->view('dashboard/setting', $data, TRUE);
		$this->load->view('index',$data);
	}

	/**
	  *** add setting
	**/ 
	public function add_settings(){
			$this->form_validation->set_rules('registration_option', 'Registration Option', 'trim|xss_clean');
			$this->form_validation->set_rules('site_name', 'Site Name', 'trim|xss_clean|max_length[20]');
			$this->form_validation->set_rules('email', 'Email', 'trim|xss_clean|valid_email');
		if ($this->form_validation->run() == FALSE) {
			$this->session->set_flashdata('error', validation_errors());
			redirect(base_url('dashboard/settings'));
			}else{	
				$data = array(
					'registration_option' => $this->input->post('registration_option'),
					'site_name' => $this->input->post('site_name'),
					'email' => $this->input->post('email'),
					'post_time' => d_time(),
				);

				$setting = $this->common_model->get_setting('setting');

				if(isset($setting->id) && $setting->id !=''):
					$insert = $this->common_model->update($data,$setting->id,'setting');
				else:
					$insert = $this->common_model->insert($data,'setting');
				endif;

				if($insert){
					$this->session->set_flashdata('success', 'Save change Successfull');
					redirect(base_url('dashboard/settings'));
				}else{
					$this->session->set_flashdata('error', 'Somethings were wrong');
					redirect(base_url('dashboard/settings'));
				}	
		}
	}




/**
  *** image upload script
**/ 
	public function add_gallery_image()
	{
	    $data = array();
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

	              if ($this->upload->do_upload('uploadFile')) {
	                  $fileData = $this->upload->data();
	                  $uploadData[$i]['file_name'] = $fileData['file_name'];
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
		          	$this->common_model->insert($data,'gallery');
		          	
	          	}
	    		echo json_encode(array('st'=>1,));
		  	}else{
		    	$msg = 'Please insert an image';
		    	echo json_encode(array('st'=>0,'msg'=>$msg,));
		    }

	    }
	}



/**
  ** gallery image delete
**/
	public function delete_gallery($id)
	{
		$this->common_model->delete($id,"gallery");
		$msg = '<div class="alert alert-success alert-dismissible custom_alert" id="successMessage">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				<h4>
				<i class="icon fa fa-check"></i>
				success!
				</h4>
					Image Successfullu Deleted
				</div>';
		echo json_encode(array('st' => 1, 'msg'=> $msg));
	}



/**
  *** Backup database by admin
**/ 
	public function db_backup()
    {
        $this->load->dbutil();
		$prefs = array(     
		    'format'      => '.sql',             
		    'filename'    => 'my_db_backup.sql'
		    );
		$backup =$this->dbutil->backup($prefs);
		$db_name ='crud-backup-on-'. date("d-m-Y-H-i-s") .'.sql';
		$save = 'database/'.$db_name;
		$this->load->helper('file');
		write_file($save, $backup); 
		$this->session->set_flashdata('success', 'Database backup Successfully');
		redirect($this->agent->referrer());
    }


    // public function curl()
    // {
    //    $ch = curl_init();
	   //  curl_setopt($ch, CURLOPT_URL, "http://localhost/crud/api/item/");
	   //  curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	   //  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	   //  $data = curl_exec($ch); // string
	   //  curl_close($ch);
	   //  echo $data;
	  	// //echo json_encode($data,true);
	   //  //echo "<pre>";print_r($data);exit();
    // }

    function callAPI($method, $url, $data){
    	header('Access-Control-Allow-Origin: *');
	   $curl = curl_init();

	   switch ($method){
	      case "POST":
	         curl_setopt($curl, CURLOPT_POST, 1);
	         if ($data)
	            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	         break;
	      case "PUT":
	         curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
	         if ($data)
	            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
	         break;
	      default:
	         if ($data)
	            $url = sprintf("%s?%s", $url, http_build_query($data));
	   }

	   // OPTIONS:
	   curl_setopt($curl, CURLOPT_URL, $url);
	   curl_setopt($curl, CURLOPT_HTTPHEADER, array(
	      'APIKEY: 111111111111111111111',
	      'Content-Type: application/json',
	   ));
	   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	   curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

	   // EXECUTE:
	   $result = curl_exec($curl);
	   if(!$result){die("Connection Failure");}
	   curl_close($curl);
	   return $result;
	}

	public function curl()
    {

	$get_data = $this->callAPI('GET', 'http://localhost/crud/api/item/', false);
	$response = json_decode($get_data, true);

	// $errors = $response['response']['errors'];
	// $data = $response['response']['data'][0];
	// echo "<pre>";print_r($response);exit();


    }

	



// $ch = curl_init();
// $curlConfig = array(
//     CURLOPT_URL            => "http://www.example.com/yourscript.php",
//     CURLOPT_POST           => true,
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_POSTFIELDS     => array(
//         'field1' => 'some date',
//         'field2' => 'some other data',
//     )
// );
// curl_setopt_array($ch, $curlConfig);
// $result = curl_exec($ch);
// curl_close($ch);

}
