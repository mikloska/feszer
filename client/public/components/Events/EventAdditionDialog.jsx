import React, { useState, useEffect } from 'react';
import {
  Alert, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { TextInput } from '../TextInput';

const EventAdditionDialog = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false)
  // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const [eventName, setEventName] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventAddress, setEventAddress] = useState('')
  const [eventDateAndTime, setEventDateAndTime] = useState(new Date())
  const [eventFlyer, setEventFlyer] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setEvent = (event) => {
    setEventDateAndTime(event)
    const dateAndTime = Object.values(event)[2]
    const date = dateAndTime.toDateString();
    const time = dateAndTime.toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ')
    const newEvent = `${date} ${time}`
    return newEvent;
  }

  const saveEvent = (eventName, eventLocation, eventAddress, eventDateAndTime, eventFlyer) => {
    if(eventName === '' || eventLocation === '' || eventAddress === ''){
      setError(true)
    } else {
      const newEvent = setEvent(eventDateAndTime)
      setEventName('')
      setEventLocation('')
      setEventAddress('')
      setEventDateAndTime(new Date())
      setError(false)
      setEventFlyer('')
      console.log('eventName: ', eventName, 'eventLocation: ', eventLocation, 'eventAddress: ', eventAddress, 'newEvent: ', newEvent, 'eventFlyer: ', eventFlyer)
      setOpen(false);
    }
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{marginLeft: 20}}>
        Add Event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        {error &&
          <Alert severity="error">Fill out all required fields!</Alert>
        }
        <DialogContent>
          <TextInput 
            textId={'eventName'} textLabel={'Event Name'} setFunction={setEventName}
          />
          <TextInput 
            textId={'eventLocation'} textLabel={'Event Venue Name'} setFunction={setEventLocation}
          />
          <TextInput
            textId={'eventAddress'} textLabel={'Event Address'} setFunction={setEventAddress}
          />
          <TextInput 
            textId={'eventFlyer'} textLabel={'Event Flyer'} setFunction={setEventFlyer} requiredField={false}
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
          <Button onClick={()=> saveEvent(eventName, eventLocation, eventAddress, eventDateAndTime, eventFlyer)}>Save Event</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventAdditionDialog