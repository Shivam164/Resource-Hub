import React from 'react'
import Card from './Card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../styles/card.module.css'
import Substyles from '../styles/subject.module.css'
import Quotes from './Quotes'
import {useRouter} from 'next/router'
import {NotesCard, BooksCard, VideoCard} from './SubCardCore'
import {motion} from 'framer-motion'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center', 
    color: theme.palette.text.secondary,
  }));

const SubCards = () => {

    const randomQuote =  Quotes[Math.floor(Math.random() * 10)].quote;
    const router = useRouter();
    const path = router.pathname;

    return (
        <>
            <div className={(path == "/") ? styles.quote : Substyles.quote}>
            <motion.h4 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.quoteText}
                >
                {randomQuote}
            </motion.h4>
            </div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid className={styles.container} container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                <Item> <NotesCard id="1" 
                             title="Notes"
                             text="Short notes for those who pull an all nighter, one night before exams :)"
                             icon="notes"  /> </Item>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Item> <BooksCard id="2" 
                             title="Books"
                             text="We do care about all our book worms who like to read :)"
                             icon="book"  /> </Item>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Item> <VideoCard id="3" 
                             title="Videos"
                             text="Not a fan of reading? ,no worries we got your back, watch and learn :)"
                             icon="video"  /> </Item>
                </Grid>
            </Grid>
            </Box>
        </>
    );
}

export default SubCards


