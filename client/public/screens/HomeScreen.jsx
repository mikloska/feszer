import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Button, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Edit as EditIcon } from '@mui/icons-material';


import { changeLoading } from '../../redux/slices/loadingSlice';
import { useGetAboutBandQuery, useUpdateAboutBandMutation } from '../../redux/slices/aboutBandSlice';
import { ErrorModal } from '../components/ErrorModal';
import { EditModal } from '../components/EditModal/EditModal';

const HomeScreen = () =>{
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.loggedIn.value) 
  const language = useSelector((state) => state.language.value)
  const { data, error, isLoading, refetch } = useGetAboutBandQuery()
  const [edit, setEdit] = useState(false)
  const [newData, setNewData] = useState('')
  const [updateAboutBand, { updateLoading }] = useUpdateAboutBandMutation();

  useEffect(() => {
    // This will be used for the query
    if(isLoading || updateLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading, updateLoading])
  

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={6} >

      {loggedIn && data && edit && 
        <EditModal data=            
          { [
              language==='MAGYAR'?
              data.english : data.magyar
            ]
          }
          setEdit={setEdit}
          setNewData={setNewData}
          submitUpdate={updateAboutBand}
          newData={newData}
          title={'Change About Band Text'}
          refetch={refetch}
          usage={'band'}
        />
      }
      {/* {error && 
        <ErrorModal error={error.data.message}/>
      } */}
      <Grid item md={5} sm={12} style={{textAlign:'left'}}>
        <iframe width='100%' height='225' src="https://www.youtube.com/watch?v=dgqVcvD2hc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                  {loggedIn &&
        <IconButton onClick={() => setEdit(true)}>
          <EditIcon color='primary'/>
        </IconButton>
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