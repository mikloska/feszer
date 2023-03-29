import React, { useState, useEffect } from 'react'
import { Modal, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { TextInput } from '../TextInput'
import { updatePerson, updateAbout } from './editFunctions'
import { useUpdateAboutMemberMutation } from '../../../redux/slices/aboutMembersSlice';
import { useUpdateAboutBandMutation } from '../../../redux/slices/aboutBandSlice'
import { changeLoading } from '../../../redux/slices/loadingSlice'

export const EditModal = ({ data, id, setEdit, setNewData, newData, title, refetch, usage }) => {
  const [updateAboutBand] = useUpdateAboutBandMutation()
  const [updateAboutMember] = useUpdateAboutMemberMutation()
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.value)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if(data){
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
        {data.map((text) => (
          <TextInput textId={'edit-about'} textLabel={title} setFunction={setNewData} requiredField={false} defaultText={text} multi={true} key={`${text}`}/>
        ))}
      <Button variant="contained"
        onClick={() =>  usage === 'person' ?
          updatePerson(id, newData, language === 'MAGYAR' ? 'english' : 'magyar', updateAboutMember, setOpen, setNewData, setEdit, refetch, dispatch, changeLoading) :
          updateAbout(newData,  language === 'MAGYAR' ? 'english' : 'magyar', updateAboutBand, setOpen, setNewData, setEdit, refetch, dispatch, changeLoading)
        }
      >
        UPDATE
      </Button>
      <Button variant="contained" onClick={() => {setEdit(false); setOpen(false);}} style={{marginLeft: 40}}>
        CANCEL
      </Button>
      </Box>
    </Modal>
  )
}