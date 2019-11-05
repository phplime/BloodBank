<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api_m extends CI_Model {


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
	public function single_select_by_id($id,$type,$table)
	{
		$this->db->select();
		$this->db->from($table);
		$this->db->where($type,$id);
		$query = $this->db->get();
		$query = $query->row_array();
		return $query;
      
	}

	public function select_by_id($id,$type,$table)
	{
		$this->db->select();
		$this->db->from($table);
		$this->db->where($type,$id);
		$this->db->order_by('id','DESC');	
		$query = $this->db->get();
		$query = $query->result_array();
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

	public function login_info_check($phone,$password)
  	{
        $this->db->select('*');
        $this->db->from('blood_donors');
        $this->db->where("phone",$phone);
        $this->db->where('password', md5($password));
        $this->db->limit(1);
        $query = $this->db->get();
        if($query->num_rows() ==1){
            return $query->result_array();
        }else{
            return false;
        }

    }


    public function check_existing_value($field_name,$value,$table)
  	{
        $this->db->select();
        $this->db->from($table);
        $this->db->where($field_name,$value);
        $this->db->limit(1);
        $query = $this->db->get();
        if($query->num_rows() ==1){
            return array('check'=>1,'result'=>$query->row_array());
        }else{
            return 0;
        }

    }

    public function get_login_user_info($id)
  	{
        $this->db->select('b.id,b.userId,b.username,blood_group,phone,gender,address,email,image,thumb,first_name,last_name,facebook,twitter,linkedin,instagram,dob,designation,about_me');
        $this->db->select('bg.id as group_id, bg.name as blood_group');
        $this->db->from('blood_donors b');
        $this->db->join('blood_group as bg','bg.id = b.blood_group');
        $this->db->where("md5(b.id)",$id);
        $query = $this->db->get();
        return $query->row_array();
    }


    public function get_all_user_info()
  	{
        $this->db->select('b.userId,b.username,blood_group,phone,gender,address,email,image,thumb,first_name,last_name,facebook,twitter,linkedin,instagram,dob,designation,about_me');
        $this->db->select('bg.id as group_id, bg.name as blood_group');
        $this->db->from('blood_donors b');
        $this->db->join('blood_group as bg','bg.id = b.blood_group');
        $query = $this->db->get();
        return $query->result_array();
    }

    public function check_pass($pass,$uid)
  	{
        $this->db->select('u.*');
        $this->db->from('blood_donors as u');
        $this->db->where('u.password', md5($pass));
        $this->db->where('u.id', $uid);
        $this->db->limit(1);
        $query = $this->db->get();
        if($query->num_rows() ==1){
            return $query->result();
        }else{
            return false;
        }

    }
	

}