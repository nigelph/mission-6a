import React from 'react'
import style from './HeaderBlurb.module.css'

export default function HeaderBlurb() {
    return (
        <div id={style['blurb-container']}>

            <h2 id={style['blurb-style']}>Browse your previous orders</h2>
        </div>
    )
}
