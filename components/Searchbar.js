import React, {useState} from 'react'
import styles from '../styles/search.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import SearchCard from '../components/SearchCard'
import Subdata from './SubData';
import {motion} from 'framer-motion'

const getdata = (curr) => {

    return(
        <SearchCard subject={curr.subject} />
    );
}


const Searchbar = () => {


    const [filterData, setFilterdata] = useState(Subdata);
    const [currInput, setCurrinput] = useState("");
    const [isWritten, setWritten]= useState(false);

    const handleFilter = (event)=>{
        const word = event.target.value;
        setCurrinput(word);
        if(word!="")
        {
            setWritten(true);
        }
        else
        {
            setWritten(false);
        }
        const filtered = Subdata.filter( (curr) => {
        return  curr.subject.toLowerCase().includes(word.toLowerCase());
        }
        );
        setFilterdata(filtered);
    };

    const clearInput = () => {
        setFilterdata(Subdata);
        setCurrinput("");
        setWritten(false);
    };
 

    return (
        <div className={styles.search}>
            <motion.div
            initial={{x:"-200vh"}} 
            animate={{x:0}}
            transition={{duration:1}}
            className={styles.searchInput}
            >
                <input className={styles.input} type="text" value={currInput} placeholder="Search your subject.." onChange={handleFilter} ></input>
               { isWritten==false ? <SearchIcon className={styles.Icon} /> : <CloseIcon className={styles.Icon} style={{cursor:"pointer"}} onClick={clearInput} /> }
            </motion.div>
            <div className={styles.results}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid className={styles.container} container spacing={2} rowSpacing={3}>
                    {filterData.map(getdata)}
                </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Searchbar
