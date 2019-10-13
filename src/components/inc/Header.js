import React,{useState} from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import LoginModal from './LoginModal';
// import { Login } from './Login';
function Header(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        
        <div>
            <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contactUs">Contact</Nav.Link>
                <Nav.Link href="#" onClick={handleShow}>Login</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button  type="button" onClick={handleShow} variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            </>
            {props.children}
           
            <LoginModal show={show} handleClose={handleClose} />
            {/* <Login show={show} handleClose={handleClose}/> */}
            
        </div>
        
    

    )
}




export default Header
