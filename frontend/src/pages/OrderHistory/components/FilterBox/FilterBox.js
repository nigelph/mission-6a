import React from 'react'
import style from './FilterBox.module.css'

function FilterBox() {
    return (
        <div id={style['filter-content-container']}>
            <div id={style['filter-content-wrapper']}>
                <h3>SEARCH ORDERS fast</h3>
                <span>1 <input type='text' placeholder="Search by Month"></input></span>
                <span>2 <input type='text' placeholder="Search by Year"></input>
                </span>
                <button id={style['filter-button']}>SEARCH NOW</button>
            </div>
        </div>
    )
}

export default FilterBox