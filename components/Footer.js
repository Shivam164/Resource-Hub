import { styled } from '@mui/system'
import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.logo}>Recource Hub</h1>
            <h3 className={styles.foot_text}>Made with <span style={{color:"#E02401"}}>❤</span> by one of you</h3>
        </div>
    )
}

export default Footer
