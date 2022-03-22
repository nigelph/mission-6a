import React from 'react'
import { useState, useEffect } from 'react'
import style from './OrderHistory.module.css'
import AccountMenu from './components/AccountMenu/AccountMenu'
// import OrderTable from './components/HeaderFilter/components/FilterBox/components/OrderTable/OrderTable'
import axios from 'axios'
import HeaderFilter from './components/HeaderFilter/HeaderFilter'

function OrderHistory() {
    return (
        <div className={style['order-history-page-container']}>
            <div id={style['order-history-inner-container']}>
                <section id={style['header-filter-container']}>
                    <HeaderFilter />
                </section>
            </div>
        </div >
    )
}

export default OrderHistory