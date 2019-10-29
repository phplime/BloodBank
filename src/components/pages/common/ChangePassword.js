import React, { Component } from 'react'
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { API_URL } from "../../inc/Config";

export class ChangePassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            PassLoading: false,
            msg:'',
            st: '',
            passActive:false,
        }
    }
    
    onSubmit = (values,{resetForm}) => {
        this.setState({ PassLoading: true }, () => {
            axios.post(`${API_URL}/change_password`, JSON.stringify(values))
                .then(result => {
                    this.setState({
                        PassLoading: false,
                        msg: result.data.msg,
                        st: result.data.st,
                        passActive: true,
                        // data: [...result.data],
                    });
                    resetForm(values)
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    render() {
        return (
            <Formik
                initialValues={{
                    id:localStorage.getItem('ID'),
                    old_password: '',
                    new_password: '',
                    confirm_password: '',
                }}
                validationSchema={Yup.object().shape({
                    old_password: Yup.string().min(3, 'First Old Password is longer then that').required('You Must give Old Password.'),
                    new_password: Yup.string().min(3, 'New Password is longer then that').required('You Must give New Password.'),
                    confirm_password: Yup.string()
                    .oneOf([Yup.ref('new_password'), null],"Passwords don't match")
                    .min(3, 'Confirm Password is longer then that')
                    .required('You Must give Confirm Password.'),
                })}
             
                onSubmit={this.onSubmit}
                render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
                    <div className={`tab-pane fade show ${this.state.passActive ? 'active' : ''} ${this.state.PassLoading ? 'Loading active' : ''}`} id="password" role="tabpanel" aria-labelledby="password-tab">
                        <div className="profile_area" >
                            <div className="single_profile">
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
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="single_profile_body">
                                        <div className="row">
                                            <div className="form-group col-sm-12">
                                                <label>Old Password</label>
                                                <input type="password"
                                                    name="old_password"
                                                    className="form-control"
                                                    placeholder="Your Current Password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.old_password && errors.old_password}
                                                />
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.old_password && errors.old_password) &&
                                                            <span>{errors.old_password}</span>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>New Password</label>
                                                <input type="password"
                                                    name="new_password"
                                                    className="form-control"
                                                    placeholder="Your New Password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.new_password && errors.new_password}
                                                />
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.new_password && errors.new_password) &&
                                                            <span>{errors.new_password}</span>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>Confirm Password</label>
                                                <input type="password"
                                                    name="confirm_password"
                                                    className="form-control"
                                                    placeholder="Your Confirm Password"
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
                                            </div>
                                        </div>
                                        <div className="form-group text-right">
                                            {/* <ProgressBar className="pro" animated now={45} /> */}
                                            <div className="form_footer">
                                                <input type='hidden' name="id" value={localStorage.getItem('ID')} />
                                                <button type="submit" className="btn btn-success" >Save Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}

export default ChangePassword
