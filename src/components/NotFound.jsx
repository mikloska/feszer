import React, {useEffect} from 'react'
import {Alert} from '@material-ui/lab';
import { useLocation } from 'react-router-dom'
import { Grid } from '@material-ui/core';

const NotFound = () =>{

  const location = useLocation();

  return (
    <div>         
      <Grid container justifyContent='center'>
        <Grid item md={11} sm={11}>
          <Alert severity='error'>'{location.pathname.slice(1)}' Not Found</Alert>
        </Grid>
      </Grid>
    </div>
  )
}

export default NotFound