import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from "../../inc/Config";

export class RegistrationModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            loading:false,
            data:{},
        }
        if(props.id){
            this.state = props.id
          } else {
            this.state = this.state;
        }
    }
    onSubmit = (values) => {
        console.log(this.state.id)
       console.log(values)
        // this.setState({ loading: true }, () => {
        //     axios.post(`${API_URL}/add_user`, JSON.stringify(values,null, 2))
        //     .then(result => {
        //         if (result.data.st === 1) {
        //             this.get_username(result.data.id).then(data => {
        //                 this.setState({
        //                     data: data,
        //                     loading:false,
        //                 })
        //                 console.log(data)
        //             })
        //         } 
        
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // })

        setTimeout(
            function() {
                this.setState({
                    msg: '',
                    loading: false,
                });
            }
            .bind(this),
            3000
        );
    };
    
    get_username = (id) =>{
         const formData = {
             field_name: 'id',
             table: 'blood_donors',
         }
        return axios.post(`${API_URL}/get_single_value`, JSON.stringify(formData))
         .then(response => {
             return response.data;
         })
         .catch(error => {
             console.log(error)
         })
         
         
     }
  
    
    render() {
        return (
            <Formik
                initialValues={{
                    id: null,
                    password: '',
                    confirm_password: false,
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().min(3, 'New Password is longer then that').required('You Must give New Password.'),
                    confirm_password: Yup.string()
                    .oneOf([Yup.ref('password'), null],"Passwords don't match")
                    .min(3, 'Confirm Password is longer then that')
                    .required('You Must give Confirm Password.'),
                })}
                onSubmit={this.onSubmit}
                render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
                    <div>
                        <Modal show={this.props.open} onHide={this.props.cancel}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Enter Password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password && errors.password}
                                        />
                                        <div>
                                            <p className="help-block text-danger">
                                                {(touched.password && errors.password) &&
                                                    <span>{errors.password}</span>
                                                }
                                            </p>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="confirm_password"
                                            placeholder="Confirm Password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.confirm_password && errors.confirm_password}
                                        />
                                        <div>
                                            <p className="help-block text-danger">
                                                {(touched.confirm_password && errors.confirm_password) &&
                                                    <span>{errors.confirm_password}</span>
                                                }
                                            </p>
                                        </div>
                                    </Form.Group>
                            
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.props.cancel}>
                                        Close
                                    </Button>
                                    <input type="hidden" name="id" value={this.props.id} />
                                    <Button variant="primary" type="submit" disabled={this.state.loading ? true : false}> {this.state.loading ? 'Loading...' : 'Submit'} </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </div>
                )}
            />    
        )
    }
}

export default RegistrationModal
