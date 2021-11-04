import React from 'react'
import styles from '../../styles/navbarco.module.css'
import ActiveLink from './ActiveLink'
import MobileNav from './MobileNav'


const NavbarColor = () => {
    return (
        <nav className={styles.navbar}>
         <div className={styles.logo}>
             <h1>ResourceHub</h1>
         </div>
         
         <MobileNav  />
         <ul className={styles.navlist}>
           <li><ActiveLink exact href="/" className={styles.navlink}>Home</ActiveLink></li>
           <li><ActiveLink exact href="/Search" className={styles.navlink}>Subjects</ActiveLink></li>
           <li><ActiveLink exact href="/About" className={styles.navlink}>About Us</ActiveLink></li>
           <li><ActiveLink exact href="/Contact" className={styles.navlink}>Contact Us</ActiveLink></li>
         </ul>
         
            
        </nav>
    )
}

export default NavbarColor
