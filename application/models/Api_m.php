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
	public function single_select_by_id($id,$table)
	{
		$this->db->select();
		$this->db->from($table);
		$this->db->where('id',$id);
		$query = $this->db->get();
		$query = $query->row_array();
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