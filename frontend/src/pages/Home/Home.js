import React from 'react'
import SearchBanner from './components/SearchBanner/SearchBanner'
import style from './Home.module.css'

function Home() {

    return (
        <div className={style['home-container']}>

            <SearchBanner />

        </div >
    )
}

export default Home