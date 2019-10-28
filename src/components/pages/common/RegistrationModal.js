import React, { Component } from 'react'

export class RegistrationModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:''
        }
        if(props.open){
            this.state = this.props.open
        } else {
            this.state = this.state;
        }
    }

  
    
    render() {
        console.log(this.state.open)
        return (
            <div>
                <div style={{display:this.state.open===true?'block':'none'}} className="modal fade" id="signupModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default RegistrationModal
