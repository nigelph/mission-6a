import React from 'react'
import UpperFooter from './UpperFooter/UpperFooter'
import MiddleFooter from './MiddleFooter/MiddleFooter'
import BottomFooter from './BottomFooter/BottomFooter'
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style['footer-container']}>
            <UpperFooter />
            <MiddleFooter />
            <BottomFooter />
        </div>
    )
}

export default Footer
