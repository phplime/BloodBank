import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap';
import * as Yup from "yup";
import { withFormik } from "formik";
import axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            
        }
        
    }
    
    render() {
        const {
            isSubmitting,
            handleBlur,
            errors,
            handleChange,
            handleSubmit,
            touched 
        } = this
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <form  onSubmit={handleSubmit}>
                        <Modal.Header closeButton> <Modal.Title>Login Form</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Your Phone Number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <div>
                                    <p className="help-block text-danger">
                                        {(errors && touched) &&
                                            <span>{errors.phone}</span>
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control" 
                                    placeholder="Your Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                />
                                <div>
                                    <p className="help-block text-danger">
                                        {(touched && errors) &&
                                            <span>{errors.password}</span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit"> {isSubmitting ? 'Loading...' : 'Login'} </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default withFormik({
    
    mapPropsToValues: () => ({
        phone: '',
        password:'',
    }),
    validationSchema: Yup.object().shape({
        phone:Yup.string().required('You Must give us Your Phone.'),
        password:Yup.string().required('You Must give us Your Password.'),
    }),
   
    handleSubmit: (data, {setSubmitting }) => {
            axios.post('http://localhost/blood/api/user_login', JSON.stringify(data))
                .then(result => {
                
            })
            .catch(error => {
                console.log(error)
            })
        setTimeout(() => {
            setSubmitting(true);
        }, 2000);
         
    }
})(Login)
