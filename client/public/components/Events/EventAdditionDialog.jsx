import React, { useState } from 'react';
import {
  Alert, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const EventAdditionDialog = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false)
  // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const [eventName, setEventName] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventAddress, setEventAddress] = useState('')
  const [eventDateAndTime, setEventDateAndTime] = useState(new Date())

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveEvent = (eventName, eventLocation, eventAddress, eventDateAndTime) => {
    if(eventName === '' || eventLocation === '' || eventAddress === ''){
      setError(true)
    } else {
      setEventName('')
      setEventLocation('')
      setEventAddress('')
      setEventDateAndTime(new Date())
      setError(false)
      console.log('eventName: ', eventName, 'eventLocation: ', eventLocation, 'eventAddress: ', eventAddress, 'eventDateAndTime: ', eventDateAndTime)
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
          <Alert severity="error">Fill out all fields!</Alert>
        }
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="eventName"
            label="Event Name"
            type="event_name"
            fullWidth
            variant="standard"
            onChange={e=>setEventName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="eventLocation"
            label="Event Location"
            type="event_location"
            fullWidth
            variant="standard"
            onChange={e=>setEventLocation(e.target.value)}
          />
          <TextField
            style={{marginBottom: 20}}
            autoFocus
            margin="dense"
            id="eventAddress"
            label="Event Address"
            type="event_address"
            fullWidth
            variant="standard"
            onChange={e=>setEventAddress(e.target.value)}
          />
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DateTimePicker
            
            label="Date & Time"
            onChange={setEventDateAndTime} value={eventDateAndTime} 
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> saveEvent(eventName, eventLocation, eventAddress, eventDateAndTime)}>Save Event</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventAdditionDialog