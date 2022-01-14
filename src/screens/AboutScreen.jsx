import React from 'react'
import {Typography, Grid} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Person from '../components/Person'


const AboutScreen = () =>{
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Typography variant ='h3'>{language === 'MAGYAR' ? 'About Us' : 'Rólunk'}</Typography>
      <Grid container style={{marginTop:0}} spacing={6} justifyContent='center' alignItems='center'>
        <Person musicianFirstName='Hunor' musicianLastName='Kiss'/>
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
