import React, { useState } from 'react'
import styles from './Header.module.scss'
import { BsCartPlusFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSkullCrossbones } from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom'

export const logo = (<div className={styles.logo}>
    <Link to='/'>
        <h2>SHOP<span>Here</span></h2>
    </Link>
</div>)
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")


const Header = () => {
    // Making menu responsive
    const [shoMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!shoMenu)
    }
    const hideMenu = () => {
        setShowMenu(false)

    }
    const cart = (
        <span className={styles.cart}>
            <Link to='/cart'>
                <BsCartPlusFill size={20} />
                <p>0</p>
            </Link>
        </span>
    )
    return (
        <header>
            <div className={styles.header}>
                {logo}
                <nav className={shoMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
                    <div className={shoMenu ? `${styles['nav-wraper']}
                    ${styles['show-nav-wraper']}
                    ` : `${styles['nav-wraper']}`}
                        onClick={hideMenu}
                    >
                    </div>
                    <ul>
                        <li className={styles['logo-mobile']}>
                            {logo}
                            <FaSkullCrossbones size={20} color='#fff' onClick={hideMenu} />
                        </li>
                        <li>
                            <NavLink to='/shop' className={activeLink}>Shop</NavLink>
                        </li>
                    </ul>
                    <div className={styles["header-right"]}>
                        <span className={styles.links}>
                            <NavLink to={"login"} className={activeLink}> Login</NavLink>
                            <NavLink to={"register"} className={activeLink}> Register</NavLink>
                            <NavLink to={"order-history"} className={activeLink}> My Order</NavLink>
                        </span>
                        {cart}
                    </div>
                </nav>
                <div className={styles['menu-icon']}>
                    {/* {cart} */}
                    <GiHamburgerMenu size={20} onClick={toggleMenu} />
                </div>
            </div>
        </header>
    )
}

export default Header
