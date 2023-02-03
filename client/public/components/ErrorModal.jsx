import React, { useState, useEffect } from 'react'
import { Modal, Typography, Box } from '@mui/material'

export const ErrorModal = ({ error }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if(error){
      setOpen(true)
    }
  }, [])
  return(
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="error-modal"
    aria-describedby="error-modal"
    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
  >
  <Box style={{backgroundColor: 'white', padding: 60}}>
    <Typography variant="h6">
      Error
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {error}
    </Typography>
  </Box>
</Modal>
  )
}