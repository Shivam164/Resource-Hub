import React from 'react'
import styles from "../../styles/paper.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PaperData from './PaperData';
import Image from "next/image";

const PaperCard = ({title, image}) => {

    const getMidsem = (event) => {
     
        event.preventDefault();
        PaperData.map( (curr) => {
        
            if(curr.title === event.target.name)
            {
                window.open(curr.midsem, "_blank");
            }
        });
      }

      const getEndsem = (event) => {
     
        event.preventDefault();
        PaperData.map( (curr) => {
        
            if(curr.title === event.target.name)
            {
               window.open(curr.endsem, "_blank");
            }
        });
      }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className={styles.paperCard}>
            <div className={styles.imgWrap}>
                <div className={styles.imgdiv}>
                    <Image src={image} layout="fill" />
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <div className={styles.border}>
                <div className={styles.titleDiv}>
                    <h1 className={styles.branchName}>{title}</h1>
                </div>
                </div>
            </div>
            <div className={styles.btnDiv}>
            <Button name={title} className={styles.card_btn} variant="contained" onClick={getMidsem} >Mid Semester</Button>
            <Button name={title} className={styles.card_btn} variant="contained" onClick={getEndsem} >End Semester</Button>
            </div>
        </div>
        </Grid>
    )
}

export default PaperCard
