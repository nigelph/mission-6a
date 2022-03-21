import React from 'react'
import Banner from './components/Banner/Banner'
import HeaderBlurb from './components/HeaderBlurb/HeaderBlurb'
import FilterBox from './components/FilterBox/FilterBox'
import style from './HeaderFilter.module.css'

function HeaderFilter() {
    return (
        <div id={style['header-filter-container']}>
            <div className={style['split']}>
                <Banner />
            </div>
            <div className={style['split']} id={style['test']}>
                <HeaderBlurb />
            </div>
            <div className={style['split']} id={style['test']} >
                <FilterBox />
            </div>
        </div >
    )
}

export default HeaderFilter