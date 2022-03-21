import React from 'react'
import style from './FilterBox.module.css'
import { useState } from 'react'
import axios from 'axios'
function FilterBox() {

    const [date, setDate] = useState([])
    const [month, setMonth] = useState([]);
    const [year, setYear] = useState();
    const [products, setProducts] = useState([]);


    function orderFilter(params) {
        axios.get(`http://localhost:8080/filter`)
            .then((res) => {
                console.log(res)
            })
    }

    function postYear() {
        axios.post(`http://localhost:8080/filter/${year}`)
            .then((res) => {
                console.log(res.data)
                setYear(res.data)
            })
    }

    function postMonth(e) {
        axios.post(`http://localhost:8080/month/${month}`)
            .then((res) => {
                e.preventDefault()
                console.log(res.data)
                setProducts(res.data)
            })
    }

    return (
        <div id={style['filter-content-container']}>
            <input type='text' onChange={(e) => setMonth(e.target.value)} placeholder="Search by Month"></input>
            <select name="cars" id="cars" onChange={(e) => setMonth(e.target.value)}>
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
            <button id={style['filter-button']} onClick={postMonth}>GO FETCH</button>

            {
                products.map(prod =>
                    <div>

                        <p>{prod.auto_ship}</p>
                    </div>
                )
            }
        </div>
    )
}

export default FilterBox