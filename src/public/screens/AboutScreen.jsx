import React, { useContext } from 'react'
import { AppContext } from '../../App';
import {Typography, Grid} from '@mui/material';
import Person from '../components/Person'


const AboutScreen = () =>{
  const {language} = useContext(AppContext)
  return (
    <div>
      <Typography variant ='h3'>{language === 'MAGYAR' ? 'About Us' : 'Rólunk'}</Typography>
      <Grid container style={{marginTop:0}} spacing={6} justifyContent='center' alignItems='center'>
        <Person musicianFirstName='Hunor' musicianLastName='Kosbor'/>
        <Person musicianFirstName='Bence' musicianLastName='Kalán'/>        
        <Person musicianFirstName='Iza' musicianLastName='Valcuha'/> 
        <Person musicianFirstName='György' musicianLastName='Kalán'/>
        <Person musicianFirstName='Brano' musicianLastName='Brinarsky'/>
        <Person musicianFirstName='László' musicianLastName='Gáspár'/>
        <Person musicianFirstName='George' musicianLastName='Petran'/>
        <Person musicianFirstName='Miklós' musicianLastName='Kertész'/>       
      </Grid>
      
    </div>
  )
}

export default AboutScreen
