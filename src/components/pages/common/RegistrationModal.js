import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from "../../inc/Config";
import  md5  from "md5";

export class RegistrationModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            loading:false,
            data: {},
            successReg:false,
        }
        if(props.id){
            this.state = props.id
          } else {
            this.state = this.state;
        }
    }
    onSubmit = (values) => {
     
        var value = values;
        delete value.confirm_password;
        value.id = this.props.id;
        value.password = md5(values['password']);
        this.setState({ loading: true }, () => {
            axios.post(`${API_URL}/add_user`, JSON.stringify(value,null, 2))
            .then(result => {
                if (result.data.st === 1) {
                    this.get_username(result.data.id).then(row => {
                        this.setState({
                            data: row,
                            loading: false,
                            successReg:true,
                        })
                    })
                } 
        
            })
            .catch(error => {
                console.log(error)
            })
        })

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
             field_value: id,
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
        const { loading, successReg, data } = this.state;
        return (
            <Formik
                initialValues={{
                    password: '',
                    confirm_password: '',
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
                        <Modal show={this.props.open} onHide={this.props.cancel} backdrop="static" keyboard={false} className="form_height">
                            <Modal.Header>
                                <Modal.Title>Registration</Modal.Title>
                            </Modal.Header>
                            {successReg === false ?
                                <Form onSubmit={handleSubmit}>
                                    <Modal.Body className={`${loading ? 'loading' : ''}`}>
                                    
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
                                        <input type="hidden" name="id" value={this.props.id} />
                                        <Button variant="primary" type="submit" disabled={this.state.loading ? true : false}> {this.state.loading ? 'Loading...' : 'Submit'} </Button>
                                    </Modal.Footer>
                                </Form>
                                :
                                <div> 
                                <Modal.Body>
                                    <div className="text-center success_alet_msg">
                                        <i className="fa fa-smile-o fa-3x" ></i>
                                        <h4>Congratulation {data['first_name']} {data['last_name']}</h4>
                                        <h6>Please Login to provide your information</h6>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.props.cancel}> OK</Button>
                                    </Modal.Footer>
                                </div>
                            }
                                
                        </Modal>
                    </div>
                )}
            />    
        )
    }
}

export default RegistrationModal
