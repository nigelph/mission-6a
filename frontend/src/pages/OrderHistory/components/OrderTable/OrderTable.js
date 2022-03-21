import React from 'react'
import style from './OrderTable.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function OrderTable() {

    const [orderHistory, setOrderHistory] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/history`)
            .then((res) => {
                setOrderHistory(res.data)
                console.log(orderHistory)
            })
    }, [])

    return (
        <div>
            <table id={style['table-width']}>
                <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reference</th>
                    <th>Units</th>
                    <th>Auto Ship</th>
                    <th>Shipped From</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                {/* Populate page with all orders of a specific user */}
                {
                    // Check and show all all orders of a specfic user
                    orderHistory.map((history => history.user_id === 2 ? (
                        <tr>
                            <td>{history._id}</td>
                            <td>{history.date}</td>
                            <td>{history.status}</td>
                            <td>{history.reference}</td>
                            <td>{history.total_units}</td>
                            <td>{history.auto_ship}</td>
                            <td>{history.shipping_location}</td>
                            <td>{`$${history.total}`}</td>
                        </tr>
                    ) : (
                        ''
                    )
                    ))
                }
            </table>

        </div >
    )
}
