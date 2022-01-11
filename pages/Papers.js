import React from 'react'
import NavbarCo from "../components/navbar/NavbarColor";
import Cards from "../components/prevPapers/PaperCard";
import PaperData from "../components/prevPapers/PaperData";
import styles from "../styles/paper.module.css";
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';


const Papers = () => {

    const getData = (curr)=>{
        return(
            <Cards 
                title={curr.title}
                image={curr.image.src}
            />
        );
    }

    return (
        <>
        <NavbarCo />
        <div className={styles.subdiv}>
            <h1 className={styles.heading}>PREVIOUS YEAR PAPERS</h1>
        </div>
        <div className={styles.mainDiv}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid className={styles.container} container spacing={2} rowSpacing={3}>
                {PaperData.map(getData)}
            </Grid>
            </Box>
        </div>
        </>
    )
}

export default Papers
