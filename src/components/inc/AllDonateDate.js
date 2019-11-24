import React from 'react'
import axios from 'axios'
import {Modal,Button} from 'react-bootstrap';
import {API_URL} from './Config';

function AllDonateDate(props) {
    console.log(props.uid)
    const [value, setValue] = React.useState({});
    const [loading, setloading] = React.useState(true);
    if (props.dateShow) {
        if (loading && loading === true) {
            const values = {
                field_name: 'md5(userId)',
                table: 'donate_date',
                field_value: props.uid !==''? props.uid:'',
            }
            axios.post(`${API_URL}/get_single_value`, JSON.stringify(values))
            .then(result => {
                setValue(result.data);
                setloading(false)
                console.log(result.data)
            })
                
            .catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <Modal show={props.dateShow}  className="form_height">
             <Modal.Header> <Modal.Title>Donate Date </Modal.Title> </Modal.Header>
            <Modal.Body>
                {value && value.length > 0 ?
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((user, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.donate_date}</td>
                                    <td>{user.location}</td>
                                </tr>
                            ))}
                        
                        </tbody>
                    </table>
                :
                    <div className="text-center">
                        <h4>Data not found</h4>
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="button" onClick={props.DatecloseModal} > Close </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AllDonateDate
