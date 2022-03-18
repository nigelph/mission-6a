import React from 'react'
import style from './UpperHeader.module.css'
import PetLogo from '../../../../assets/pet-logo.png'
import Hamburger from '../../../../assets/hamburger-menu.png'

function UpperHeader() {
    return (
        <div className={style['upper-container']}>
            <div id={style['upper-content-container']}>
                <div id={style['logo-section']}>
                    <div id={style['logo-container']}>
                        <img src={PetLogo} id={style['logo-size']} />
                    </div>
                </div>
                <div id={style['right-container']} >
                    <div id={style['hamburger-section']}>
                        <nav id={style['hamburger-container']}><img src={Hamburger} id={style['hamburger-size']}></img></nav>

                    </div>
                    <div id={style['account-links-container']}>

                        Sign In | Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperHeader