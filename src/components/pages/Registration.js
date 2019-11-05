import React, { Component } from 'react';
import * as Yup from "yup";
import { Formik } from "formik";
import { Form, Button} from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import axios from 'axios';
// import $ from 'jquery';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { API_URL } from "../inc/Config";
import RegistrationModal from './common/RegistrationModal';



const fields = {
    sections: [
        [
            {label:'First Name',name:'first_name',elementName:'input',type:'text',placeholder:'Your First Name *', col:'col-sm-6'},
            {label:'Last Name',name:'last_name',elementName:'input',type:'text',placeholder:'Your Last Name *', col:'col-sm-6'},
            {label:'Phone',name:'phone',elementName:'input',type:'phone',placeholder:'Your Phone Number *', col:'col-sm-12'},
            
        ],
        [
            { label: 'Blood', name: 'blood_group', elementName: 'select', type: 'select', placeholder: '', col: 'col-sm-6' }, 
            { label: 'Gender', name: 'gender', elementName: 'select', type: 'select', placeholder: '', col: 'col-sm-6' } 
        ],
        [
            { label: 'Address', name: 'address', elementName: 'textarea', type: 'text', placeholder: 'Your Address', col: 'col-sm-12' } 
        ]
        
    ],
   
    
}

export class Registration extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            id:'',
            error: null,
            user: [],
            loading: true, 
            phone: '',
            ExistingLoading: false,
            msg: '',
            st: '',
            blood_group: [],
            existing: '',
            isSubmit: false,
            modalStatus:false,
            
        }
        this._isMounted = false;
        // this.existingHandler = this.existingHandler.bind(this);
    }
    
    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.get_all_blood_group();
        
    }


    get_all_blood_group =  () => {
        axios.get(`${API_URL}/get_all_blood_group`)
        .then(response => {
            this._isMounted && this.setState({
                blood_group: response.data,
            })
        })
        .catch(error => {
            this.setState({
                error:error,
            })
        })
        
    }
    
    onSubmit = (values) => {
       
        this.existingHandler(values['phone']).then(data => {
            // console.log(data)
            if (data.st === 0) {
                this.setState({
                    msg: `This ${values['phone']} Number already exists!`,
                    st:0
                })
                if (data.data['password']==='') {
                    this.setState({
                        id:data.data['id'],
                        modalStatus: true,
                    })
                }
            } else {
                this.setState({ isSubmit: true, msg:'' });
                axios.post(`${API_URL}/add_user`, JSON.stringify(values))
                    .then(result => {
                        // console.log(result);
                        if (result.data.st === 1) {
                            this.setState({
                                isSubmit: false,
                                msg: result.data.msg,
                                st: result.data.st,
                                modalStatus: true,
                                id:result.data.id,
                            })
                            document.getElementById("create-course-form").reset();
                        } else {
                            this.setState({
                                isSubmit: false,
                                msg: result.data.msg,
                                st: result.data.st,
                            })
                        }
            
                    })
                    .catch(error => {
                        console.log(error)
                    })

                setTimeout(
                    function () {
                        this.setState({
                            msg: '',
                            isSubmit: false,
                        });
                    }
                        .bind(this),
                    3000
                );
            } //endif
        })
        
    };
 
    
    existingHandler(value){
     
       var phone = value
        this.setState({
            phone:phone
        })
    
        const formData = {
            field_name: 'phone',
            table: 'blood_donors',
            value: phone,
        }
       return axios.post(`${API_URL}/check_existing_value`, JSON.stringify(formData))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
        
        
    }

    handleClose = () => {
        this.setState({ modalStatus: false });
       
    }
  
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        return (
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    phone:'',
                    blood_group:'',
                    address:'',
                    gender: '',
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string().min(3, 'First Name is longer then that').required('You Must give us Your First name.'),
                    last_name: Yup.string().min(3, 'Last Name is longer then that').required('You Must give us Your Last name.'),
                    phone: Yup.string().strict(true)
                    .trim()
                    // .test('len', 'Must be exactly 11 characters', val => val.length === 11)
                    .required('Phone is required')
                    .matches(phoneRegExp, 'Phone can only contain Number.')
                    // .matches(/^[0-9]{11}$/, 'Phone can only contain only Number.')
                    ,
                    blood_group:Yup.number().required('You Must give us Your Blood group.'),
                    address:Yup.string().required('You Must give us Your Address.'),
                    gender:Yup.string().required('You Must give us Your Gender.'),
                })}
                onSubmit={this.onSubmit}
                render={({ handleChange, handleBlur, values, errors, handleSubmit, touched}) => (
                    <div>
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
                        {this.state.isSubmit !== true ?
                            <Form onSubmit={handleSubmit} id='create-course-form' className="form_height">
                                {fields.sections.map((section, i) => {
                                    return (
                                        <div className="row" key={i}>
                                            {section.map((field, j) => {
                                                return <SignUpForm
                                                    {...field}
                                                    key={j}
                                                    value={values[field.name]}
                                                    name={field.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    touched={(touched[field.name])}
                                                    errors={errors[field.name]}
                                                    group={field.name === 'blood_group' ? this.state.blood_group: ''}
                                                   
                                                />  
                                            })}
                                        </div>
                                    )
                                })}
                            
                                <div className="text-right">
                                    <Button variant="primary" type="submit" disabled={this.state.isSubmit}>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        :   <div className="loader_area text-center" style={{height:'250px'}}>
                                <Loader
                                    type="Watch"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                    timeout={3000} //3 secs
                                />
                            </div>}
                        <RegistrationModal open={this.state.modalStatus} cancel={this.handleClose} id={this.state.id}/>
                    </div>
                )}
            />
        )
    }
}

export default Registration
