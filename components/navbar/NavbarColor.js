import React from 'react'
import styles from '../../styles/navbarco.module.css'
import ActiveLink from './ActiveLink'
import MobileNav from './MobileNav'
import Image from 'next/image';
import Logo from "../../assets/images/logo.png";


const NavbarColor = () => {
    return (
        <nav className={styles.navbar}>
         <div className={styles.logo}>
            <Image src={Logo} layout="fill" />
         </div>
         
         <MobileNav  />
         <ul className={styles.navlist}>
           <li><ActiveLink exact href="/" className={styles.navlink}>Home</ActiveLink></li>
           <li><ActiveLink exact href="/Search" className={styles.navlink}>Subjects</ActiveLink></li>
           <li><ActiveLink exact href="/Papers" className={styles.navlink}>Papers</ActiveLink></li>
           <li><ActiveLink exact href="/Team" className={styles.navlink}>Team</ActiveLink></li>
           <li><ActiveLink exact href="/Contact" className={styles.navlink}>Contact Us</ActiveLink></li>
         </ul>
         
            
        </nav>
    )
}

export default NavbarColor
