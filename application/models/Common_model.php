<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Common_model extends CI_Model {


// login context
  	public function login_info_check($email,$password)
  	{
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where("email",$email);
        $this->db->where('password', md5($password));
        $this->db->limit(1);
        $query = $this->db->get();
        if($query->num_rows() ==1){
            return $query->result();
        }else{
            return false;
        }

    }

  // get user for custom helper
 	public function get_user_info()
 	{
		$this->db->select('u.*');
		$this->db->select('(SELECT count(users.id) FROM users 
    	 	WHERE (users.is_active = 1)) 
    		AS reg_user',TRUE);
		$this->db->select('(SELECT count(users.id) FROM users) AS total_user',TRUE);
		$this->db->from('users as u');
		$this->db->where('u.id',$this->session->userdata('id'));
		$query = $this->db->get();
		$query = $query->row();
		return $query;
	}

	// get_user_info
	public function get_all_user()
	{
		$this->db->select('u.*');
		$this->db->from('users as u');
		$query = $this->db->get();
		$query = $query->result_array();
		return $query;
	}


	
	public function update_profile($data,$table)
	{
		$this->db->where('id',$this->session->userdata('id'));
		$this->db->update($table,$data);
		return 1;
	}

	// check password for change password 
  	public function check_pass($pass)
  	{
        $this->db->select('u.*');
        $this->db->from('users as u');
        $this->db->where('u.password', md5($pass));
        $this->db->where('u.id', $this->session->userdata('id'));
        $this->db->limit(1);
        $query = $this->db->get();
        if($query->num_rows() ==1){
            return $query->result();
        }else{
            return false;
        }

    }
 	
    /**
      *** Get setting 
    **/ 
	public function get_setting($table)
	{
		$this->db->select();
		$this->db->from($table);
		$query = $this->db->get();
		$query = $query->row();
		return $query;
	} 



	public function insert($data,$table)
	{
		$this->db->insert($table,$data);
		return $this->db->insert_id();
	}

	public function select($table)
	{
		$this->db->select();
		$this->db->from($table);
		$query = $this->db->get();
		$query = $query->result_array();
		return $query;
	}

	public function select_desc($table)
	{
		$this->db->select();
		$this->db->from($table);
		$this->db->order_by('id','DESC');
		$query = $this->db->get();
		$query = $query->result_array();
		return $query;
	}
	public function single_select_by_id($id,$table)
	{
		$this->db->select();
		$this->db->from($table);
		$this->db->where('id',$id);
		$query = $this->db->get();
		$query = $query->row();
		return $query;

	}

	public function update($data,$id,$table)
	{
		$this->db->where('id',$id);
		$this->db->update($table,$data);
		return $id;
	}

	function delete($id,$table)
	{
		$this->db->delete($table,array('id'=>$id));
		return $id;
	}
	

}