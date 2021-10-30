import React from 'react'
import styles from '../styles/navbar.module.css'
import ActiveLink from './ActiveLink'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
         <div className={styles.logo}>
             <h1>ResourceHub</h1>
         </div>
         
         <ul className={styles.navlist}>
           <li><ActiveLink exact href="/" className={styles.navlink}>Home</ActiveLink></li>
           <li><ActiveLink exact href="/Search" className={styles.navlink}>Search</ActiveLink></li>
           <li><ActiveLink exact href="/About" className={styles.navlink}>About</ActiveLink></li>
           <li><ActiveLink exact href="#" className={styles.navlink}>Contact</ActiveLink></li>
         </ul>
         
            
        </nav>
    )
}

export default Navbar
