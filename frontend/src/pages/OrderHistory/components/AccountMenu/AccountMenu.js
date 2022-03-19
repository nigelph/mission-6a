import React from 'react'
import style from './AccountMenu.module.css'
import MenuBanner from '../../../../assets/banner-order-history.png'

function AccountMenu() {
    return (
        <section id={style['section-container']}>
            <div id={style['banner-container']}>
                <img src={MenuBanner} id={style['banner-width']} />
            </div>
            <div>
                <ul id={style['menu-style']}>
                    <h3>Account Menu</h3>
                    <li>Order History</li>
                    <li>Edit Profile</li>
                    <li>Change Password</li>
                    <li>Address Book</li>
                    <li>Credit Cards</li>
                    <li>My Pets</li>
                    <li>Flea & Worm Reminders</li>
                    <li>My Product Reviews</li>
                    <li>My Product Q&A's</li>
                    <li>My Auto Shipments</li>
                    <li>My Recommendations</li>
                    <li>My Email Subscriptions</li>
                    <li>Sign Out of My Account</li>
                </ul>
            </div>
        </section>
    )
}

export default AccountMenu