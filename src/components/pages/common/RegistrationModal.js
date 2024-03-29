import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from "../../inc/Config";
import md5 from "md5";
// import {Redirect} from 'react-router-dom'

export class RegistrationModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            loading:false,
            data: {},
            successReg: false,
            upazilas:[],
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

                        localStorage.setItem('logData', JSON.stringify(row)); 
                        localStorage.setItem('ID', row.id);
                        localStorage.setItem('isLogin', true);
                        window.location.reload(); 
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
        return axios.post(`${API_URL}/get_single_value_hash`, JSON.stringify(formData))
         .then(response => {
             return response.data;
         })
         .catch(error => {
             console.log(error)
         })
         
         
    }
    
    onChangeDistric = (e) => {
        var id = e.target.value;
        axios.post(`${API_URL}/get_upazila/${id}`,)
        .then(result => {
            this.setState({
                upazilas: result.data,
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { loading, successReg, data, upazilas } = this.state;
        return (
            <Formik
                initialValues={{
                    password: '',
                    confirm_password: '',
                    district: '',
                    upazila: '',
                }}
                validationSchema={Yup.object().shape({
                    district: Yup.string().required('Select District'),
                    upazila: Yup.string().required('Select Upazila'),
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
                                        <div className="row">
                                            <Form.Group className="col-sm-6" controlId="formBasicEmail">
                                                <Form.Label>District</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="district"
                                                    onChange={(e) => { this.onChangeDistric(e); handleChange(e)}}
                                                    onBlur={handleBlur}
                                                    error={touched.district && errors.district}
                                                    >
                                                    <option>Select District</option>
                                                    {this.props.district && this.props.district.map((district, i) => (
                                                        <option key={i} value={district.id}>{district.en_name}</option>
                                                    ))}
                                                </Form.Control>
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.district && errors.district) &&
                                                            <span>{errors.district}</span>
                                                        }
                                                    </p>
                                                </div>
                                            </Form.Group>

                                            <Form.Group className="col-sm-6" controlId="formBasicEmail">
                                                <Form.Label>Upazilla</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="upazila"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.upazila && errors.upazila}
                                                    >
                                                    <option>Select Upazilla</option>
                                                    {upazilas && upazilas.map((upazila, i) => (
                                                        <option key={i} value={upazila.id}>{upazila.name}</option>
                                                    ))}
                                                </Form.Control>
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.upazila && errors.upazila) &&
                                                            <span>{errors.upazila}</span>
                                                        }
                                                    </p>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        
                                        <div className="row">
                                            <Form.Group className="col-sm-6" controlId="formBasicEmail">
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

                                            

                                            <Form.Group className="col-sm-6" controlId="formBasicPassword">
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
                                        </div>                 
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
