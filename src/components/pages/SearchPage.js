import React, { Component } from 'react'
import Icofont from 'react-icofont';
import $ from "jquery";
export class SearchPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isPhone:false,
        }
    
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


    render() {
        const {isPhone } = this.state;
        return (
            <div>
                <div className="container mt-50" >
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <div className="single_search">
                                <div className="serch_left_area">
                                    <img src="https://via.placeholder.com/80x80" alt='' />
                                    <Icofont icon="icofont-male" />
                                </div>
                                <div className="right_search_area">
                                    <div className="top_search">
                                        <h4>Username</h4>
                                        <h4>O+</h4>
                                    </div>
                                    <div className="phoneNumberArea"> 
                                        <button type="button"  onClick={this.showPhone}>Phone Number</button>
                                        <div className="phoneNumber hidden">
                                            <h5>01919821479</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="single_search">
                                <div className="serch_left_area">
                                    <img src="https://via.placeholder.com/80x80" alt='' />
                                </div>
                                <div className="right_search_area">
                                    <div className="top_search">
                                        <h4>Username</h4>
                                        <h4>O+</h4>
                                    </div>
                                    <div className="phoneNumberArea"> 
                                        <button type="button"  onClick={this.showPhone}>Phone Number</button>
                                        <div className="phoneNumber hidden">
                                            <h5>01919821479</h5>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="single_search">
                                <div className="serch_left_area">
                                    <img src="https://via.placeholder.com/80x80" alt='' />
                                </div>
                                <div className="right_search_area">
                                    <div className="top_search">
                                        <h4>Username</h4>
                                        <h4>O+</h4>
                                    </div>
                                    <div className="phoneNumberArea"> 
                                        <button type="button"  onClick={this.showPhone}>Phone Number</button>
                                        <div className="phoneNumber hidden">
                                            <h5>01919821479</h5>
                                        </div>
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

export default SearchPage
