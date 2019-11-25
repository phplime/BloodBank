import React from 'react'
import {Modal,Button} from 'react-bootstrap';

function AllDonateDate(props) {
    return (
        <Modal show={props.dateShow}  onHide={props.DatecloseModal}>
             <Modal.Header> <Modal.Title>Donate Date </Modal.Title> </Modal.Header>
            <Modal.Body>
                {props.donateDate && props.donateDate.length > 0 ?
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.donateDate.map((user, i) => (
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
