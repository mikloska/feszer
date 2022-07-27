import React, {useState, useContext} from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EventIcon from '@mui/icons-material/Event';
import { IconButton } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';

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
        {
          error &&
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
            autoFocus
            margin="dense"
            id="eventAddress"
            label="Event Address"
            type="event_address"
            fullWidth
            variant="standard"
            onChange={e=>setEventAddress(e.target.value)}
          />
        <DateTimePicker onChange={setEventDateAndTime} value={eventDateAndTime} />
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