import React from 'react'
import { useState, useEffect } from 'react'
import style from './OrderHistory.module.css'
import AccountMenu from './components/AccountMenu/AccountMenu'
import OrderTable from './components/OrderTable/OrderTable'
import axios from 'axios'
import HeaderFilter from './components/HeaderFilter/HeaderFilter'

function OrderHistory() {

    const [order, setOrder] = useState([])
    const [year, setYear] = useState([])
    const [month, setMonth] = useState([])

    function getOrder() {
        axios.get(`http://localhost:8080/allOrders`)
            .then((res) => {
                setOrder(res.data)
                console.log(order)
            })
    }

    function postYear() {
        axios.post(`http://localhost:8080/filter/${year}`)
            .then((res) => {
                console.log(res.data)
                setYear(res.data)
            })
    }

    function postMonth() {
        axios.post(`http://localhost:8080/month/${month}`)
            .then((res) => {
                console.log(res.data)
                setMonth(res.data)
            })
    }

    return (
        <div className={style['order-history-page-container']}>
            <div id={style['order-history-inner-container']}>
                <section id={style['headerfilter-container']}>
                    <HeaderFilter />
                </section>

                <section id={style['body-container']}>
                    <div id={style['left']}>

                        <div id={style['account-menu-container']}>
                            <AccountMenu />
                        </div>
                    </div>
                    <div id={style['right']}>
                        <div id={style['right-main-container']}>
                            <div id={style['right-main-content-container']}>
                                <OrderTable />
                            </div>
                        </div>
                    </div>

                </section>

            </div>


            <br />
            <input type='number' onChange={(e) => setYear(e.target.value)}></input>
            <button onClick={postYear}>Search by date</button>

            <input type='number' onChange={(e) => setMonth(e.target.value)}></input>
            <button onClick={postMonth}>Search by month</button>
        </div >
    )
}

export default OrderHistory