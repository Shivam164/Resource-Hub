import React, { useState } from 'react'
import ActiveLink from './ActiveLink'
import styles from '../../styles/mobilenav.module.css'
import Toggler from './MoNavTog'
import {motion} from 'framer-motion'
import Image from 'next/image';
import Logo from "../../assets/images/logo.png";

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
        <ActiveLink exact href="/" className={styles.navlink}><li>Home</li></ActiveLink>
        <hr className={styles.lineBreak} />
        <ActiveLink exact href="/Search" className={styles.navlink}><li>Subjects</li></ActiveLink>
        <hr className={styles.lineBreak} />
        <ActiveLink exact href="/Papers" className={styles.navlink}><li>Papers</li></ActiveLink>
        <hr className={styles.lineBreak} />
        <ActiveLink exact href="/About" className={styles.navlink}><li>About Us</li></ActiveLink>
        <hr className={styles.lineBreak} />
        <ActiveLink exact href="/Contact" className={styles.navlink}><li>Contact Us</li></ActiveLink>
        <li className={styles.list_foot}>
            <div style={{width:"10rem", height:"10rem", position:"relative"}}>
                <Image src={Logo} layout="fill" />
            </div>
        </li>
        </motion.ul> 
        </>
    )
}

export default MobileNav
