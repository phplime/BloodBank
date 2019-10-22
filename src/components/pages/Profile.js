import React, { Component } from 'react'
import { API_URL } from "../inc/Config";
import axios from "axios";

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            file: null,
            uploadText: true,
            errorMsg: null,
            id:'0',
            name: '',
            email: '',
            address:'',
            gender:'',
            blood_group:'',
            group_id: '',
            isLoading: false,
        } 
        if(props.user){
            this.state = this.props.user
          } else {
            this.state = this.state;
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
            uploadText:false,
        })
    }
    

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
        // this.setState({value: e.target.value});
       
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            id:this.state.id,
            name: this.state.name,
            email: this.state.email,
            address:this.state.address,
            gender:e.target.gender.value,
            blood_group:e.target.blood_group.value
        }

        this.setState({isLoading: true }, () => {
            axios.post(`${API_URL}/add_user`, JSON.stringify(formData))
            .then(response => {
                this.setState({isLoading: false});
            })
            .catch(error => {
                console.log(error)
            })
        });
        
    }
    
    render() {
        // console.log(this.state)
        return (
            <div className="container" style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="profileArea">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Change Password</a>
                                </li>
                                
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className={`tab-pane fade show active ${this.state.isLoading ? 'isLoading':''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <form action="" onSubmit={this.submitHandler}>
                                        <div className="profile_area" >
                                            <div className="single_profile">
                                                <div className="profile_header">
                                                    <label className="uploader" onChange={this.handleChange}>
                                                        <img src={this.state.file !==null?this.state.file:``} alt="" />
                                                        <input type="file" name="file" style={{ display: 'none' }} />
                                                        {!this.state.uploadText &&
                                                            <span>
                                                                <i className="fa fa-upload"></i> <br/>
                                                                Upload Profile
                                                            </span>
                                                        }
                                                    </label>
                                                </div>
                                                <div className="single_profile_body">
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <input type="text" name="name" ref='name' className="form-control" value={this.state.name}  onChange={this.changeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="email" className="form-control" value={this.state.email}  onChange={this.changeHandler} />
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Blood Group</label>
                                                            <select name="blood_group" className="form-control" disabled onBlur={this.changeHandler}>
                                                                <option value={this.state.group_id}>{this.state.blood_group}</option>
                                                           </select>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Gender</label>
                                                            <select name="gender" className="form-control" disabled>
                                                                <option value={this.state.gender}>{this.state.gender}</option>
                                                           </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea name="address" id="1" className="form-control" cols="5"  rows="5" onChange={this.changeHandler} value={this.state.address}></textarea>
                                                    </div>
                                                    
                                                    <div className="form-group text-right">
                                                        <input type='hidden' name="id" value={this.state.id} />
                                                        <button type="submit" className="btn btn-success" >Save Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </form>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non quas ducimus veniam modi ipsam? Voluptas hic quam, voluptates deleniti magni dolorum aspernatur numquam deserunt consectetur tempore fuga voluptatem esse similique labore voluptate temporibus officiis modi laudantium eius sequi, iusto ducimus. Quia, accusamus ab atque quis sed molestiae voluptate nulla? Iste rem, recusandae neque necessitatibus repellat nam nihil, labore eum reprehenderit minima a blanditiis. Omnis laboriosam cum aut voluptate! Facilis quisquam vitae quidem laboriosam illum nam fugit totam! Laudantium, dolorem. Nisi aliquam odit possimus ea ipsam corporis debitis illo, totam, laboriosam, dignissimos voluptate. Repellat nihil similique debitis, eius esse dolor!
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
