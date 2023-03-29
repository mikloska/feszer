import React, { useState, useEffect, Fragment } from 'react'
import { Modal, Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'

import { TextInput } from '../TextInput'
import { updateUrl } from './editFunctions'
import { changeLoading } from '../../../redux/slices/loadingSlice'

export const EditVideosModal = ({ videos, setEditVideos, setNewVideo, newVideo, updateVideo, refetchVideos }) => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(videos){
      setOpen(true)
    }
  }, [])

  return(
    <Modal
      open={open}
      aria-labelledby="error-modal"
      aria-describedby="error-modal"
      style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
    >
      <Box style={{backgroundColor: 'white', padding: 10, width: '50vw'}}>
        {videos.map((video) => (
          <Fragment  key={`${video.url}-${video.id}`} style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput textId={'edit-about'} textLabel={title} setFunction={setNewVideo} requiredField={false} defaultText={video} multi={true}/>
            <Button variant="contained"
              onClick={() => 
                updateUrl(video.id, newVideo, updateVideo, setNewVideo, refetchVideos, dispatch, changeLoading)
              }
            >
              UPDATE
            </Button>
          </Fragment>
        ))}
      <Button variant="contained" onClick={() => {setEditVideos(false); setOpen(false);}} style={{marginLeft: 40}}>
        CLOSE
      </Button>
      </Box>
    </Modal>
  )
}