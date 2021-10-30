import styledEngine from '@mui/styled-engine'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import test from '../assets/images/resource.svg'
import Image from 'next/image'
import Infocard from '../components/InfoCards'
import Footer from '../components/Footer'


const Home = () => { 
    return (
        <>
        <div className={styles.wrapper}>

         <Navbar />
         <div className={`${styles.container} ${styles.main}`}>
             <div className={styles.main_content}>
                <h1 className={styles.main_head}>Resource Hub.</h1>
                <p className={styles.main_text}>One stop solution for your academics.</p>
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
