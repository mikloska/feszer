import React, { useState, createContext } from 'react';
import Navbar from './public/components/Navbar';
import Footer from './public/components/Footer';
import NotFound from './public/components/NotFound';
import AboutScreen from './public/screens/AboutScreen';
import ContactScreen from './public/screens/ContactScreen';
import EventsScreen from './public/screens/EventsScreen';
import HomeScreen from './public/screens/HomeScreen';
import GalleryScreen from './public/screens/GalleryScreen';
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useState('MAGYAR')
  return (
    <Router>
      <>
        <div className = 'page-wrap'>
          <LanguageContext.Provider value={{language, setLanguage}}>
            <Navbar/>
            <Container className='main-container'>
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
          </LanguageContext.Provider>
        </div>
        <Footer />
          
      </>
    </Router>
)}

export default App;