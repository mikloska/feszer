import { Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {AboutBandText} from '../Text/AboutBandText'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomeScreen = () =>{
  // const isSmall = useMediaQuery("max-width:400, max:height:200")
  const language = useSelector((state) => state.language)
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={6} >
      <Grid item md={5} sm={12} style={{textAlign:'left'}}>
        <iframe width='100%' height='225' src="https://www.youtube.com/embed/VLbdGoYf3_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width='100%' height='225' src="https://www.youtube.com/embed/OQacr-i-V28" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Grid>
      <Grid item  md={5} sm={12} style={{textAlign:'left'}}>
        <Typography>{language==='MAGYAR'?
          AboutBandText.English:AboutBandText.Magyar}</Typography>

        <Grid item  md={4} sm={12} style={{textAlign:'center'}}>
          <RouterLink to='/about' style={{color:'none',textDecoration:'none'}}>
            <Button variant="contained" color="primary" style={{marginTop:20}}>{language === 'MAGYAR' ? 'The Band' : 'A Zenekar'}</Button>
          </RouterLink>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScreen