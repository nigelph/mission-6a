import React from 'react'
import style from './SpecialsBanner.module.css'
import Afterpay from '../../../../assets/afterpay-daysale.png'
import Natural from '../../../../assets/k9-natural.png'
import Addiction from '../../../../assets/addiction-wild-islands.png'
import Animals from '../../../../assets/animals-like-us.png'
import Nutrience from '../../../../assets/nutrience-sale.png'

function SpecialsBanner() {
    return (
        <div className={style['specials-container']}>
            <div className={style['flex-container']}>
                <a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Afterpay} className={style['specials-img']} alt="Afterpay Day Sale!" /></a>
                <a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Natural} className={style['specials-img']} alt="Addiction Wild Islands Sale!" /></a>
                <a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Animals} className={style['specials-img']} alt="Animals Like US sale!" /></a>
                <a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Nutrience} className={style['specials-img']} alt="Animals Like US sale!" /></a>
                <a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Addiction} className={style['specials-img']} alt="Animals Like US sale!" /></a>
            </div>
        </div>
        
    )
}

export default SpecialsBanner