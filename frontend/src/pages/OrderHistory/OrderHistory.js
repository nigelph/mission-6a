import React from 'react'
import { useState, useEffect } from 'react'
import style from './OrderHistory.module.css'
import AccountMenu from './components/AccountMenu/AccountMenu'
import FilterBox from './components/FilterBox/FilterBox'
import OrderTable from './components/OrderTable/OrderTable'
import axios from 'axios'

function OrderHistory() {

    const [order, setOrder] = useState([])

    function getOrder() {
        axios.get(`http://localhost:8080/allOrders`)
            .then((res) => {
                setOrder(res.data)
                console.log(order)
            })
    }

    return (
        <div className={style['order-history-page-container']}>
            <div id={style['order-history-inner-container']}>
                <div id={style['left']}>

                    <div id={style['account-menu-container']}>
                        <AccountMenu />
                    </div>
                </div>
                <div id={style['right']}>
                    <div id={style['information-filter-container']}>
                        <div id={style['information-container']}>
                            <div id={style['information-content-container']}>
                                <p>Search your previous orders by date and/or product category. In a hurry? Just click the RE-ORDER button to repeat selected orders.To re-order specific items from past purchases please click VIEW ORDER to open the order and select the items to add to cart and re-order.</p>
                            </div>
                        </div>
                        <div id={style['filter-container']}>
                            <FilterBox />
                        </div>
                    </div>
                    <div id={style['right-main-container']}>
                        <div id={style['right-main-content-container']}>
                            <OrderTable />
                        </div>
                    </div>
                </div>
            </div>


            <br />
            <button onClick={getOrder} ><p>Click me to see order history entries</p></button>

            {
                order.map((history => history.user_id === 2 ? (

                    <div>
                        <p>{history.date}</p>
                        <p>{history.status}</p>
                        <p>{history.reference}</p>
                        <p>{history.total_units}</p>
                        <p>{history.auto_ship}</p>
                        <p>{history.shipping_location}</p>
                        <p>{history.total}</p>
                        {/* <p>{history.user_id}</p> */}

                    </div>
                ) : (
                    ''
                )
                ))
            }
        </div >
    )
}

export default OrderHistory