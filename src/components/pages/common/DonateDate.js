import React, { Component } from 'react'
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { API_URL } from "../../inc/Config";

export class DonateDate extends Component {
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
                    donate_date: '',
                    location: '',
                }}
                validationSchema={Yup.object().shape({
                    donate_date: Yup.string().min(3, 'Donate Date is longer then that').required('Donate Date is required.'),
                })}
             
                onSubmit={this.onSubmit}
                render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
                    <div className={`tab-pane fade show ${this.state.passActive ? 'active' : ''} ${this.state.PassLoading ? 'Loading active' : ''}`} id="donate_date" role="tabpanel" aria-labelledby="password-tab">
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
                                                <label>Donate Date</label>
                                                <input type="text"
                                                    name="donate_date"
                                                    className="form-control"
                                                    placeholder="Donate Date"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.donate_date && errors.donate_date}
                                                />
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.donate_date && errors.donate_date) &&
                                                            <span>{errors.donate_date}</span>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>Location</label>
                                                <input type="text"
                                                    name="location"
                                                    className="form-control"
                                                    placeholder="Donate Location"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.location && errors.location}
                                                />
                                                <div>
                                                    <p className="help-block text-danger">
                                                        {(touched.location && errors.location) &&
                                                            <span>{errors.location}</span>
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

export default DonateDate
