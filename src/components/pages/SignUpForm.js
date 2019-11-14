import React from 'react';
import { Form} from 'react-bootstrap'

function SignUpForm(props) {
  
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
    } else if (props.elementName === 'select') {
        if (props.name === 'blood_group') {
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
                            <option value="">Select Group</option>
                            {Object.keys(props.group).length > 0 ?
                                props.group.map((bGroup, i) => {
                                    return (
                                        <option value={bGroup.id} key={i}>{bGroup.name}</option>
                                    )
                                })
                            : <option>please wait...</option>
                            }
                            
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
        } else if (props.name === 'gender') {
            const gender_type = ['Male','Female','Others']
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
                            <option value="">Select Gender</option>
                            {gender_type.map((gender, j) => {
                                return (
                                    <option value={gender} key={j}>{gender}</option>
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
    
}

export default SignUpForm
