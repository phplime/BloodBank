import React,{useState,useEffect} from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { API_URL } from "../inc/Config";
// import {Redirect,withRouter } from 'react-router-dom';
// import LoginModal from './LoginModal';
import Login from './Login';
import axios from 'axios';
import md5 from 'md5';
 
function Header(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [data, setData] = useState('');

        var logData = localStorage.getItem('ID');
         var ID;
        if (logData !== null) {
            ID = logData;
        } else {
            ID = 0;   
        }
        
        useEffect(() => {
            const fetchData = async () => {
                await axios.get(`${API_URL}/get_login_user_info/${md5(ID)}`)
                    .then(response => {
                        setData(response.data)
                    })
                    .catch(error => {
                        setData(error)
                    })
            }
            fetchData()
            // clearconsole(); 
        }, [ID]);
    

    const logout = () => {
        localStorage.removeItem('logData');
        localStorage.removeItem('userId');
        localStorage.clear();
        window.location.href = '/';
    }
      
    return (
        // 
        <div>
            <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/contactUs">Contact</Nav.Link>
                    
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                 <Nav className="mr-auto ">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button  type="button" onClick={handleShow} variant="outline-success">Search</Button>
                    </Form>
                        </Nav>
                <Nav className="navbar-nav">
                {!logData &&
                    <Nav.Link href="#" onClick={handleShow}>Login</Nav.Link>
                }
                {logData &&
                    <Nav.Link href="#"  refresh="true" onClick={logout}>Logout</Nav.Link>
                            }
                {logData &&
                    <Nav.Link href="/profile">{data['username'] !==''?data['username']:data['first_name']}</Nav.Link>
                            }
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>
            </>
            {props.children}
           
            {/* <LoginModal show={show} handleClose={handleClose} /> */}
            <Login show={show} handleClose={handleClose}/>
            
        </div>
        
    

    )
}




export default Header
