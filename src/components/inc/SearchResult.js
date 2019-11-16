import React, { Component } from 'react'
import Icofont from 'react-icofont';
import $ from "jquery";
import Login from '../inc/Login';
import {IMG_URL } from "../inc/Config";
import { Link } from 'react-router-dom';
import avatar  from "../assets/images/avatar.jpg";

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
        var child;
        //  d = e.currentTarget.dataset.id 
        // alert(e.target.getAttribute('data-id'));
        $('.phoneNumberArea').removeClass('d_flex');
        $('.phoneNumber').addClass('hidden');
        $(e.target).closest('.portfolioCardBody').find('.phoneNumberArea');
        child = $(e.target).closest('.portfolioCardBody').find('.phoneNumber');
        child.toggleClass('hidden');
        
    }

    showModal = () => {
        this.setState({show:true})
    }
    closeModal = () => {
        this.setState({show:false})
    }

    componentDidMount() {
        if (this.props.result !== undefined) {
            setTimeout(
                function() {
                    this.setState({Loading: false});
                }
                .bind(this),
                2000
            );
        } else {
            this.setState({Loading: false}); 
        }
    }
    
    render() {
        
        const { show, isLoggedin, Loading } = this.state;
        if (Loading) {
            return (
                <div className="isLoading"></div>
            )
        } else {
            if (this.props.error) {
                return (<div>{this.props.error}</div>)
            } else {
                return (
                    <div className="row">
                        {
                        this.props && this.props.status === 1 ?
                            this.props.result.map((user, i) => (
                                <div className="portfolioCard donarList search_list col-sm-3 pl-0 pr-0" key={i}>
                                    <div className="portfolioCardTop donarList">
                                        <div className="PortfolioCovetTop">
                                            <div className="portfolioCardHeader donarList search_list">
                                                {user.image !== '' ?
                                                    <img src={`${IMG_URL}/${user.image}`} alt="" />
                                                    :
                                                    <img src={`${avatar}`} alt="" />
                                                }
                                            </div>
                                            <div className="portfolioCardBody donarList text-center">
                                                <div className="portfolioBodyTopper donarList">
                                                    <div className="portfolioBodyTop">
                                                        <h5><Icofont className="blood" icon="icofont-blood-drop" /> {user.blood_group} </h5>
                                                        <h4>{user.first_name} {user.last_name}</h4>
                                                        <p>{user.date?user.date.donate_date:'New Donor'}</p>
                                                    </div>
                                                    <div className="portfolioDetails phoneNumberArea">
                                                        {isLoggedin ?
                                                            <h5><button type="button" onClick={this.showPhone}><Icofont icon="icofont-phone" /></button> <span className="phoneNumber hidden">{user.phone}</span></h5>
                                                            :<button type="button"onClick={this.showModal}><Icofont icon="icofont-phone" /></button> 
                                                        }
                                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolioCardFooter donarList">
                                            <ul className="social_ul">
                                                <li><Link to=""><Icofont icon="facebook" /></Link></li>
                                                <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to=""><i className="fa fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                                
                            :
                                <div className="text-center data-not-found" >
                                    <h4><Icofont icon="icofont-sad" /></h4>
                                    <h5>Sorry Data Not found</h5>
                                </div>
                                
                        }
                        <Login show={show} handleClose={this.closeModal} />
                    </div>
                )
            }
        }
    }
}

export default SearchResult
