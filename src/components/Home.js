import React, { Component } from 'react'
import $ from "jquery";
import axios from "axios";
import { API_URL } from "./inc/Config";
import {findDOMNode} from "react-dom";
import CounterTo from './pages/CounterTo';
import Slider from './pages/Slider';
import DonarList from './pages/DonarList';
import AllDonar from './pages/AllDonar';
import Gallery from './pages/Gallery';
import Registration from './pages/Registration';

class Home extends Component {
    
    constructor(props) {
        super(props)
        this._isMounted = false;
        this.state = {
            loading: false,
            userInfo: [],
            error:'',
        }
        
    }
    
    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.getAll_donnor()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    getAll_donnor =  () => {
        this.setState({Loading: true }, () => {
            axios.get(`${API_URL}/get_all_user_info`)
                .then(response => {
                    this._isMounted && this.setState({
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
    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
    }
    // componentWillMount(){
    //     window.addEventListener("beforeunload", (ev) => 
    //     {  
    //         ev.preventDefault();
    //         localStorage.remove('logData');
    //         localStorage.remove('mydata');
            
    //     })
    // }
    

    render() {
        // console.log(this.state)
        return (
            <div>
                <div className="sliderarea" ref="toggle">
                    <Slider/>
                </div>
                <div className="contentWarpper text-center">
                    <div className="container">
                        <div className="defaultHeading">
                            <div className="heading_text">
                                <h2>DONATION PROCESS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque!</p>
                            </div>
                        </div>
                        <div className="donation_progress_area mt-20">
                            <div className="row">
                                <CounterTo />
                            </div>
                        </div>
                   </div>
                </div>

                <div className="contentWarpper text-center">
                    <div className="container">
                        <div className="defaultHeading">
                            <div className="heading_text">
                                <h2>SignUp</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque!</p>
                            </div>
                        </div>
                        <div className="donation_progress_area mt-20">
                            <div className="row">
                                <div className="col-sm-6 offset-3 text-left">
                                        <Registration/>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                <div className="contentWarpper text-center">
                    <div className="container">
                        <div className="defaultHeading">
                            <div className="heading_text">
                                <h2>DONATION PROCESS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque!</p>
                            </div>
                        </div>
                        <div className="donation_progress_area mt-20">
                            <div className="portfolio_slider">
                                <DonarList portfolio={this.state} />
                            </div>
                        </div>
                   </div>
                </div>

                <div className="contentWarpper text-center">
                    <div className="container">
                        <div className="defaultHeading">
                            <div className="heading_text">
                                <h2>DONATION PROCESS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque!</p>
                            </div>
                        </div>
                        <div className="donation_progress_area mt-20">
                            <div className="portfolio_slider">
                                <AllDonar donar={this.state.userInfo}/>
                            </div>
                        </div>
                   </div>
                </div>

                <div className="contentWarpper text-center">
                    <div className="container">
                        <div className="defaultHeading">
                            <div className="heading_text">
                                <h2>Gallery</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque!</p>
                            </div>
                        </div>
                        <div className="donation_progress_area mt-20">
                            <div className="portfolio_slider">
                                <Gallery/>
                            </div>
                        </div>
                   </div>
                </div>
                
            </div>
        )
    }
}

export default Home
