import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { API_URL,IMG_URL } from "../inc/Config";
import $ from "jquery";
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
            facebook: '',
            twitter: '',
            instagram: '',
            isLoading: false,
            image: '',
            isProgress: false,
        } 
        if(props.user){
            this.state = this.props.user
          } else {
            this.state = this.state;
        }
        this.uploadFileData = this.uploadFileData.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        //
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        // this.onChange = this.onChange.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)
    }

    
    

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
       
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            id:this.state.id,
            name: this.state.name,
            email: this.state.email,
            address:this.state.address,
            gender:e.target.gender.value,
            blood_group: e.target.blood_group.value,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
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

    //upload image
    uploadFileData = (e) => {
        const file = e.target.files[0];
        this.setState({file: file})
        const url = `${API_URL}/upload_image`;
        const formData = new FormData();
        formData.append('file',file)
        formData.append('uid',this.state.id)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
            onUploadProgress: function(progressEvent) {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                $('.progress-bar').animate({width: percentCompleted+'%'});
                $('.progress-bar').text(percentCompleted+'%');
            }   
            
        }

        this.setState({isProgress: true }, () => {
            axios.post(url, formData,config)
            .then(response => {
                this.setState({
                    isProgress: false,
                    file: URL.createObjectURL(this.state.file),
                    uploadText: false,
                });
               
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
        });

    }
    // onFormSubmit(e){
    //     e.preventDefault() // Stop form submit
    //     this.fileUpload(this.state.file).then((response)=>{
    //       console.log(response.data);
    //     })
    //   }
    //   onChange(e) {
    //     this.setState({file:e.target.files[0]})
    //   }
    //   fileUpload(file){
    //     const url = `${API_URL}/upload_image`;
    //     const formData = new FormData();
    //     formData.append('file',file)
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     return  post(url, formData,config)
    //   }

    
    render() {
       
        
        return (
            <div className="container" style={{ marginTop: '50px' }}>
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
                                        <div className="profile_area" >
                                            <div className="single_profile">
                                            <form action="">
                                                <div className="profile_header">
                                                    <label className="uploader" onChange={this.uploadFileData}>
                                                        <img src={this.state.file !==undefined?this.state.file:`${IMG_URL+this.state.image}`} alt="" />
                                                        <input type="file" name="file" style={{ display: 'none' }} />
                                                        {!this.state.uploadText && !this.state.image &&
                                                            <span>
                                                                <i className="fa fa-upload"></i> <br/>
                                                                Upload Profile
                                                            </span>
                                                        }
                                                    </label>
                                                    {this.state.isProgress &&
                                                        <div className="progress custom_progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    }
                                                </div>
                                            </form>
                                            {/* <form onSubmit={this.onFormSubmit}>
                                                <h1>File Upload</h1>
                                                <input type="file" onChange={this.onChange} />
                                                <button type="submit">Upload</button>
                                            </form> */}
                                            <form action="" onSubmit={this.submitHandler}>
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

                                                    <div className="row">
                                                        <div className="form-group col-sm-6">
                                                            <div className="social_icon_area">
                                                                <div className="s_icon">
                                                                    <i className="fa fa-facebook"></i>
                                                                </div>
                                                                <input type="text"
                                                                    name="facebook"
                                                                    className="form-control"
                                                                    placeholder="Your Facebook Link"
                                                                    value={this.state.facebook}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <div className="social_icon_area">
                                                                <div className="s_icon">
                                                                    <i className="fa fa-twitter"></i>
                                                                </div>
                                                                <input type="text"
                                                                    name="twitter"
                                                                    className="form-control"
                                                                    placeholder="Your Twitter Link"
                                                                    value={this.state.twitter}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <div className="social_icon_area">
                                                                <div className="s_icon">
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                                <input type="text"
                                                                    name="instagram"
                                                                    className="form-control"
                                                                    placeholder="Your Instagram Link"
                                                                    value={this.state.instagram}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <div className="form-group text-right">
                                                        {/* <ProgressBar className="pro" animated now={45} /> */}
                                                        <input type='hidden' name="id" value={this.state.id} />
                                                        <button type="submit" className="btn btn-success" >Save Change</button>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
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
