import React from 'react'
import { Form} from 'react-bootstrap'

function ContactForm(props) {
    console.log(props)
    if (props.elementName === 'input') {
        return (
            <div className={props.col}>
                <Form.Group>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        onBlur={props.handleBlur}
                    />
                    <div>
                        <p className="help-block text-danger">
                            {(props.touched && props.errors) &&
                                <span>{props.errors}</span>
                            }
                        </p>
                    </div>
                </Form.Group>
            </div>
            
        )
    } else if (props.elementName === 'textarea') {
        return (
            <div className={props.col}>
                <Form.Group>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control
                        as={props.elementName}
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        onBlur={props.handleBlur}
                    />
                    <div>
                        <p className="help-block text-danger">
                            {(props.touched && props.errors) &&
                                <span>{props.errors}</span>
                            }
                        </p>
                    </div>
                
                </Form.Group>
            </div>
        )
    }else if (props.elementName === 'select') {
        return (
            <div className={props.col}>
                <Form.Group>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control
                        as={props.elementName} 
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        onChange={props.onChange}
                        onBlur={props.handleBlur} >
                        {props.group.map((bGroup,i) =>{
                            return (
                                <option value={bGroup.value} key={i}>{bGroup.name}</option>
                            )
                        })}
                        
                    </Form.Control>
                    <div>
                        <p className="help-block text-danger">
                            {(props.touched && props.errors) &&
                                <span>{props.errors}</span>
                            }
                        </p>
                    </div>
                
                </Form.Group>
            </div>
        )
    }
    
}

export default ContactForm
