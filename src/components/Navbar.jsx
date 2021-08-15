import React, {useEffect} from 'react';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, TextField, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link as RouterLink } from 'react-router-dom';


const MyBadge = withStyles((theme) => ({
  badge: {
    left: 7,
    top: -4,
    // backgroundColor:'#067e78'
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  Badge : {

  },
  stylebar:{
    background: 'white'
  },
  // Icons:{
  //   background: 'black'
  // },
  logo: {
    height:70,
    marginTop: 10,
    marginRight:20
    // maxWidth: 60,

    // marginRight: "80px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },

  search: {
    
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100VW',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbar= () => {

  const classes = useStyles();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={RouterLink} to='/about' onClick={handleMobileMenuClose}>
        About the Band
      </MenuItem>
      <MenuItem component={RouterLink} to='/events' onClick={handleMobileMenuClose}>
        Upcoming Events
      </MenuItem>
      <MenuItem component={RouterLink} to='/gallery' onClick={handleMobileMenuClose}>
        Gallery
      </MenuItem>
      <MenuItem component={RouterLink} to='/contact' onClick={handleMobileMenuClose}>
        Contact Us
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow} style={{marginBottom:35}}>
      <AppBar position="static" className={classes.stylebar}>
        <Toolbar>
          
          {/* <Image alt="Example Alt" src="https://sikra.s3.us-east-2.amazonaws.com/logo-%2Bhigh%2Bres4.png" /> */}
          {/* <Typography style={{ color: 'inherit', textDecoration: 'inherit'}} component={RouterLink} to='/' className={classes.title} variant="h6" noWrap>
            Sikra Jewelry
          </Typography> */}

          <Typography variant="h6" className={classes.title} component={RouterLink} to='/'>
            <img
              src={'./images/logo.png'}
              alt="logo"
              className={classes.logo}
            />
          </Typography>
 

          
          <div className={classes.grow} />
   
          <div className={classes.sectionDesktop}>
            <Typography aria-label="about" aria-controls="about" color="inherit"
            style={{ color: 'black', textDecoration: 'inherit', marginRight:20 }} component={RouterLink} to='/about'
            >
              About
            </Typography>
            <Typography  aria-label="about" aria-controls="about" aria-haspopup="true" color="inherit"
              style={{ color: 'black', textDecoration: 'inherit', marginRight:20 }} component={RouterLink} to='/events'
            >
              Upcoming Events
            </Typography>
            <Typography  aria-label="about" aria-controls="about" aria-haspopup="true" color="inherit"
              style={{ color: 'black', textDecoration: 'inherit', marginRight:20 }} component={RouterLink} to='/gallery'
            >
              Gallery
            </Typography>
            <Typography  aria-label="about" aria-controls="about" aria-haspopup="true" color="inherit"
             style={{ color: 'black', textDecoration: 'inherit', marginRight:20 }} component={RouterLink} to='/contact'
            >
              Contact Us
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{color:"black"}}/>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}


export default Navbar;