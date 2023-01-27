import React, { useState, createContext } from 'react';
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

export const AppContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false)
  const [language, setLanguage] = useState('MAGYAR')
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <>
        <div className = 'page-wrap'>
          <AppContext.Provider value={{language, setLanguage, loggedIn, setLoggedIn}}>
            <Navbar/>
            <Container className='main-container'>
          <Backdrop open={loading}>
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
          </AppContext.Provider>
          <div className="push"></div>
        </div>
        <Footer />
          
      </>
    </Router>
)}

export default App;