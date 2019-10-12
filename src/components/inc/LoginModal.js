import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import * as Yup from "yup";
import { withFormik } from "formik";
function LoginModal(props) {
    // const [value, setValue] = useState()
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                 <form action="">
                    <Modal.Header closeButton> <Modal.Title>Login Form</Modal.Title> </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Your Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control" 
                                placeholder="Your Password" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" > Login </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default withFormik({
    
    mapPropsToValues: () => ({
        phone: '',
        password:'',
    }),
    validationSchema: Yup.object().shape({
        phone:Yup.string().required('You Must give us Your Phone.'),
        password:Yup.string().required('You Must give us Your Password.'),
    }),
   
     handleSubmit: (data, {setSubmitting}) => {
        //  setTimeout(() => {
        //     setSubmitting(true);
        //     //  axios.post('http://localhost/blood/api/add_user', JSON.stringify(data, null, 2))
        //     // .then(result => {
        //     //     document.getElementById("create-course-form").reset();
        //     // })
        //     // .catch(error => {
        //     //    console.log(error)
        //     // })
            
        //  }, 4000);
         
    }
})(LoginModal)
