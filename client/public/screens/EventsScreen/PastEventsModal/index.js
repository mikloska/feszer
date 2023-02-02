import React from 'react'
import { Modal, Box, Typography } from '@mui/material'

import pastEventsStyle from './pastEventsModalStyles'
import PastEvents from './PastEvents'

const PastEventsModal = ({ handlePastEventsModal, openPastEventsModal, events }) => {
  return (   
    <Modal
      open={openPastEventsModal}
      onClose={handlePastEventsModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box style = {{overflowY: 'scroll', overflowX: 'hidden'}} sx={pastEventsStyle}>
    <PastEvents events={events}/>
    </Box>
  </Modal>


  )
}

export default PastEventsModal