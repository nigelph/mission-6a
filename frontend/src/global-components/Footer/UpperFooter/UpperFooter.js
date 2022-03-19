import React from 'react'
import style from './UpperFooter.module.css'
import Autoship from '../../../assets/footer-autoship.png'
import Facebook from '../../../assets/facebook-logo.png'
import Instagram from '../../../assets/instagram-logo.png'
import Youtube from '../../../assets/youtube-logo.png'

function UpperFooter() {
    return (
        <footer className={style['footer-container']}>
            <div className={style['flex-container']}>
                <div>
                    <h3>Help Centre</h3>
                    <ul className={style['list-body']}>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Help &amp; FAQs</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Returns</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Shipping &amp; Delivery</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Orders</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">AutoShip</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">My Account</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Supplier Request</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Product Request</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Company Info</h3>
                    <ul className={style['list-body']}>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">About Us</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Contact Us</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Price Match Page</a></li>
                    </ul>
                    <h3>Pet Information</h3>
                    <ul className={style['list-body']}>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Blog</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Dog Breed Information</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Features</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Terms &amp; Policies</h3>
                    <ul className={style['list-body']}>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Membership Terms</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Sales Terms</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Terms of Use</a></li>
                        <li><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer">Promotional T&amp;'s</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Stay Connected</h3>
                    <ul className={style['list-body']}>
                        <li><a href="https://www.facebook.com/Pet.co.nz" target="_blank" rel="noreferrer"><img src={Facebook} id={style['facebook-logo']} alt="Check out Facebook" /> Facebook</a></li>
                        <li><a href="https://www.instagram.com/pet.co.nz/" target="_blank" rel="noreferrer"><img src={Instagram} id={style['instagram-logo']} alt="Check out Instagram" /> Instagram</a></li>
                        <li><a href="https://www.youtube.com/channel/UC37ITUjNKpAjOIksNrwprQA" target="_blank" rel="noreferrer"><img src={Youtube} id={style['youtube-logo']} alt="Check out Youtube" /> Youtube</a></li>
                    </ul>
                </div>
                <div><a href="https://www.missionreadyhq.com" target="_blank" rel="noreferrer"><img src={Autoship} id={style['autoship-img']} alt="Sign up for autoship" /></a></div>  
            </div>
        </footer>
    )
}

export default UpperFooter