import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid, Button, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Edit as EditIcon } from '@mui/icons-material';


import { changeLoading } from '../../redux/slices/loadingSlice';
import { useGetVideosQuery, useUpdateVideoMutation } from '../../redux/slices/videosSlice';
import { useGetAboutBandQuery, useUpdateAboutBandMutation } from '../../redux/slices/aboutBandSlice';
import { ErrorModal } from '../components/ErrorModal';
import { EditModal } from '../components/EditModal/EditModal';
import { EditVideosModal } from '../components/EditVideosModal/EditVideosModal';

const HomeScreen = () =>{
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.loggedIn.value) 
  const language = useSelector((state) => state.language.value)
  const { data, error, isLoading, refetch } = useGetAboutBandQuery()
  const { videos, videoFetchError, videosLoading, refetchVideos } = useGetVideosQuery()
  const [edit, setEdit] = useState(false)
  const [editVideos, setEditVideos] = useState(false)
  const [newData, setNewData] = useState('')
  const [newVideo, setNewVideo] = useState('')
  const [updateAboutBand, { updateLoading }] = useUpdateAboutBandMutation();
  const [updateVideo, { updateVideoLoading }] = useUpdateVideoMutation();

  useEffect(() => {
    // This will be used for the query
    if(isLoading || updateLoading || videosLoading || updateVideoLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading, updateLoading, videosLoading, updateVideoLoading])
  

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
      
      {loggedIn && videos && editVideos && 
        <EditVideosModal 
          videos={videos}
          setEditVideos={setEditVideos}
          setNewVideo={setNewVideo}
          newVideo={newVideo}
          updateVideo={updateVideo}
          refetchVideos={refetchVideos}
        />
      }
      {/* {error && 
        <ErrorModal error={error.data.message}/>
      } */}
      {videos && 
        <Grid item md={5} sm={12} style={{textAlign:'left'}}>
          {loggedIn &&
            <Button variant="contained" color="primary" style={{marginTop:20}} onClick={() => setEditVideos(true)}>
              Modify Video urls
            </Button>
          }
          {
            videos.map(video => (
              <iframe width='100%' height='225' src={video.url} key={`${video.url}-${video.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ))
          }
        </Grid>
      }
      <Grid item  md={5} sm={12} style={{textAlign:'left'}}>
        {data && 
          <Typography>
            {
              language==='MAGYAR'?
              data.english : data.magyar
            }
            {
              loggedIn &&
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