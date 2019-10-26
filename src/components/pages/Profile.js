import React, { Component } from 'react'
// import { ProgressBar } from 'react-bootstrap'
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
            isLoading: false,
            infoLoading: false,
            image: '',
            isProgress: false,
            id:'0',
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            address:'',
            gender:'',
            blood_group:'',
            group_id: '',
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            active: false,
            ExistingLoading: false,
        } 
        if(props.user){
            this.state = this.props.user
          } else {
            this.state = this.state;
        }
        this.uploadFileData = this.uploadFileData.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.infoSubmitHandler = this.infoSubmitHandler.bind(this);
        this.TabHandler = this.TabHandler.bind(this);
        this.existingHandler = this.existingHandler.bind(this);
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

    TabHandler = (e) => {
        var ID = e.target.getAttribute('data-id');
        $(ID).addClass('active');
       
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            id:this.state.id,
            username: this.state.username,
            email: this.state.email,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
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

    infoSubmitHandler = (e) => {
        e.preventDefault();
        
        const infoData = {
            id:this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address:this.state.address,
            gender:e.target.gender.value,
            blood_group: e.target.blood_group.value,
        }

        this.setState({infoLoading: true }, () => {
            axios.post(`${API_URL}/add_user`, JSON.stringify(infoData))
            .then(response => {
                this.setState({
                    infoLoading: false,
                    active:true
                });
            })
            .catch(error => {
                console.log(error)
            })
        });
        
    }



    existingHandler = (e) => {
        e.preventDefault();
        this.setState({
            username:e.target.value
        })
        var extra = this.removeExtra(this.state.username)
        console.log(extra)
        // const formData = {
        //     field_name: 'username',
        //     table: 'blood_donors',
        //     value: extra,
        // }

        // this.setState({ExistingLoading: true }, () => {
        //     axios.post(`${API_URL}/check_existing_value`, JSON.stringify(formData))
        //         .then(response => {
        //             this.setState({ ExistingLoading: false})
        //             $('.errorMsg').html(response.data.msg);
               
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // });
        
    }


    removeExtra(text){
        // return this.value = text.split(' ').join('');
        // let newText = text.split('\n').map(i => {
        //     return <p>{i}</p>
        // });
        const re = /^[0-9\b]+$/;
        if (text === '' || re.test(text)) {
            return text;
        } else {
            return false;
        }
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
        // console.log(this.state.tabActive)
        
        return (
            <div>  
                <div className="default_header_area">
                    <div className="container">
                        <div className="default_header profile_banner">
                            <div className="default_header_warper">
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
                                <div className="userDetails text-center">
                                    <h4>{this.state.first_name + this.state.last_name}</h4>
                                    <h2>Blood Group: {this.state.blood_group}</h2>
                                    <p>{this.state.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '50px' }}>
                    <div className="row">
                        <div className="col-sm-6 offset-md-3 col-xs-12 offset-xs-0">
                            <div className="profileArea">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-id="home" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={this.TabHandler}>Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " data-id="myInfo" data-toggle="tab" href="#myInfo" role="tab" aria-controls="myInfo" aria-selected="false" onClick={this.TabHandler}>My Information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-id="profile" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={this.TabHandler}>Change Password</a>
                                    </li>
                                    
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={`tab-pane fade show active ${this.state.isLoading ? 'isLoading':''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="profile_area" >
                                            <div className="single_profile">
                                            {/* <form onSubmit={this.onFormSubmit}>
                                                <h1>File Upload</h1>
                                                <input type="file" onChange={this.onChange} />
                                                <button type="submit">Upload</button>
                                            </form> */}
                                            <form action="" onSubmit={this.submitHandler}>
                                                <div className="single_profile_body">
                                                    
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <div className="p-r">
                                                            <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.existingHandler} />
                                                                {this.state.ExistingLoading
                                                                    ?
                                                                    <p className="errorMsg"><i className="fa fa-spinner fa-spin"></i></p>
                                                                    :
                                                                    <p className="errorMsg"></p>
                                                             }
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="email" className="form-control" value={this.state.email}  onChange={this.changeHandler} />
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-sm-6 col-lg-6 col-xs-12">
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
                                                        <div className="form-group col-sm-6 col-lg-6 col-xs-12">
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
                                                        <div className="form-group col-sm-6 col-lg-6 col-xs-12">
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
                                                        <div className="form-group col-sm-6 col-lg-6 col-xs-12">
                                                            <div className="social_icon_area">
                                                                <div className="s_icon">
                                                                    <i className="fa fa-linkedin"></i>
                                                                </div>
                                                                <input type="text"
                                                                    name="linkedin"
                                                                    className="form-control"
                                                                    placeholder="Your Linkedin Link"
                                                                    value={this.state.linkedin}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <div className="form-group text-right">
                                                        {/* <ProgressBar className="pro" animated now={45} /> */}
                                                        <div className="form_footer">
                                                            <input type='hidden' name="id" value={this.state.id} />
                                                            <button type="submit" className="btn btn-success" >Save Change</button>
                                                       </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade show ${this.state.active?'active':''} ${this.state.infoLoading ? 'isLoading active':''}`} id="myInfo" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="profile_area" >
                                            <div className="single_profile">
                                            {/* <form onSubmit={this.onFormSubmit}>
                                                <h1>File Upload</h1>
                                                <input type="file" onChange={this.onChange} />
                                                <button type="submit">Upload</button>
                                            </form> */}
                                                <form action="" onSubmit={this.infoSubmitHandler}>
                                                    <div className="single_profile_body">
                                                        <div className="row">
                                                            <div className="form-group col-sm-6">
                                                                <label>First Name</label>
                                                                <input type="text" name="first_name" ref='name' className="form-control" value={this.state.first_name}  onChange={this.changeHandler} />
                                                            </div>
                                                            <div className="form-group col-sm-6">
                                                                <label>Last Name</label>
                                                                <input type="text" name="last_name" ref='name' className="form-control" value={this.state.last_name}  onChange={this.changeHandler} />
                                                            </div>
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
                                                            {/* <ProgressBar className="pro" animated now={45} /> */}
                                                            <div className="form_footer">
                                                                <input type='hidden' name="id" value={this.state.id} />
                                                                <button type="submit" className="btn btn-success" >Save Change</button>
                                                           </div>
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
            </div>
        )
    }
}

export default Profile
