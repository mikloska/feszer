import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Grid, Typography} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link as RouterLink } from 'react-router-dom';

const CustomScroll = styled(PlayCircleFilledIcon)({
  color:'#067e78'
  // color:linear-gradient(120deg, #28ccc4, #067e78),
});

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#c8d4e8',
    width: "100%",
    marginTop : 35,
    // paddingTop: 35,
    height: 150,
  },
  FooterNav: {
    // marginTop: 70
  },
  ScrollIcon: {
    '&:hover':{opacity:0.5},
    cursor: 'pointer',
    bottom: -53,
    position: 'relative',
    display: 'block',
    margin: 'auto',
    transform: "rotate(-90deg)",
  },
  SocialMediaIcons: {
    '&:hover':{opacity:0.5},
  }
});

export default function Footer({handleScrollClick}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
      <Grid container alignItems="center" justifyContent="center" value={value} onChange={(event, newValue) => {setValue(newValue);}} className={classes.root}>
        {/* <Grid item xs={12} style={{textAlign:"center"}}> */}
          {/* <a href='https://www.facebook.com/feszerband/' target="_blank"> */}
            {/* <FacebookIcon className={classes.SocialMediaIcons} fontSize="large" style={{ color: 'black', textDecoration: 'none'}}/> */}
          {/* </a> */}
          {/* <a href='https://www.instagram.com/feszerband/?hl=en' target="_blank"> */}
            {/* <InstagramIcon className={classes.SocialMediaIcons} fontSize="large" style={{ color: 'black', textDecoration: 'none'}}/> */}
          {/* </a> */}
        {/* </Grid> */}
        <Grid item xs={12} style={{textAlign:"center"}}><Typography>Copyright © {new Date().getFullYear()} Fészer Band</Typography></Grid>

      </Grid>
    </div>
    
  );
}
