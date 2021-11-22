import React from 'react'
import NavbarCo from '../components/navbar/NavbarColor'
import Footer from '../components/Footer2'
import styles from '../styles/about.module.css'

const About = () => {
    return (
        <>
            <NavbarCo />
            <div className={styles.about_main}>
                <h1 className={styles.about_head}>ABOUT US</h1>
                <div className={styles.about_text}>
                    <p>
                    {"Get stuck in your studies or don't have the proper material! No worries, we are right here to help you out. We came up with a one-stop solution for all your problems. Here you will find your subject Notes, Books and Lecture videos to assist your way out."}
                    </p>
                    <p>
                    {"If you don't find your subject here, you can mail all those subject names to the mail address given on the website. We will add all those subjects to the resource hub as soon as possible."}
                    </p>
                </div>
            </div> 
            <Footer />
        </>
    )
}

export default About
