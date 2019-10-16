import React, { Component } from 'react'
import md5 from "md5";
import axios from "axios";

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            file: null,
            uploadText: true,
            errorMsg:null,
            user: {},
            name: '',
            email: '',
            address:'',
        } 
        // this.handleChange = this.handleChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
            uploadText:false,
        })
    }
    
    componentDidMount() {
        axios.get(`http://localhost/blood/api/get_login_user_info/${md5(localStorage.getItem('ID'))}`)
        .then(response => {
            this.setState({
                user: response.data,
            });
        })
        .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'Error retreiving data' })
        })
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const {user} = this.state;
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
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <form action="">
                                        <div className="profile_area" >
                                            <div className="single_profile">
                                                <div className="profile_header">
                                                    <label className="uploader" onChange={this.handleChange}>
                                                        <img src={this.state.file !==null?this.state.file:``} alt="" />
                                                        <input type="file" name="file" style={{ display: 'none' }} />
                                                        {this.state.uploadText &&
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
                                                        <input type="text" name="name" className="form-control" value={user['name']}  onChange={this.changeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="email" className="form-control" value={user['email']}  onChange={this.changeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea name="address" id="" className="form-control" cols="5"  rows="5" onChange={this.changeHandler} value={user['address']}></textarea>
                                                    </div>
                                                    <div className="form-group text-right">
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
