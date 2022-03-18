import React from 'react'
import style from './Header.module.css'
import UpperHeader from './components/UpperHeader/UpperHeader'
import BottomHeader from './components/BottomHeader/BottomHeader'

function Header() {
    return (
        <div className={style['header-container']}>
            <UpperHeader />
            <BottomHeader />
        </div>
    )
}

export default Header