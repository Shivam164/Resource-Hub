import React from 'react'
import NavbarCo from '../components/navbar/NavbarColor'
import Footer from '../components/Footer'
import styles from '../styles/about.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image'
import image from '../assets/images/profile.png'

const About = () => {
    return (
        <div className={styles.about_page}>
            <NavbarCo />
            <div className={styles.about_banner}>
                <div className={styles.banner_text}>
                    <h4 className={styles.banner_lineText}>People Who Made It Possible</h4>
                    <p>Designed &</p>
                    <p>Developed by </p>
                    <p className={styles.green_text}>IOSD NSUT.</p>
                </div>
            </div>

            <div className={styles.team}>
                <div className={styles.team_right}>
                    <div className={styles.about_member}>
                        <p className={styles.text_line}>PROJECT LEAD</p>
                        <h1>Bhavy Rastogi</h1>
                        <p>3rd Year IT Student, Netaji Subhas University of Technology</p>
                        <div className={styles.member_links}>
                            <LinkedInIcon style={{ fontSize: 30 }}/>
                            <TwitterIcon style={{ fontSize: 30 }}/>
                            <GitHubIcon style={{ fontSize: 30 }}/>
                            <FacebookIcon style={{ fontSize:30 }}/>
                        </div>
                        <div className={styles.member_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </div>
                    </div>
                    <Image src={image} alt="Picture of the author" width={300} height={300} className={styles.member_image}/>
                </div>

                <div className={styles.team_left}>
                    <div className={styles.about_member}>
                        <p className={styles.text_line}>PROJECT LEAD</p>
                        <h1>Naman</h1>
                        <p>3rd Year IT Student, Netaji Subhas University of Technology</p>
                        <div className={styles.member_links}>
                            <LinkedInIcon style={{ fontSize: 30 }}/>
                            <TwitterIcon style={{ fontSize: 30 }}/>
                            <GitHubIcon style={{ fontSize: 30 }}/>
                            <FacebookIcon style={{ fontSize:30 }}/>
                        </div>
                        <div className={styles.member_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </div>
                    </div>
                    <Image src={image} alt="Picture of the author" width={300} height={300} className={styles.member_image}/>
                </div>

                <div className={styles.team_right}>
                    <div className={styles.about_member}>
                        <p className={styles.text_line}>DEVELOPER AND DESIGNER</p>
                        <h1>Vedansh Arun</h1>
                        <p>3rd Year IT Student, Netaji Subhas University of Technology</p>
                        <div className={styles.member_links}>
                            <LinkedInIcon style={{ fontSize: 30 }}/>
                            <TwitterIcon style={{ fontSize: 30 }}/>
                            <GitHubIcon style={{ fontSize: 30 }}/>
                            <FacebookIcon style={{ fontSize:30 }}/>
                        </div>
                        <div className={styles.member_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </div>
                    </div>
                    <Image src={image} alt="Picture of the author" width={300} height={300} className={styles.member_image}/>
                </div>

                <div className={styles.team_left}>
                    <div className={styles.about_member}>
                        <p className={styles.text_line}>DEVELOPER</p>
                        <h1>Shivam</h1>
                        <p>3rd Year IT Student, Netaji Subhas University of Technology</p>
                        <div className={styles.member_links}>
                            <LinkedInIcon style={{ fontSize: 30 }}/>
                            <TwitterIcon style={{ fontSize: 30 }}/>
                            <GitHubIcon style={{ fontSize: 30 }}/>
                            <FacebookIcon style={{ fontSize:30 }}/>
                        </div>
                        <div className={styles.member_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </div>
                    </div>
                    <Image src={image} alt="Picture of the author" width={300} height={300} className={styles.member_image}/>
                </div>

                <div className={styles.team_right}>
                    <div className={styles.about_member}>
                        <p className={styles.text_line}>DEVELOPER</p>
                        <h1>Rohan</h1>
                        <p>3rd Year IT Student, Netaji Subhas University of Technology</p>
                        <div className={styles.member_links}>
                            <LinkedInIcon style={{ fontSize: 30 }}/>
                            <TwitterIcon style={{ fontSize: 30 }}/>
                            <GitHubIcon style={{ fontSize: 30 }}/>
                            <FacebookIcon style={{ fontSize:30 }}/>
                        </div>  
                        <div className={styles.member_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </div>
                    </div>
                    <Image src={image} alt="Picture of the author" width={300} height={300} className={styles.member_image}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
