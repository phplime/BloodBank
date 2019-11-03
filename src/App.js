import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/inc/Header';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import Footer from './components/inc/Footer';
import Profile from './components/pages/Profile';
import axios from 'axios';
import md5 from "md5";
import { API_URL } from "./components/inc/Config";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user:[],
      isLoading: false,
      isLogin: false,
    }
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    if (localStorage.getItem('ID')) {
      this._isMounted && this.loginUser();
    }

    setTimeout(
        function() {
            this.setState({isLoading: false});
        }
        .bind(this),
        3000
    );
  }

  loginUser = async () => {
    await axios.get(`${API_URL}/get_login_user_info/${md5(localStorage.getItem('ID'))}`)
      .then(response => {
          this.setState({
            user: response.data,
            isLogin: true,
          });
          
      })
      .catch(error => {
          console.log(error)
          this.setState({ errorMsg: 'Error retreiving data' })
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { user, isLogin, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loader_area text-center">
            <Loader
              type="Watch"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs

          />
        </div>
      )
    } else {
      
      return (
        <Router>
          <Switch>
            <Header>
              <Route exact={true} path='/' component={() => <Home />} />
              <Route path='/contactUs' component={() => <ContactUs showBanner={true} />} />
              {isLogin &&
                <Route path='/Profile' component={() => <Profile showBanner={true} user={user} />} />
              }
            </Header>
            <Footer/>
          </Switch>
         </Router>
      )
    }
  }
}

export default App
