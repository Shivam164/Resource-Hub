import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../styles/card.module.css';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AttachmentIcon from '@mui/icons-material/Attachment';
 

export default function BasicCard(props) {

  return (
    <Card className={`${styles.card} ${styles.home_card}`} sx={{ minWidth: 275 }}>
      <CardContent>
         {(props.icon === "notes") && <StickyNote2Icon className={styles.icon} /> }
         {(props.icon === "book") && <MenuBookIcon className={styles.icon} />  }
         {(props.icon === "video") && <OndemandVideoIcon className={styles.icon} /> }
         {(props.icon === "paper") && <AttachmentIcon className={styles.icon} /> }
        <Typography className={styles.card_title} variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography className={styles.card_text} variant="body2">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}