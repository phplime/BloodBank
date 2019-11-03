import React, { Component } from 'react'
import axios from "axios";
import $ from "jquery";
// import DateTimeField  from "react-bootstrap-datetimepicker";
import { API_URL } from "../../inc/Config";

export class ProfileInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'0',
            username: '',
            email: '',
            facebook: '',
            designation: '',
            dob: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            ExistingLoading: false,
            isLoading: false,
            st:'',
            readonly: false,
            
        }
        if(props.user){
            this.state = this.props.user
        } else {
            this.state = this.state;
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.profileHandler = this.profileHandler.bind(this);
        this.existingHandler = this.existingHandler.bind(this);
        
    }

    profileHandler = (e) => {
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
            username: this.state.username,
            email: this.state.email,
            designation: this.state.designation,
            dob: this.state.dob,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
        }
        

       

        this.setState({ isLoading: true }, () => {

            if (this.state.st===1 || this.state.readonly===undefined) {
                axios.post(`${API_URL}/add_user`, JSON.stringify(formData))
                    .then(response => {
                        this.setState({
                            isLoading: false,
                            // readonly:false,
                        });
                        $('.st_alert').html(``);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }else if(this.state.st === 0){
                $('.st_alert').html(`Sorry Your Name Is Already Exists`);
                this.setState({ isLoading: false });
            } else {
                this.setState({ isLoading: false });
                $('.st_alert').html(``);
            }



        });
        
    }

    existingHandler = (e) => {
        e.preventDefault();
        var username = this.removeExtra(e.target.value)
        this.setState({
            username:username
        })

        const formData = {
            field_name: 'username',
            table: 'blood_donors',
            value: username,
        }

        this.setState({ExistingLoading: true }, () => {
            axios.post(`${API_URL}/check_existing_value`, JSON.stringify(formData))
                .then(response => {
                    this.setState({
                        ExistingLoading: false,
                        st:response.data.st,
                    })
                    $('.errorMsg').html(response.data.msg);
               
            })
            .catch(error => {
                console.log(error)
            })
        });
        
    }

    

    removeExtra(text) {
       return  text.replace(/[^a-zA-Z]/g, '');
    }
    
    
    handleToggle = () => {
       
        if (this.state.readonly === false || this.state.readonly === undefined) {
            this.setState({ readonly: true })
        } 
        // const el = findDOMNode(this.refs.toggle);
        // $(el).attr('readonly', function (_, attr) { return !attr });
        
    }
    
    render() {
        const {id,username, email,facebook, designation,dob,twitter,instagram,linkedin,ExistingLoading,isLoading,st,readonly} = this.state;
        return (
            <div className={`tab-pane fade show active ${isLoading ? 'isLoading':''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className={`profile_area `} >
                    <div className="single_profile">
                    <form action="" onSubmit={this.submitHandler}>
                        <div className="single_profile_body">
                            
                            <div className="form-group">
                               <div className="button_group">
                                    <label>Username</label>
                                        <button type="button" className="editBtn" onClick={() => window.confirm("Are you sure? You Have to change username after this!") && this.handleToggle()}><i className="fa fa-edit"></i></button>
                               </div>
                                <div className="p-r">
                                    <input type="text" name="username" className="form-control" readOnly={readonly?false:true} value={username} onChange={this.existingHandler} />
                                        {ExistingLoading
                                            ?
                                            <p className="errorMsg"><i className="fa fa-spinner fa-spin"></i></p>
                                            :
                                            <p className="errorMsg"></p>
                                        }
                                    {st===0 &&
                                    <p className="st_alert"></p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" value={email}  onChange={this.profileHandler} />
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6 col-lg-6 col-xs-12">
                                    <div className="social_icon_area">
                                        <div className="s_icon">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                        <input type="date"
                                            name="dob"
                                            className="form-control"
                                            placeholder="Date Of Birth"
                                            value={dob}
                                            onChange={this.profileHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-sm-6 col-lg-6 col-xs-12">
                                    <div className="social_icon_area">
                                        <div className="s_icon">
                                            <i className="fa fa-user-circle"></i>
                                        </div>
                                        <input type="text"
                                            name="designation"
                                            className="form-control"
                                            placeholder="Your Designation"
                                            value={designation}
                                            onChange={this.profileHandler}
                                        />
                                    </div>
                                </div>
                            </div>   
                            <div className="">
                                    <div className="row social_area">
                                    <div className="col-sm-12 social_area_top">
                                        <h5>Social Network</h5>    
                                    </div>
                                    <div className="form-group col-sm-6 col-lg-6 col-xs-12">
                                        <div className="social_icon_area">
                                            <div className="s_icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <input type="text"
                                                name="facebook"
                                                className="form-control"
                                                placeholder="Your Designation"
                                                value={facebook}
                                                onChange={this.profileHandler}
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
                                                value={twitter}
                                                onChange={this.profileHandler}
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
                                                value={instagram}
                                                onChange={this.profileHandler}
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
                                            value={linkedin}
                                            onChange={this.profileHandler}
                                        />
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            
                            <div className="form-group text-right">
                                {/* <ProgressBar className="pro" animated now={45} /> */}
                                <div className="form_footer">
                                    <input type='hidden' name="id" value={id} />
                                    <button type="submit" className="btn btn-success" >Save Change</button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
       
    }
}

export default ProfileInfo
