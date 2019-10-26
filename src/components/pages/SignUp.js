import React, { Component } from 'react';
import * as Yup from "yup";
import { withFormik } from "formik";
import { Form, Button} from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { API_URL } from "../inc/Config";


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

export class SignUp extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            error: null,
            user: [],
            loading: true, 
            
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}/get_all_blood_group`)
        .then(response => {
            this.setState({
                blood_group: response.data,
            })
        })
        .catch(error => {
            this.setState({
                error:'Somethings Were wrong',
            })
        })
    }
   
    render() {
        return (
            <div>
                {this.props.isSubmitting !== true ?
                    <Form onSubmit={this.props.handleSubmit} id='create-course-form'>
                        {fields.sections.map((section, i) => {
                            return (
                                <div className="row" key={i}>
                                    {section.map((field, j) => {
                                        return <SignUpForm
                                            {...field}
                                            key={j}
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                            group = {this.state.blood_group}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    
                        <div className="text-right">
                            <Button variant="primary" type="submit" disabled={this.props.isSubmitting}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                    : <div className="loader_area text-center" style={{height:'250px'}}>
                        <Loader
                        type="Watch"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
            
                    />
                    </div>}
            </div>
        )
    }
}



export default withFormik({
    
    mapPropsToValues: () => ({
        name: '',
        phone:'',
        blood_group:'',
        address:'',
        gender:'',
    }),
    validationSchema: Yup.object().shape({
        first_name: Yup.string().min(3, 'First Name is longer then that').required('You Must give us Your First name.'),
        last_name: Yup.string().min(3, 'Last Name is longer then that').required('You Must give us Your Last name.'),
        phone:Yup.string().required('You Must give us Your Phone.'),
        blood_group:Yup.number().required('You Must give us Your Blood group.'),
        address:Yup.string().required('You Must give us Your Address.'),
        gender:Yup.string().required('You Must give us Your Gender.'),
    }),
   
     handleSubmit: (data, {setSubmitting}) => {
         setTimeout(() => {
            setSubmitting(false);
             axios.post('http://localhost/blood/api/add_user', JSON.stringify(data, null, 2))
            .then(result => {
                document.getElementById("create-course-form").reset();
            })
            .catch(error => {
               console.log(error)
            })
            
         }, 4000);
         
    }
})(SignUp) 
