import React from 'react'

function AllDate(props) {
    if (props.allDate.length === 0) {
        return (
            <div>Fied is empty</div>
        )
    } else {
        return (
            <div className="showList">
                <div className="table-responsive table-bordered">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.allDate.map((date, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{date.donate_date}</td>
                                        <td>{date.location}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AllDate
