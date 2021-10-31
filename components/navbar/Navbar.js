import React from 'react'
import styles from '../../styles/navbar.module.css'
import ActiveLink from './ActiveLink'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
         <div className={styles.logo}>
             <h1>ResourceHub</h1>
         </div>
         
         <MobileNav  />
         <ul className={styles.navlist}>
            <ActiveLink exact href="/" className={styles.navlink}><li>Home</li></ActiveLink>
            <ActiveLink exact href="/Search" className={styles.navlink}><li>Search</li></ActiveLink>
            <ActiveLink exact href="/About" className={styles.navlink}><li>About</li></ActiveLink>
            <ActiveLink exact href="#" className={styles.navlink}><li>Contact</li></ActiveLink>
         </ul>
         
            
        </nav>
    )
}

export default Navbar
