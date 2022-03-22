import React from 'react'
import style from './AccountMenu.module.css'
import MenuBanner from '../../../../assets/banner-order-history.png'

function AccountMenu() {
    return (
        <section id={style['section-container']}>
            <div>
                <ul id={style['menu-style']}>
                    <h1>Account Menu</h1>
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