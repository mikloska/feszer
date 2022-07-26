import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../App';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import LoginDialog from './LoginDialog';


const useStyles = makeStyles((theme) => ({
  Badge : {

  },
  stylebar:{
    background: 'white'
  },
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
  const {language, setLanguage} = useContext(AppContext)
  const [nav,setNav]=useState('')
  const location = useLocation();
  const classes = useStyles();
  const handleLanguage = () =>{
    language === 'MAGYAR' ? setLanguage('ENGLISH') : setLanguage('MAGYAR')
  }
  const login = () => {

  }

  useEffect(()=>{
    setNav(location.pathname)

  }, [language, location])

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
      <MenuItem component={RouterLink} to='/about' onClick={handleMobileMenuClose} style={{marginRight: '20px'}}>
        {language === 'MAGYAR' ? 'About Us' : 'Rólunk'}
      </MenuItem>
      <MenuItem component={RouterLink} to='/events' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Events' : 'Események'}
      </MenuItem>
      {/* <MenuItem component={RouterLink} to='/gallery' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Gallery' : 'Képek'}
      </MenuItem> */}
      <MenuItem component={RouterLink} to='/contact' onClick={handleMobileMenuClose}>
        {language === 'MAGYAR' ? 'Contact Us' : 'Kapcsolat'}
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow} style={{marginBottom:35}}>
      <AppBar position="static" className={classes.stylebar} style={{backgroundColor: 'white'}}>
        <Toolbar>     
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
            <Typography aria-label="about" aria-controls="about"  style={{marginRight: '30px'}}
               className={nav==='/about'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/about'
            >
              {language === 'MAGYAR' ? 'About Us' : 'Rólunk'}
            </Typography>
            <Typography  aria-label="events" aria-controls="events" aria-haspopup="true" style={{marginRight: '30px'}}
              className={nav==='/events'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/events'
            >
              {language === 'MAGYAR' ? 'Events' : 'Események'}
            </Typography>
            {/* <Typography  aria-label="gallery" aria-controls="gallery" aria-haspopup="true" color="inherit"
              className={nav==='/gallery'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/gallery'
            >
              {language === 'MAGYAR' ? 'Gallery' : 'Képek'}
            </Typography> */}
            <Typography  aria-label="contact" aria-controls="contact" aria-haspopup="true" style={{marginRight: '30px'}}
             className={nav==='/contact'?classes.Visiting:classes.NotVisiting} component={RouterLink} to='/contact'
            >
              {language === 'MAGYAR' ? 'Contact Us' : 'Kapcsolat'}
            </Typography>
          </div>
          <Box style={{display:'flex',flexDirection:'column', paddingBottom:10, marginRight:20, textAlign:'center'}}>
            <IconButton style={{paddingBottom:0, height:40}} onClick={handleLanguage}>
              <LanguageIcon style={{paddingBottom:10}} fontSize='small'/>
            </IconButton>
          <Typography style={{fontSize:'.5rem', color:'rgba(0, 0, 0, 0.54)'}}>{language}</Typography>
          </Box>
          <LoginDialog/>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true"
              onClick={handleMobileMenuOpen}  color="inherit"
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