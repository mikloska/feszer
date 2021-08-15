import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Grid, Typography} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Link as RouterLink } from 'react-router-dom';

const CustomScroll = styled(PlayCircleFilledIcon)({
  color:'#067e78'
  // color:linear-gradient(120deg, #28ccc4, #067e78),
});

const useStyles = makeStyles({
  root: {
    bottom: 0,
    marginTop:'auto',
    backgroundColor: '#c8d4e8',
    width: "100%",
    marginTop : 35,
    paddingTop: 35,
    height: 260
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
        <Grid item xs={12} style={{textAlign:"center"}}>
          <a href='https://www.facebook.com/SikraJewelry/' target="_blank"><FacebookIcon className={classes.SocialMediaIcons} fontSize="large" style={{ color: 'black', textDecoration: 'none'}}/></a>
          <a href='https://www.instagram.com/sikrajewelry/?hl=en' target="_blank"><InstagramIcon className={classes.SocialMediaIcons} fontSize="large" style={{ color: 'black', textDecoration: 'none'}}/></a>
        </Grid>
        <Grid item xs={12} style={{textAlign:"center"}}><Typography>Copyright © {new Date().getFullYear()} Fészer Band</Typography></Grid>

      </Grid>
    </div>
    
  );
}
