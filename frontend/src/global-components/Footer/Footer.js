import React from 'react'
// import UpperFooter from './UpperFooter/UpperFooter'
import BottomFooter from './BottomFooter/BottomFooter'
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style['footer-container']}>
            {/* <UpperFooter /> */}
            <BottomFooter />
        </div>
    )
}

export default Footer