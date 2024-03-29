import React,{useState,useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { settings } from "../inc/Functions";
// import {Redirect,withRouter } from 'react-router-dom';
// import LoginModal from './LoginModal';
import Login from './Login';
function Header(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [data, setData] = useState('');
    const [setting, setSetting] = useState({});
    const [isLogin, setLogin] = useState(false);
    
    useEffect(() => {
       
        var logData = JSON.parse(localStorage.getItem('logData'));
        let isMounted = true;
        if (isMounted && logData !== null) {
            setData(logData);
            setLogin(true);
        }
        if (isMounted) {
            mySetting(); 
        }
        return () => {
            isMounted = false;
        };
        // clearconsole(); 
    }, []);
    
// site setting
     const mySetting = () => {
        var a = settings();
        a.then((result) => {
            setSetting(result);
        })
    }

    const logout = () => {
        localStorage.removeItem('logData');
        localStorage.removeItem('userId');
        localStorage.clear();
        window.location.href = '/';
        toast.info('Logout successfully')
    }
      
    return (
        // 
        <div>
            <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand href="/">{setting.site_name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contactUs">Contact</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>
                    {isLogin &&
                        <Nav.Link href="/Area">Area Donor</Nav.Link>
                    }
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav className="navbar-nav">
                {!isLogin &&
                    <Nav.Link href="#" onClick={handleShow}>Login</Nav.Link>
                }
                {isLogin &&
                    <Nav.Link href="#"  refresh="true" onClick={logout}>Logout</Nav.Link>
                            }
                {isLogin &&
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
