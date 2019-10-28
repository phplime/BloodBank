import React, { Component } from 'react'
import $ from "jquery";
import {findDOMNode} from "react-dom";
import CounterTo from './pages/CounterTo';
import Slider from './pages/Slider';
import DonarList from './pages/DonarList';
// import 'react-owl-carousel2/style.css';
import img1 from "./assets/images/girl-2209147_1920.jpg";
import AllDonar from './pages/AllDonar';
import Gallery from './pages/Gallery';
// import SignUp from './pages/SignUp';
import Registration from './pages/Registration';

const portfolio = [
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
    {
        name: 'Mr. Alex', designation: "Web Developer",
        image: img1,
        details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque.'
    },
  
];




class Home extends Component {
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
                                <DonarList portfolio={portfolio} />
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
                                <AllDonar donar={portfolio}/>
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
