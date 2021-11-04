import React from 'react'
import NavbarCo from '../components/navbar/NavbarColor'
import Footer from '../components/Footer'
import styles from '../styles/about.module.css'

const Contact = () => {
    return (
        <>
            <NavbarCo />
            <div className={styles.about_main}>
                <h1 className={styles.about_head}>Contact Us</h1>
                <div className={styles.about_text}>
                    <p>
                     Mail at - info.resourcehub01@gmail.com
                    </p>
                </div>
            </div> 
            <Footer />
        </>
    )
}

export default Contact
