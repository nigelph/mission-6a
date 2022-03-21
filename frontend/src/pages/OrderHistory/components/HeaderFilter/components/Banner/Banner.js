import React from 'react'
import MenuBanner from '../../../../../../assets/banner-order-history.png'
import style from './Banner.module.css'

function Banner() {
    return (
        <div id={style['banner-container']}>
            <img src={MenuBanner} id={style['banner-width']} />
        </div>
    )
}

export default Banner