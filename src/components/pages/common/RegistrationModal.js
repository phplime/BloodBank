import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap';

export class RegistrationModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open: false,
        }

        if(props.open){
            this.state = props.open
           
        } else {
            this.state = this.state;
        }
     
    }

    handleClose = () => {
        this.setState({ open: false });
    }
  
    
    render() {
           console.log(this.state.open)
        return (
            <div>
                <Modal show={this.state.open} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal> 
            </div>
        )
    }
}

export default RegistrationModal
