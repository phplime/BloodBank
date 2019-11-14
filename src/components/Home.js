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
import Icofont from 'react-icofont';
import { get_allUserInfo, bloodGroup } from './inc/Functions'
// import SearchResult from './inc/SearchResult';
import SearchPage from './pages/SearchPage';
// import {Route } from 'react-router-dom'
// import _ from 'lodash';

class Home extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            loading: false,
            userInfo: [],
            error: '',
            group: '',
            search:'',
            all_group:[],
            search_result: [],
            is_search: false,
            status:''
        }
        this._isMounted = false;
        // this.getAll_donnor = _.debounce(this.getAll_donnor, 500); 
    }
    
    

    componentWillUnmount() {
        this._isMounted = false;
        
    }
    async componentDidMount() {
        this._isMounted = true; 
        this._isMounted && this.getAll_donnor()
        this._isMounted && this.get_all_blood_group()
       // if (typeof console._commandLineAPI !== 'undefined') {
       //     console.API = console._commandLineAPI;
       // } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
       //     console.API = console._inspectorCommandLineAPI;
       // } else if (typeof console.clear !== 'undefined') {
       //     console.API = console;
       // }
       // console.API.clear()
     
       
   }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            search: this.state.search,
            group: this.state.group,  
        }
        this.setState({ Loading: true }, () => {
            axios.post(`${API_URL}/search`, JSON.stringify(data))
            .then(response => {
                    this._isMounted && this.setState({
                        search_result: response.data.data,
                        Loading: false,
                        is_search: true,
                        status:response.data.st
                    });
                
                // window.location.href = '/SearchPage';
                    // browserHistory.push('/SearchPage') 
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

    get_all_blood_group = () => {
        if (this._isMounted) {
            var a = bloodGroup();
            a.then((result) => {
                this.setState({
                    all_group: result,
                })
            
            })
        }
        
    }


    getAll_donnor = () => {
        this.setState({ Loading: true }, () => {
            var a = get_allUserInfo();
            a.then((result) => {
                this._isMounted && this.setState({
                    userInfo: result,
                    Loading: false,
                })
            })
            .catch(error => {
                this.setState({
                    Loading: false,
                    error:'data not found'
                });
                return null;
            })
           
        });
    }
    // getAll_donnor =  () => {
    //     this.setState({Loading: true }, () => {
    //         axios.get(`${API_URL}/get_all_user_info`)
    //             .then(response => {
    //                 this._isMounted && this.setState({
    //                 userInfo: response.data,
    //                 Loading: false,
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({
    //                 Loading: false,
    //                 error:error
    //             });
    //             return null;
    //         })
           
    //     });
    // }


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
        //  console.log(this.state.search_result)
        const {search_result, status, is_search, all_group} = this.state;
        if (is_search) {
            return (
              <SearchPage result={search_result} status={status} />
            )
        } else {
            return (
                <div>
                    <div className="sliderarea" ref="toggle">
                        <Slider />
                    </div>
                    <div className="searchArea">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2">
                                    <form action="" onSubmit={this.submitHandler}>
                                        <div className="slider_content">
                                            <div className="search_input">
                                                <input type="text" name="search" className="form-control" onChange={this.changeHandler} placeholder="search with Name or place" />
                                            </div>
                                            <div className="group_list">
                                                <select name="group" className="form-control" onChange={this.changeHandler}>
                                                    <option value="">Blood Group</option>
                                                    {all_group.map((group, i) => (
                                                        <option value={group.id} key={i}>{group.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="searchHomeBtn">
                                                <button type="submit" className="btn btn-primary"> <Icofont icon="search-user" /> <span>Search</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <SearchPage /> */}
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
                                        <Registration />
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
                                    <AllDonar donar={this.state.userInfo} />
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
                                    <Gallery />
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            )
        }
    }
}

export default Home
