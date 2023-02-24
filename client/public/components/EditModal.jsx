import React, { useState, useEffect } from 'react'
import { Modal, Box, Button } from '@mui/material'
import { TextInput } from './TextInput'

export const EditModal = ({ data, setEdit, setNewData, submitUpdate, newData, title }) => {
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
    onClick={() => {submitUpdate(newData); setOpen(false);}}
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