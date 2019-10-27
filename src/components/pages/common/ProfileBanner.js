import React, { Component } from 'react'
import axios from "axios";
import { API_URL,IMG_URL } from "../../inc/Config";
import $ from "jquery";

export class ProfileBanner extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            file: null,
            uploadText: true,
            errorMsg: null,
            image: '',
            isProgress: false,
            id: '0',
            first_name: '',
            last_name:'',
        }
        if(props.user){
            this.state = this.props.user
          } else {
            this.state = this.state;
        }
        this.uploadFileData = this.uploadFileData.bind(this);
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


    render() {
        return (
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
                                <h4>{this.state.first_name} {this.state.last_name}</h4>
                                <h2>Blood Group: {this.state.blood_group}</h2>
                                <p>{this.state.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileBanner
