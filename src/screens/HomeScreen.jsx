import { Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomeScreen = () =>{
  // const isSmall = useMediaQuery("max-width:400, max:height:200")
  const language = useSelector((state) => state.language)
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={6} >
      <Grid item md={5} sm={12} style={{textAlign:'center'}}>
      <iframe width='100%' height='225' src="https://www.youtube.com/embed/dH_-7bbv4OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Grid>
      <Grid item  md={5} sm={12} style={{textAlign:'center'}}>
        <Typography>{language==='MAGYAR'?'Fészer Band is a tri-state based Hungarian folk music band.':'A Fészer Banda egy magyar népzenei együttes New Jersey és környékéről.'}</Typography>

        <RouterLink to='/about' style={{color:'none',textDecoration:'none'}}>
          <Button variant="contained" color="primary" style={{marginTop:20}}>{language === 'MAGYAR' ? 'The Band' : 'A Zenekar'}</Button>
        </RouterLink>
      </Grid>
    </Grid>
  )
}

export default HomeScreen