import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import styles from '../styles/videobtn.module.css'
import SubData from './SubData';

const BasicMenu = ({title}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        className={styles.card_btn}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Get Resources
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {SubData.map((curr)=>{

          if(title.includes(curr.subject))
          {
            if(curr.videos.length === 0)
            {
              return (<MenuItem className={styles.list_items} onClick={handleClose}>No videos available</MenuItem>);
            }
            else
            {
              return(
              curr.videos.map((current)=>{
              return(
                  <MenuItem className={styles.list_items} onClick={handleClose} key={current.id} ><Link href={current.link}><a target="_blank">Link {current.id}</a></Link></MenuItem>
              )
            }) );
            }
                 
          }
      })}
      </Menu>
    </div>
  );
}

export default BasicMenu;