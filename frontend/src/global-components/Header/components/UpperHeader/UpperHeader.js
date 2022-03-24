import React from 'react'
import style from './UpperHeader.module.css'
import PetLogo from '../../../../assets/pet-logo.png'
import Hamburger from '../../../../assets/hamburger-menu.png'
import Cart from '../../../../assets/cart.png'
import Profile from '../../../../assets/profile.png'

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
                    {/* <div id={style['account-links-container']}>
                        <div id={style['profile-area']}>
                            <a href='http://localhost:3000/orders'>
                                <img src={Profile} className={style['icon-style']} />
                            </a>
                            <p className={style['icon-title']}><span>Sign In | <span id={style['signup-style']}>Sign Up</span> </span></p>

                        </div>
                        <div id={style['shopping-cart-area']}>
                            <img src={Cart} className={style['icon-style']} />
                            <p className={style['icon-title']}>My Cart</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default UpperHeader