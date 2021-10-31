import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import test from '../assets/images/resource.svg'
import Image from 'next/image'
import Infocard from '../components/InfoCards'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'

const motionHead = {
    hidden:{
        y: "-100px",
        opacity: 0
    },
    after:{
        y: 0,
        opacity:1
    }
}

const Home = () => { 
    return (
        <>
        <div className={styles.wrapper}>
         <Navbar className={styles.main_nav} />
         <div className={`${styles.container} ${styles.main}`}>
             <div className={styles.main_content}>
               
                <motion.h1 
                initial="hidden"
                animate="after"
                variants={motionHead}
                transition={{type:"spring", stiffness:"120", duration: 0.5}}
                className={styles.main_head}
                >
                  Resource Hub.
                </motion.h1>

                <motion.p 
                initial={{opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.5 ,duration:2}}
                className={styles.main_text}
                >
                One stop solution for your academics.
                </motion.p>

             </div>

             <div className="">
                <Image src={test} width="600" height="400" className={styles.main_img} alt="" />
             </div>
         </div>

        </div>
        
        <Infocard /> 
        <Footer />
        </>
    )
}

export default Home
