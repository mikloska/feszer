import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

import { changeLoading } from '../../redux/slices/loadingSlice';
import { useGetAboutBandQuery } from '../../redux/slices/aboutBandSlice';

const HomeScreen = () =>{
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.value)
  const { data, error, isLoading } = useGetAboutBandQuery()

  useEffect(() => {
    if(isLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading])
  

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={6} >
      <Grid item md={5} sm={12} style={{textAlign:'left'}}>
        <iframe width='100%' height='225' src="https://www.youtube.com/embed/VLbdGoYf3_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width='100%' height='225' src="https://www.youtube.com/embed/OQacr-i-V28" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Grid>
      <Grid item  md={5} sm={12} style={{textAlign:'left'}}>
        {data && 
          <Typography>
            {
              language==='MAGYAR'?
              data.english : data.magyar
            }
          </Typography>
        }
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