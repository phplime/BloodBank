import React, { Component } from 'react'
import {IMG_URL,API_URL } from "../inc/Config";
import { Link } from 'react-router-dom';
import avatar from "../assets/images/avatar.jpg";
import Icofont from 'react-icofont';
import axios from 'axios';

export class MyAreaDonor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Loading: false,
            myDonar:[],
        }
        
    }
    componentDidMount() {
        this.getMy();
    }
    getMy = () => {
        this.setState({ Loading: true }, () => {
            var logData = JSON.parse(localStorage.getItem('logData'));
            axios.get(`${API_URL}/get_my_area_donor/${logData['upazila']}`,)
            .then(response => {
                this.setState({
                    myDonar: response.data,
                    Loading: false,
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    Loading: false,
                    error: error,
                });
                return null;
            })
            
        }); 
    }
    
    render() {
        
        const { Loading, myDonar } = this.state;
        if (Loading) {
            return (<div className="isLoading"></div>)
        } else {
            if (myDonar.length > 0) {
                return (
                    <div>
                        <div className="my_banner_area">
                            <div className="container">
                                <div className="my_single_banner text-center">
                                    <h4>{myDonar[0].upazila_name} Upazila</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-20">
                            <div className="row">
                                {myDonar && myDonar.map((user, i) => (
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
                                                            <p>Last Donate : {user.date ? user.date.donate_date : 'New Donor'}</p>
                                                        </div>
                                                        <div className="portfolioDetails phoneNumberArea">
                                                            <h5><Icofont icon="icofont-phone" /><span className="phoneNumber"> {user.phone}</span></h5>
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
                                ))}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="text-center">
                        <h4>Data Not Found</h4>
                    </div>
                )
            }
        }
    }
}

export default MyAreaDonor
