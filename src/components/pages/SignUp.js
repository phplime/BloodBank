import React, { Component } from 'react';
import * as Yup from "yup";
import { withFormik } from "formik";
import { Form, Button} from 'react-bootstrap';
import ContactForm from './ContactForm';

const fields = {
    sections: [
        [
            {label:'Name',name:'name',elementName:'input',type:'text',placeholder:'Your Name *', col:'col-sm-12'},
            {label:'Email',name:'email',elementName:'input',type:'email',placeholder:'Your Email (if any)', col:'col-sm-12'},
            {label:'Phone',name:'phone',elementName:'input',type:'phone',placeholder:'Your Phone Number *', col:'col-sm-12'},
            
        ],
        [
            { label: 'Blood', name: 'group', elementName: 'select', type: 'select', placeholder: '', col: 'col-sm-6' } 
        ]
        
    ],
    group: [
        {name: 'O+', value:'o+'},
        {name: 'O-', value:'o-'},
        {name: 'A+', value:'a+'},
        {name: 'A-', value:'a-'},
        {name: 'B+', value:'b+'},
        {name: 'B-', value:'b-'},
        {name: 'AB+', value:'ab+'},
        {name: 'AB-', value:'ab-'},
    ]
}

export class SignUp extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                        {fields.sections.map((section, i) => {
                            return(
                                <div className="row" key={i}>
                                    {section.map((field, j) => {
                                        return <ContactForm
                                            {...field}
                                            key={j}
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                            group={fields.group}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    
                        <div className="text-right">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        message:'',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name is longer then that').required('You Must give us Your name.'),
        email:Yup.string().email('You need to give us a valid email').required('You Must give us Your Email.'),
    }),
   
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        alert('You have submitted the form',JSON.stringify(values))
    }
})(SignUp) 
