import React, { Component } from 'react'
import $ from "jquery";
import ProfileInfo from './common/ProfileInfo';
import MyInfo from './common/MyInfo';
import ProfileBanner from './common/ProfileBanner';
import ChangePassword from './common/ChangePassword';
import DonateDate from './common/DonateDate';
// import Toaster from '../inc/Toaster';
// import { ToastProvider, useToasts } from 'react-toast-notifications'


export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           id:'0',
            
        } 
        if(props.user){
            this.state = this.props.user
          } else {
            this.state = this.state;
        }
     
        this.TabHandler = this.TabHandler.bind(this);
        
    }

   

    TabHandler = (e) => {
        var ID = e.target.getAttribute('data-id');
        $(ID).addClass('active');
    //    console.log(ID)
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

    // const Demo = ({ content, toastManager }) => (
    //     toastManager.add(content, {
    //       appearance: 'success',
    //       autoDismiss: true,
    //       pauseOnHover: false,
    //     })
    //   );
      
  
    render() {
        // console.log(this.state.tabActive)
        
        return (
            <div>  
                <ProfileBanner user = {this.props.user} />
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
                                        <a className="nav-link" data-id="password" data-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="false" onClick={this.TabHandler}>Change Password</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-id="donate_date" data-toggle="tab" href="#donate_date" role="tab" aria-controls="donate_date" aria-selected="false" onClick={this.TabHandler}>Donate Date</a>
                                    </li>
                                    
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <ProfileInfo user = {this.props.user}/>
                                    <MyInfo user={this.props.user} />
                                    <ChangePassword />
                                    <DonateDate/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {this.props.user.username === undefined ||this.props.user.username === ''?
                     <Toaster type="success" msg="Username is empty" st="1" />
                    :''
                }
                {this.props.user.designation === undefined ||this.props.user.designation === ''?
                     <Toaster type="success" msg="Designation is empty" st="0" />
                    :''
                }
                {this.props.user.email === undefined ||this.props.user.email === ''?
                    <Toaster type="success" msg="Designation is empty" st="1" />
                    :''
                } */}
            </div>
        )
    }
}

export default Profile
