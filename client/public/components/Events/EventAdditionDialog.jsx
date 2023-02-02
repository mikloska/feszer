import React, { useState, useEffect } from 'react';
import {
  Alert, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { TextInput } from '../TextInput';
import { useGetEventsQuery, useAddEventMutation, useUpdateEventMutation, useDeleteEventMutation } from '../../../redux/slices/eventsSlice';
import { handleClickOpen, handleClose, saveEvent } from './eventFunctions';

const EventAdditionDialog = () => {
  const { addEvent, response } = useAddEventMutation();

  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState(false)
  const { data, error, isLoading } = useGetEventsQuery()
  const [eventName, setEventName] = useState('')
  const [eventVenue, setEventVenue] = useState('')
  const [eventAddress, setEventAddress] = useState('')
  const [eventDateAndTime, setEventDateAndTime] = useState(new Date())
  const [eventFlyer, setEventFlyer] = useState('')

  return (
    <div>
      <Button variant="contained" onClick={() => handleClickOpen(setOpen)} style={{marginLeft: 20}}>
        Add Event
      </Button>
      <Dialog open={open} onClose={() => handleClose(setFormError, setOpen)}>
        <DialogTitle>Add Event</DialogTitle>
        {formError &&
          <Alert severity="formError">Fill out all required fields!</Alert>
        }
        <DialogContent>
          <TextInput 
            textId={'eventName'} textLabel={'Event Name'} setFunction={setEventName}
          />
          <TextInput 
            textId={'eventVenue'} textLabel={'Event Venue Name'} setFunction={setEventVenue}
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
          <Button onClick={()=> saveEvent(
            eventName, eventVenue, eventAddress, eventDateAndTime, eventFlyer, setEventName, setEventVenue,
            setEventAddress, setEventDateAndTime, setFormError, setEventFlyer, setOpen
          )}>Save Event</Button>
          <Button onClick={() => handleClose(setFormError, setOpen)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventAdditionDialog