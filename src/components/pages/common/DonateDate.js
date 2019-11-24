import React, { Component } from 'react'
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import md5 from "md5";
import { API_URL } from "../../inc/Config";
import AllDate from './AllDate'
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export class DonateDate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            DonateLoading: false,
            msg:'',
            st: '',
            donateActive: false,
            allDate:[],
            listLoading:false,
            showList:false,
        }
    }
    
    onSubmit = (values) => {
        this.setState({ DonateLoading: true }, () => {
            axios.post(`${API_URL}/add_donateDate`, JSON.stringify(values))
                .then(result => {
                    this.setState({
                        DonateLoading: false,
                        msg: result.data.msg,
                        st: result.data.st,
                        donateActive: true,
                        // data: [...result.data],
                    });
                    document.getElementById("donateForm").reset();
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    showDateList = () => {
        this.setState({ listLoading: true }, () => {
            const values = {
                field_name: 'md5(userId)',
                table: 'donate_date',
                field_value: md5(localStorage.getItem('ID')),
            }
            axios.post(`${API_URL}/get_single_value`, JSON.stringify(values))
                .then(result => {
                    this.setState({
                        allDate: result.data,
                        showList:!this.state.showList,
                        listLoading: false,
                    });
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
 
    render() {
        const { DonateLoading, donateActive, st, msg, allDate, showList, listLoading } = this.state;
       
        return (
            <Formik
                initialValues={{
                    userid:localStorage.getItem('ID'),
                    donate_date: '',
                    location: '',
                }}
                validationSchema={Yup.object().shape({
                    donate_date: Yup.string().required('Donate Date is required.'),
                })}
             
                onSubmit={this.onSubmit}
                render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
                    <div className={`tab-pane fade show ${donateActive ? 'active' : ''} ${DonateLoading ? 'isLoading active' : ''}`} id="donate_date" role="tabpanel" aria-labelledby="password-tab">
                        <div className="profile_area" >
                            <div className="single_profile">
                            {msg &&
                                    <div className="success_msg">
                                        <div className={`alert alert-${st===1?'success':'danger'} alert-dismissible fade show`} role="alert">
                                            <strong>Success</strong> {msg}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                }
                                <form action="" onSubmit={handleSubmit} id="donateForm">
                                    <div className="single_profile_body">
                                        <div className="row">
                                            <div className="form-group col-sm-12">
                                                <label>Donate Date</label>
                                                <input type="date"
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
                                            <div className="pull-left">
                                                <button type="button" onClick={this.showDateList} className="btn btn-primary" >Show List</button>
                                            </div>
                                            <div className="form_footer">
                                                <button type="submit" className="btn btn-success" >Save Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {showList &&
                                <div className={`showList ${listLoading ? 'isLoading ' : ''}`}>
                                    <AllDate allDate={allDate}/>
                                </div>
                            }
                        </div>
                    </div>
                )}
            />
            
            
        )
        
    }
}

export default DonateDate
