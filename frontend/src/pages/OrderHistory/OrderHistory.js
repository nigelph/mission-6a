import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function OrderHistory() {

    const [orderHistory, setOrderHistory] = useState([])

    function getOrderHistory() {
        axios.get(`http://localhost:8080/history`)
            .then((res) => {
                setOrderHistory(res.data)
                console.log(orderHistory)
            })
    }


    return (
        <div>OrderHistory

            <button onClick={getOrderHistory}>Click me to see order history entries</button>

            {orderHistory.map(history =>
                <div>
                    <p>{history.date}</p>
                    <p>{history.status}</p>
                    <p>{history.reference}</p>
                    <p>{history.total_units}</p>
                    <p>{history.auto_ship}</p>
                    <p>{history.shipping_location}</p>
                    <p>{history.total}</p>
                </div>

            )}
        </div>
    )
}

export default OrderHistory