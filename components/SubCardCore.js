import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../styles/card.module.css';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import SubData from './SubData'


export const NotesCard = (props) => {

  const router = useRouter();

  const getResource = (event) => {
     
    event.preventDefault();
    const subName = router.query.subject;

     SubData.map( (curr) => {
           console.log(curr.subject);
           if(subName.includes(curr.subject))
           {
              window.open(curr.notes, "_blank");
           }
     });
  }

  return (
    <Card className={styles.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <StickyNote2Icon className={styles.icon} />
        <Typography className={styles.card_title} variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography className={styles.card_text} variant="body2">
          {props.text}
        </Typography>
        <Button className={styles.card_btn} variant="contained" onClick={getResource} >Get Resources</Button> 
      </CardContent>
    </Card>
  );
}

export const BooksCard = (props) => {

    const router = useRouter();

    const getResource = (event) => {
     
        event.preventDefault();
        const subName = router.query.subject;
    
         SubData.map( (curr) => {
               console.log(curr.subject);
               if(subName.includes(curr.subject))
               {
                  window.open(curr.books, "_blank");
               }
         });
    }
  
    return (
      <Card className={styles.card} sx={{ minWidth: 275 }}>
        <CardContent>
           <MenuBookIcon className={styles.icon} />  
          <Typography className={styles.card_title} variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography className={styles.card_text} variant="body2">
            {props.text}
          </Typography>
          <Button className={styles.card_btn} variant="contained" onClick={getResource} >Get Resources</Button> 
        </CardContent>
      </Card>
    );
  }

  export const VideoCard = (props) => {

    const router = useRouter();
    const path = router.pathname;
  
    const getResource = () => {
       const subName = router.query.subject;
       
  
    }
  
    return (
      <Card className={styles.card} sx={{ minWidth: 275 }}>
        <CardContent>
          <OndemandVideoIcon className={styles.icon} /> 
          <Typography className={styles.card_title} variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography className={styles.card_text} variant="body2">
            {props.text}
          </Typography>
          <Button className={styles.card_btn} variant="contained" onClick={getResource} >Get Resources</Button>
        </CardContent>
      </Card>
    );
  }

  export default {NotesCard, BooksCard, VideoCard};