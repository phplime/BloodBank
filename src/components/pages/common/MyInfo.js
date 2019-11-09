import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from "../../inc/Config";

export class MyInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id:'0',
            first_name: '',
            last_name: '',
            address:'',
            about_me:'',
            gender:'',
            blood_group:'',
            group_id: '',
            active: false,
            ExistingLoading: false,
            infoLoading: false,
        }
        if(props.user){
            this.state = this.props.user
        } else {
            this.state = this.state;
        }
        this.infoSubmitHandler = this.infoSubmitHandler.bind(this);
    }
    

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
       
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
            about_me: this.state.about_me,
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
                return null
            })
        });
        
    }
    render() {
        return (
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
                                    <label>About Me</label>
                                    <textarea name="about_me" id="1" className="form-control" cols="5"  rows="5" onChange={this.changeHandler} value={this.state.about_me} placeholder="About Your self"></textarea>
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
        )
    }
}

export default MyInfo