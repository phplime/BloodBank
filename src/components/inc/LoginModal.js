import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import * as Yup from "yup";
import { withFormik } from "formik";
import axios from 'axios';
import { API_URL } from "../inc/Config";
function LoginModal(props) {
    // const [value, setValue] = React.useState({});
    const {
        isSubmitting,
        handleBlur,
        errors,
        handleChange,
        handleSubmit,
        touched
    } = props;
    // var loginData = localStorage.getItem('mydata');
    // console.log(loginData)
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                 <form  onSubmit={handleSubmit}>
                    <Modal.Header closeButton> <Modal.Title>Login Form</Modal.Title> </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Your Phone Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                            <div>
                                <p className="help-block text-danger">
                                    {(errors && touched) &&
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
                                touched={touched}
                                errors={errors}
                            />
                             <div>
                                <p className="help-block text-danger">
                                    {(touched && errors) &&
                                        <span>{errors.password}</span>
                                    }
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit"> {isSubmitting ? 'Loading...' : 'Login'} </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
// this.props.form.status
export default withFormik({
    
    mapPropsToValues: () => ({
        phone: '',
        password:'',
    }),
    validationSchema: Yup.object().shape({
        phone:Yup.string().required('You Must give us Your Phone.'),
        password:Yup.string().required('You Must give us Your Password.'),
    }),
   
    handleSubmit: (data, {setSubmitting }) => {
            axios.post(`${API_URL}/user_login`, JSON.stringify(data))
                .then(result => {
                if (result.data.st ===1) {
                    var resultData =  result.data.data.map(row => {
                        return {"id": row.id, " isLogin": row.user_login };
                    })
                    localStorage.setItem('mydata', JSON.stringify(resultData)) 
                } else {
                    console.log(result.data.msg)
                }
                
            })
            .catch(error => {
                console.log(error)
            })
        
        setTimeout(() => {
            setSubmitting(true);
        }, 2000);
         
    }
})(LoginModal)
