import React, { useState } from 'react'
import ActiveLink from './ActiveLink'
import styles from '../../styles/mobilenav.module.css'
import Toggler from './MoNavTog'
import {motion} from 'framer-motion'

const menutoggle = {
    open: {opacity:1,width:"100%", height:"100vh"},
    closed:{opacity:0,width:0, height:0}
}

const MobileNav = () => {

    const [isOpen, setIsopen] = useState(false);

    return (
        <>
        <Toggler isOpen={isOpen} toggle={()=>{setIsopen(!isOpen)}} /> 

        <motion.ul
        initial={false} 
        animate={isOpen ? "open" : "closed"}
        variants={menutoggle}
        transition={{ duration:0.4}}  // type:"spring", stiffness:"80",
        className={styles.navlist}
        >
        <li><ActiveLink exact href="/" className={styles.navlink}>Home</ActiveLink></li>
        <hr className={styles.lineBreak} />
        <li><ActiveLink exact href="/Search" className={styles.navlink}>Search</ActiveLink></li>
        <hr className={styles.lineBreak} />
        <li><ActiveLink exact href="/About" className={styles.navlink}>About</ActiveLink></li>
        <hr className={styles.lineBreak} />
        <li><ActiveLink exact href="#" className={styles.navlink}>Contact</ActiveLink></li>
        <li className={styles.list_foot}>Resource Hub ❤</li>
        </motion.ul> 
        </>
    )
}

export default MobileNav
