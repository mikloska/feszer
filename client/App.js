import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './public/components/Navbar';
import Footer from './public/components/Footer';
import NotFound from './public/components/NotFound';
import AboutScreen from './public/screens/AboutScreen';
import ContactScreen from './public/screens/ContactScreen';
import EventsScreen from './public/screens/EventsScreen/EventsScreen';
import HomeScreen from './public/screens/HomeScreen';
import GalleryScreen from './public/screens/GalleryScreen';
import { Backdrop, Container, CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [spinnerActive, setSpinnerActive] = useState(false)
  const loading = useSelector((state) => state.loading.value)

  useEffect(() => {
    console.log(localStorage.getItem('loggedIn'))
    window.process = {
      ...window.process,
    };
  }, []);

  useEffect(() => {
    if(loading === false || loading === true) {
      setSpinnerActive(loading)
    }
  }, [loading])

  return (
    <Router>
      <>
        <div className = 'page-wrap'>
          <Navbar/>
          <Container className='main-container'>
            <Backdrop open={spinnerActive}>
              <CircularProgress size='100px' />
            </Backdrop>
            <Switch>
              {/* Need to set root to exact in order to not only render homescreen on all paths */}
              <Route path ='/' component={HomeScreen} exact/>
              <Route path ='/about' component={AboutScreen}/>
              <Route path ='/events' component={EventsScreen}/>
              <Route path ='/contact' component={ContactScreen}/>
              <Route path ='/gallery' component={GalleryScreen}/>
              <Route >
                <NotFound/>
              </Route>
            </Switch>
            </Container>
          <div className="push"></div>
        </div>
        <Footer />
      </>
    </Router>
)}

export default App;