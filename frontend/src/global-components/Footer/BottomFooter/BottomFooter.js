import React from 'react'
import style from './BottomFooter.module.css'
function BottomFooter() {
    return (
        <footer className={style['footer-container']}>
            <p>
                &copy; 2013-2022 Pet.co.nz, All rights reserved
                <span className={style['our-friends']}>Visit our friends at <a target="_blank" rel="noreferrer" href="https://www.missionreadyhq.com">Neighbourly.co.nz</a></span>
            </p>
        </footer>
    )
}

export default BottomFooter