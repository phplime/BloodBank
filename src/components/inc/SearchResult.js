import React, { Component } from 'react'
import Icofont from 'react-icofont';
import $ from "jquery";
import Login from '../inc/Login';
import {IMG_URL } from "../inc/Config";

export class SearchResult extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            userInfo: [],
            Loading: true,
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

    componentDidMount() {
        if (this.props.result) {
            setTimeout(
                function() {
                    this.setState({Loading: false});
                }
                .bind(this),
                2000
            );
        }
    }
    
    render() {
        const { show, isLoggedin, Loading } = this.state;
        if (Loading) {
            return (
                <div className="isLoading"></div>
            )
        } else {
            return (
                <div className="row">
                    {
                        this.props.result.map((user, i) => (
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
                                        {isLoggedin ?
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
                    <Login show={show} handleClose={this.closeModal} />
                </div>
            )
        }
    }
}

export default SearchResult
