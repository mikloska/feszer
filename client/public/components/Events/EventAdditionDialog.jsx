import React, { useState, useEffect } from 'react';
import {
  Alert, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Edit as EditIcon } from '@mui/icons-material';


import { TextInput } from '../TextInput';
import { handleClickOpen, handleClose, saveEvent } from './eventFunctions';

const EventAdditionDialog = ({ edit = false, config = {} }) => {
  const {
    'name' : savedName = '',
    'address' : savedAddress = '',
    'venue' : savedVenue = '',
    'dateAndTime' : savedDateAndTime = new Date(),
    'flyer' : savedFlyer = '',
    'schedule' : savedSchedule = ''
  } = config
  const [open, setOpen] = useState(false)
  const [formError, setFormError] = useState(false)
  const [eventName, setEventName] = useState(savedName)
  const [eventVenue, setEventVenue] = useState(savedVenue)
  const [eventAddress, setEventAddress] = useState(savedAddress)
  const [eventDateAndTime, setEventDateAndTime] = useState(savedDateAndTime)
  const [eventFlyer, setEventFlyer] = useState(savedFlyer)
  const [eventSchedule, setEventSchedule] = useState(savedSchedule)
  const [eventVideo, setEventVideo] = useState('')

  useEffect(() => {
    if(edit) console.log('config: ', config.schedule.props.href)
  }, [])

  return (
    <div>
      {edit ? 
        <IconButton onClick={() => handleClickOpen(setOpen)}>
          <EditIcon fontSize='small' />
        </IconButton>  
        :
        <Button variant="contained" onClick={() => handleClickOpen(setOpen)} style={{marginLeft: 20}}>
          Add Event
        </Button>
      }

      <Dialog open={open} onClose={() => handleClose(setFormError, setOpen)}>
        <DialogTitle>Add Event</DialogTitle>
        {formError &&
          <Alert severity="formError">Fill out all required fields!</Alert>
        }
        <DialogContent>
          <TextInput 
            textId={'eventName'} textLabel={'Event Name'} setFunction={setEventName}
            defaultText={eventName}
          />
          <TextInput 
            textId={'eventVenue'} textLabel={'Event Venue Name'} setFunction={setEventVenue}
            defaultText={eventVenue}
          />
          <TextInput
            textId={'eventAddress'} textLabel={'Event Address'} setFunction={setEventAddress}
            defaultText={eventAddress}
          />
          <TextInput 
            textId={'eventFlyer'} textLabel={'Event Flyer'} setFunction={setEventFlyer} requiredField={false}
            defaultText={edit ? eventFlyer.props.href : ''}
          />
          <TextInput 
            textId={'eventSchedule'} textLabel={'Event Schedule'} setFunction={setEventSchedule} requiredField={false}
            defaultText={edit ? eventSchedule.props.href : ''}
          />
        </DialogContent>
        <Box style={{width: 150, paddingLeft: 24}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date & Time"
            onChange={(newValue) => {
              setEventDateAndTime(newValue);
            }} value={eventDateAndTime} 
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </Box>
        <DialogActions>
          <Button onClick={()=> 
            saveEvent(
              eventName, eventVenue, eventAddress, eventDateAndTime, eventFlyer, eventSchedule, eventVideo, 
              setEventName, setEventVenue, setEventAddress, setEventDateAndTime, setFormError, setEventFlyer, setEventSchedule, setOpen
            )
          }>
            Save Event
          </Button>
          <Button onClick={() => handleClose(setFormError, setOpen)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventAdditionDialog