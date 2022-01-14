import React, {useState,useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, TextField, Badge, Box} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_LANGUAGE } from '../redux/constants';
import { useLocation } from 'react-router-dom'


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
    width:'100%',
    marginTop: 10,
    // marginRight:20
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
  title: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  NotVisiting:{
    color: 'black', 
    textDecoration: 'inherit', 
    borderBottom: '2px solid white',
    marginRight:20

  },
  Visiting:{
    // position:'static',
    color: 'black',
    // opacity:0.5,
    borderBottom: '2px solid #BC0813',
    textDecoration: 'inherit', 
    marginRight:20
  }


}));

const Navbar= () => {
  const [nav,setNav]=useState('')
  const location = useLocation();
  // setNav(location.pathName)
  // console.log('location: ', location.pathname)
  // setNav(location.pathName)
  const dispatch = useDispatch()
  const classes = useStyles();
  const language = useSelector((state) => state.language)
  const [siteLanguage, setSiteLanguage] = useState(language)
  const handleLanguage = () =>{
    dispatch({ type: CHANGE_LANGUAGE })
  }

  useEffect(()=>{
    setSiteLanguage(language)
    setNav(location.pathname)
    // console.log(nav)

  }, [language, location])



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
      // onMouseOut={handleMobileMenuClose}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={RouterLink} to='/about' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'About Us' : 'Rólunk'}
      </MenuItem>
      <MenuItem component={RouterLink} to='/events' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Events' : 'Események'}
      </MenuItem>
      <MenuItem component={RouterLink} to='/gallery' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Gallery' : 'Képek'}
      </MenuItem>
      <MenuItem component={RouterLink} to='/contact' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Contact Us' : 'Kapcsolat'}
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
            {/* <Box height="100%"> */}
            <Box width={1/2}><img
              src={language === 'MAGYAR' ? 'https://feszer-band.s3.amazonaws.com/feszer-logo-landscape.png' : 'https://feszer-band.s3.amazonaws.com/feszer-logo-landscape-magyar.png'}
              alt="logo"
              className={classes.logo}
            /></Box>
          </Typography>          
          <div className={classes.grow} />
   
          <div className={classes.sectionDesktop}>
            <Typography aria-label="about" aria-controls="about" color="inherit"
               className={nav==='/about'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/about'
            >
              {language === 'MAGYAR' ? 'About Us' : 'Rólunk'}
            </Typography>
            <Typography  aria-label="events" aria-controls="events" aria-haspopup="true" color="inherit"
              className={nav==='/events'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/events'
            >
              {language === 'MAGYAR' ? 'Events' : 'Események'}
            </Typography>
            <Typography  aria-label="gallery" aria-controls="gallery" aria-haspopup="true" color="inherit"
              className={nav==='/gallery'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/gallery'
            >
              {language === 'MAGYAR' ? 'Gallery' : 'Képek'}
            </Typography>
            <Typography  aria-label="contact" aria-controls="contact" aria-haspopup="true" color="inherit"
             className={nav==='/contact'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/contact'
            >
              {language === 'MAGYAR' ? 'Contact Us' : 'Kapcsolat'}
            </Typography>
          </div>
          <Box style={{display:'flex',flexDirection:'column', paddingBottom:10, marginRight:20, textAlign:'center'}}>
            <IconButton style={{paddingBottom:0}} onClick={handleLanguage}>
              <LanguageIcon fontSize='small'/>
            </IconButton>
          <Typography style={{fontSize:'.5rem', color:'rgba(0, 0, 0, 0.54)'}}>{siteLanguage}</Typography>
          </Box>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{color:"black", marginRight:10}}/>
            </IconButton>
          </div>



        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}


export default Navbar;