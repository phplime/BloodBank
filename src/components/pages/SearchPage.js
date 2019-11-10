import React, { Component } from 'react'
import Icofont from 'react-icofont';
import $ from "jquery";
import Login from '../inc/Login';
import axios from 'axios';
// import md5 from 'md5';
import { API_URL,IMG_URL } from "../inc/Config";
export class SearchPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            userInfo: [],
            Loading: false,
            isLoggedin: localStorage.getItem('isLogin'),
        }
        this._isMounted = false;
    }
    
    showPhone = (e) => {
        var parent, child;
        //  d = e.currentTarget.dataset.id 
        // alert(e.target.getAttribute('data-id'));
        $('.phoneNumberArea').removeClass('d_flex');
        $('.phoneNumber').addClass('hidden');
        parent = $(e.target).closest('.single_search').find('.phoneNumberArea');
        parent.toggleClass('d_flex');
        child = $(e.target).closest('.single_search').find('.phoneNumber');
        child.toggleClass('hidden');
        
    }

    showModal = () => {
        this.setState({show:true})
    }
    closeModal = () => {
        this.setState({show:false})
    }

    

    searchList = () => {
        this.setState({Loading: true }, () => {
            axios.get(`${API_URL}/get_all_user_info`)
                .then(response => {
                 this.setState({
                    userInfo: response.data,
                    Loading: false,
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    Loading: false,
                    error:error
                });
                return null;
            })
           
        });
    }


    render() {
        const { show, userInfo, isLoggedin } = this.state;
        return (
            <div>
                <div className="container mt-50" >
                    <button onClick={this.searchList}>showlist</button>
                    <div className="row">
                        {
                            userInfo.map((user, i) => (
                                <div className="col-sm-6 col-xs-12" key={i}>
                                    <div className="single_search">
                                        <div className="serch_left_area">
                                            <img src={`${IMG_URL}/${user.thumb}`} alt='' />
                                            {user.gender === 'Male' ?
                                                <Icofont icon="icofont-male" />  
                                                : 
                                                <Icofont icon="icofont-female" />
                                            }
                                        </div>
                                        <div className="right_search_area">
                                            <div className="top_search">
                                                <h4>{user.first_name} {user.last_name}</h4>
                                                <h4>{user.blood_group}</h4>
                                            </div>
                                                {isLoggedin?
                                                    <div className="phoneNumberArea">
                                                        <button type="button" onClick={this.showPhone}>Phone Number</button>
                                                        <div className="phoneNumber hidden">
                                                            <h5>{user.phone}</h5>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className="phoneNumberArea">
                                                        <button type="button" onClick={this.showModal}>Phone Number</button>
                                                    </div>
                                                }
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }
                        
                    </div>
                </div>
                <Login show={show} handleClose={this.closeModal}/>
            </div>
        )
    }
}

export default SearchPage
