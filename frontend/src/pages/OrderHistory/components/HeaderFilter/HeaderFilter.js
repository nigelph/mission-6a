import React from 'react'
import Banner from './components/Banner/Banner'
import HeaderBlurb from './components/HeaderBlurb/HeaderBlurb'
import style from './HeaderFilter.module.css'
import { useState, useEffect } from 'react'
import AccountMenu from '../AccountMenu/AccountMenu'
import axios from 'axios'

function HeaderFilter() {

    const [month, setMonth] = useState()
    const [year, setYear] = useState();
    const [order, setOrder] = useState([])
    const id = 1;

    useEffect(() => {
        axios.get(`http://localhost:8080/history`)
            .then((res) => {
                setOrder(res.data)
                console.log(order)
            })
    }, [])

    function filterResults() {
        axios.post(`http://localhost:8080/filter/${month}/${year}`)
            .then((res) => {
                setOrder(res.data)
                console.log(order)
            })
    }

    return (
        <div className={style['parent-container']}>
            <div id={style['header-filter-container']}>
                <div className={style['split']}>
                    <Banner />
                </div>
                <div className={style['split']} id={style['extra-container']}>
                    <HeaderBlurb />
                </div>
                <div className={style['split']} id={style['extra-container']} >
                    <div id={style['filter-content-container']}>
                        {/* <input type='text' onChange={(e) => setMonth(e.target.value)} placeholder="Search by Month"></input> */}
                        <select name="month" id="month" onChange={(e) => setMonth(e.target.value)}>
                            <option value="" disabled selected>Search by Month </option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <input type='text' onChange={(e) => setYear(e.target.value)} placeholder="Search by Year"></input>
                        <button id={style['filter-button']} onClick={filterResults}>GO FETCH</button>


                    </div >
                </div>
            </div >
            <div className={style['body-container']}>
                <div id={style['account-menu-container']}>
                    <AccountMenu />
                </div>
                <div id={style['table-container']}>
                    <div id={style['inner-table-container']}>
                        <table id={style['table-style']}>
                            <tr className={style['table-header']}>
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
                            {
                                order.map((history, index) => {
                                    if (history.user_id === id) {
                                        return <tr id={style['table-data']}>
                                            <td>{history._id}</td>
                                            <td>{history.date}</td>
                                            <td>{history.status}</td>
                                            <td>{history.reference}</td>
                                            <td>{history.total_units}</td>
                                            <td>{history.auto_ship}</td>
                                            <td>{history.shipping_location}</td>
                                            <td>{`$${history.total}`}</td>
                                            <td>{`${history.user_id}`}</td>
                                        </tr>
                                    } if (history.user_id === id && month) {
                                        return <tr id={style['table-data']}>
                                            <td>{history._id}</td>
                                            <td>{history.date}</td>
                                            <td>{history.status}</td>
                                            <td>{history.reference}</td>
                                            <td>{history.total_units}</td>
                                            <td>{history.auto_ship}</td>
                                            <td>{history.shipping_location}</td>
                                            <td>{`$${history.total}`}</td>
                                            <td>{`${history.user_id}`}</td>
                                        </tr>
                                    } if (history.user_id === id && year) {
                                        return <tr id={style['table-data']}>
                                            <td>{history._id}</td>
                                            <td>{history.date}</td>
                                            <td>{history.status}</td>
                                            <td>{history.reference}</td>
                                            <td>{history.total_units}</td>
                                            <td>{history.auto_ship}</td>
                                            <td>{history.shipping_location}</td>
                                            <td>{`$${history.total}`}</td>
                                            <td>{`${history.user_id}`}</td>
                                        </tr>
                                    } if (history.user_id === id && month && year) {
                                        return <tr id={style['table-data']}>
                                            <td>{history._id}</td>
                                            <td>{history.date}</td>
                                            <td>{history.status}</td>
                                            <td>{history.reference}</td>
                                            <td>{history.total_units}</td>
                                            <td>{history.auto_ship}</td>
                                            <td>{history.shipping_location}</td>
                                            <td>{`$${history.total}`}</td>
                                            <td>{`${history.user_id}`}</td>
                                        </tr>
                                    }
                                })
                            }

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderFilter