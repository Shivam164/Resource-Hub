import React, {useEffect} from 'react'
import Card from './Card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../styles/card.module.css';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Quotes from './Quotes'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center', 
    color: theme.palette.text.secondary,
  }));

const InfoCards = () => {
 
    const router = useRouter();

    const redirectMe = () => {
       router.push("/Search");
    };

    const randomQuote =  Quotes[Math.floor(Math.random() * 10)].quote;
    
    // const {ref, inView} = useInView({
    //     threshold : 0.5
    // });
    // const animate = useAnimation();

    // useEffect(() => {
    //     if(inView)
    //     {
    //         animate.start({
    //             y:0,
    //             opacity:1,
    //             transition:{ duration:1 }
    //         }); 
    //     }
    //     else
    //     {
    //         animate.start({
    //             y:"100px",
    //             opacity:0
    //         })
    //     }
    // }, [inView])

    return (
        <>
            <div className={styles.quote}>
                <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 ,duration: 1 }}
                className={styles.quoteText}
                >
                {randomQuote}
                </motion.h3>
            </div>
            {/* <motion.div
             ref={ref}
             animate={animate} 
            > */}
            <Box  sx={{ flexGrow: 1 }}>
            <Grid className={styles.container} container spacing={2}>
                <Grid item xs={12} md={6}>
                <Item> <Card id="1" 
                             title="Notes"
                             text="Short notes for those who pull an all nighter, one night before exams :)"
                             icon="notes"  /> </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                <Item> <Card id="2" 
                             title="Books"
                             text="We do care about all our book worms who like to read :)"
                             icon="book"  /> </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                <Item> <Card id="3" 
                             title="Videos"
                             text="Not a fan of reading? ,no worries we got your back, watch and learn :)"
                             icon="video"  /> </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                <Item> <Card id="4" 
                             title="Papers"
                             text="Previous year papers for our topper friends, who really manage to complete the syllabus :)"
                             icon="paper"  /> </Item>
                </Grid>
            </Grid>
            </Box>
            {/* </motion.div> */}
            <div className={styles.start}>
                <Button className={styles.start_btn} variant="contained" onClick={redirectMe} >Start Learning</Button>
            </div>
        </>
    )
}

export default InfoCards
