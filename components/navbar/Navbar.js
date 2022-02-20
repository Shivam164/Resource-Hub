import React from 'react'
import styles from '../../styles/navbar.module.css'
import ActiveLink from './ActiveLink'
import MobileNav from './MobileNav'
import Image from 'next/image';
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
         <div className={styles.logo}>
             <Image src={Logo} layout="fill" />
         </div>
         
         <MobileNav  />
         <ul className={styles.navlist}>
            <ActiveLink exact href="/" className={styles.navlink}><li>Home</li></ActiveLink>
            <ActiveLink exact href="/Search" className={styles.navlink}><li>Subjects</li></ActiveLink>
            <ActiveLink exact href="/Papers" className={styles.navlink}><li>Papers</li></ActiveLink>
            <ActiveLink exact href="/Team" className={styles.navlink}><li>Team</li></ActiveLink>
            <ActiveLink exact href="/Contact" className={styles.navlink}><li>Contact Us</li></ActiveLink>
         </ul>
         
            
        </nav>
    )
}

export default Navbar
