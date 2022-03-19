import React from 'react'
import style from './MiddleFooter.module.css'
import Mastercard from '../../../assets/mastercard.jpg'
import Visa from '../../../assets/visa.jpg'
import Amex from '../../../assets/amex.jpg'
import Afterpay from '../../../assets/afterpay.jpg'
import Laybuy from '../../../assets/laybuy.jpg'

function MiddleFooter() {
    return (
        <footer className={style['footer-container']}>
            <div className={style['flex-container']}>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Mastercard} id={style['mastercard-img']} alt="Pay with Mastercard" /></a></div>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Visa} id={style['visa-img']} alt="Pay with Visa" /></a></div>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Amex} id={style['amex-img']} alt="Pay with amex" /></a></div>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Afterpay} id={style['afterpay-img']} alt="Pay with afterpay" /></a></div>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Laybuy} id={style['laybuy-img']} alt="Pay with laybuy" /></a></div>  
            </div> 
        </footer>
        
    )
}

export default MiddleFooter