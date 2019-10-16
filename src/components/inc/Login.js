import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:false,
            isLoggedIn: false,
            msg: '',
            st:'',
        }
        
    }
    onSubmit = (values) => {
        this.setState({ loading: true });
        axios.post('http://localhost/blood/api/user_login', JSON.stringify(values))
        .then(result => {
                if (result.data.st ===1) {
                    var resultData =  result.data.data.map(row => {
                        return { id: row.id, " isLogin": true };
                    })
                    localStorage.setItem('logData', JSON.stringify(resultData)); 
                    localStorage.setItem('ID', result.data.data[0].id);
                    this.setState({
                        isLoggedIn: true,
                        msg:result.data.msg,
                        st:result.data.st,
                    })
                    window.location.reload(); 
                } else {
                    this.setState({
                        isLoggedIn: false,
                        msg:result.data.msg,
                        st:result.data.st,
                    })
                }
           
            })
        .catch (error => {
            console.log(error)
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

    
    // submitHandler = (e) => {
       // this.setState({ loading: true }, () => {
        //     axios.post('http://localhost/blood/api/user_login', JSON.stringify(values))
        //         .then(result => {
        //             this.setState({
        //                 loading: false,
        //                 // data: [...result.data],
        //             });
        //             console.log(result)
        //         })
        //   })
    // }
    
    // value={this.state.name} onChange={this.changeHandler}
    render() {
       
        return (
        <Formik
            initialValues={{
            phone: '',
            password: ''
            }}
            validationSchema={Yup.object().shape({
            phone: Yup.string().required(),
            password: Yup.string().required()
            })}
            onSubmit={this.onSubmit}
            render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <form  onSubmit={handleSubmit}>
                        <Modal.Header closeButton> <Modal.Title>Login Form</Modal.Title> </Modal.Header>
                            <Modal.Body>
                                {this.state.msg &&
                                    <div className="success_msg">
                                        <div className={`alert alert-${this.state.st===1?'success':'danger'} alert-dismissible fade show`} role="alert">
                                            <strong>Success</strong> {this.state.msg}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                }
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Your Phone Number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phone && errors.phone}
                                />
                                <div>
                                    <p className="help-block text-danger">
                                        {(touched.phone && errors.phone) &&
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
                                    error={touched.name && errors.name}
                                />
                                <div>
                                    <p className="help-block text-danger">
                                        {(touched.password && errors.password) &&
                                            <span>{errors.password}</span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="primary" type="submit" disabled={this.state.loading ? true : false}> {this.state.loading ? 'Loading...' : 'Login'} </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
                </div>
            )}
        />
        )
    }
}

export default Login
