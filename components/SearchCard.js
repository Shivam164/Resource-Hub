import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import styles from '../styles/search.module.css'
import { useRouter } from 'next/router';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const SearchCard = (props) => {

    const router = useRouter();
    const Subname = props.subject.toLowerCase();

    const getResources = ()=>{
        router.push(`/SubPages/ ${Subname}`);
    };

    return (
        <>   
            <Grid item xs={12} sm={6} md={3}>
            <Item> 
                <Card className={styles.card} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography className={styles.subject} variant="h5" component="div">
                      {props.subject}
                    </Typography>

                    <Button className={styles.card_btn} variant="contained" onClick={getResources} >Get Resources</Button>
                </CardContent>
                </Card>
            </Item>    
            </Grid>
        </>
    )
}

export default SearchCard
