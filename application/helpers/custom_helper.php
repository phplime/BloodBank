<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');



    if (!function_exists('check_login_user')) {

	    function check_login_user() {
	        $ci = get_instance();
	        if ($ci->session->userdata('user_login') != TRUE) {
	            $ci->session->sess_destroy();
	            redirect(base_url('home'));
	        }
	        
	    }

	}

	if (!function_exists('user_info')) {

	    function user_info(){        
        $ci = get_instance();
        $ci->load->model('common_model');
        $data = $ci->common_model->get_user_info();        
        return $data;
  		}	
	}

	if (!function_exists('get_country')) {

	    function get_country(){        
        $ci = get_instance();
        $ci->load->model('common_model');
        $data = $ci->common_model->select('country');        
        return $data;
  		}	
	}

	if (!function_exists('settings')) {

	    function settings(){        
        $ci = get_instance();
        $ci->load->model('common_model');
        $data = $ci->common_model->get_setting('setting');        
        return $data;
  		}	
	}

	
	if(!function_exists('c_time')){
	    function c_time(){        

	        $dt = new DateTime('now', new DateTimezone('Asia/Dhaka'));
	        $date_time = $dt->format('d-m-Y');      
	        
	        return $date_time;
	    }
	}
	
	if (!function_exists('cl_format')) {

	    function cl_format($date) {
	        $ci = get_instance();
		    return date('d F, Y', strtotime($date));
	        
	    }
	}

	if(!function_exists('d_time')){
	    function d_time(){        

	        $dt = new DateTime('now', new DateTimezone('Asia/Dhaka'));
	        $date_time = $dt->format('Y-m-d H:i:s');     
	        return $date_time;
	    }
	}

	
	

	