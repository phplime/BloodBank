import React, { Component } from 'react';
import * as Yup from "yup";
import { withFormik } from "formik";
import { Form,Button,Card } from 'react-bootstrap'
import ContactForm from "./pages/ContactForm";

const fields = {
    sections: [
        [
            {label:'Name',name:'name',elementName:'input',type:'text',placeholder:'Your Name', col:'col-sm-12'},
            {label:'Email',name:'email',elementName:'input',type:'email',placeholder:'Your Email', col:'col-sm-12'},
            
        ],
        [
            {label:'Message',name:'message',elementName:'textarea',type:'text',placeholder:'Your Message', col:'col-sm-12'}
        ]
    ]
}


class ContactUs extends Component {
    render() {
        return (
            <div >
                <div className="default_header_area">
                    <div className="container">
                        <div className="default_header">
                            <div className="default_header_warper">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-20">
                    <div className="row">
                        <div className="col-sm-8 offset-2">
                        <Card>
                            <Card.Header>Contact Form</Card.Header>
                            <Form onSubmit={this.props.handleSubmit}>
                                <Card.Body>
                                    {fields.sections.map((section, i) => {
                                        console.log(section);
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
                                                    />
                                                })}
                                            </div>
                                        )
                                    })}
                                </Card.Body>
                                <Card.Footer>
                                    <div className="text-right">
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Form>
                        </Card>
                        </div>
                    </div>
                </div>
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
})(ContactUs) 
