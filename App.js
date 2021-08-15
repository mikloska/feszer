import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import EventsScreen from './src/screens/EventsScreen';
import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

});

const App = (showBelow) => {

  const classes = useStyles();
  return (
    <Router>
      <>
        <div className = 'page-wrap'>
        <Navbar/>
          <Container className='main-container'>
            <Route path ='/' component={HomeScreen} exact/>
            <Route path ='/about' component={AboutScreen}/>
            <Route path ='/events' component={EventsScreen}/>
            <Route path ='/contact' component={ContactScreen}/>
            <Route path ='/gallery' component={GalleryScreen}/>
          </Container>

        </div>
        <Footer />
          
      </>
    </Router>
)}

export default App;