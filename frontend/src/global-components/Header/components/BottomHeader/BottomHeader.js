import React from 'react'
import style from './BottomHeader.module.css'
import SpoilTitle from '../../../../assets/spoil-your-pet.png'
import ShippingImage from '../../../../assets/shipping-image.png'

function BottomHeader() {
    return (
        <div className={style['bottom-header-container']}>
            <div id={style['bottom-header-content-container']}>

                <div id={style['left']}>
                    <img src={SpoilTitle} id={style['title-size']} />
                </div>

                <div id={style['right']}>

                    <img src={ShippingImage} id={style['title-size']} />
                </div>

            </div>
        </div>
    )
}

export default BottomHeader