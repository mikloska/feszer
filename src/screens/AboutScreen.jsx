import React from 'react'
import {Typography, Card, Grid, Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  Box: {
    width:350
  },
  Media:{
    maxWidth:'100%'
  },
  Heading:{
    padding:5
  }


}));


const AboutScreen = () =>{
  const language = useSelector((state) => state.language)
  const classes = useStyles();
  return (
    <div>
      <Typography variant ='h3'>{language === 'MAGYAR' ? 'About Us' : 'Rólunk'}</Typography>
      <Grid container style={{marginTop:0}} spacing={6} justifyContent='center' alignItems='center'>
        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Hunor.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Hunor Kiss - violin, viola' : 'Kiss Hunor - hegedű, brácsa'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Bence.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Bence Kalán - violin, viola' : 'Kalán Bence - hegedű, brácsa'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Gyuri.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'George Kalán - viola' : 'Kalán György - brácsa'}
              
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Brano.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              Brano Brinarsky{language === 'MAGYAR' ? ' - double bass' : ' - nagybőgő'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Lacko.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'László Gáspár - double bass' : 'Gáspár László - nagybőgő'}
             
              
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/George.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              George Petran{language === 'MAGYAR' ? ' - viola, cimbalom, tárogató' : ' - brácsa, cimbalom, tárogató'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item s={12} m={3}>
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'./src/img/Miklos.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Miklós Kertész - accordion, viola' : 'Kertész Miklós - harmonika, brácsa'}
            </Typography>
          </Paper>
        </Grid>
        
      </Grid>
      
    </div>
  )
}

export default AboutScreen
