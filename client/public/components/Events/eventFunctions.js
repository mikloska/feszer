import { eventsApi } from "../../../redux/slices/eventsSlice";

export const handleClickOpen = (setOpen) => {
  setOpen(true);
};

export const handleClose = (setFormError, setOpen) => {
  setFormError(false);
  setOpen(false);
};

const setEvent = (event, setEventDateAndTime) => {
  setEventDateAndTime(event)
  const dateAndTime = Object.values(event)[2]
  let time = String(dateAndTime).slice(-41, -36)
  const hour = time.slice(0,2)
  const minutes = time.slice(2,5)
  if(hour == '00') {
    time = `12${minutes} AM`
  } else if(Number(hour) < 12) {
    if(Number(hour) < 10) {
      time = `${time.slice(1)} AM`
    } else {
      time += ' AM'
    }
  } else {
    time = `${Number(hour) === 12 ? hour : Number(hour) - 12}${minutes} PM`
  }
  const date = dateAndTime.toDateString();
  const newEvent = `${date} ${time}`
  return newEvent;
}

export const saveEvent = async (
    eventName, eventVenue, eventAddress, eventDateAndTime, eventFlyer, eventSchedule, eventVideo, 
    setEventName, setEventVenue, setEventAddress, setEventDateAndTime, setFormError, setEventFlyer, setEventSchedule, setOpen, addEvent, dispatch
  ) => {
  if(eventName === '' || eventVenue === '' || eventAddress === ''){
    setFormError(true)
  } else {
    const newEventDateAndTime = setEvent(eventDateAndTime, setEventDateAndTime)
    const data = {
      name:  eventName, 
      venue: eventVenue, 
      address:  eventAddress, 
      flyer:  eventFlyer, 
      schedule: eventSchedule, 
      video:  eventVideo, 
      dateAndTime:  newEventDateAndTime
    }
    try {
      const result = await addEvent(data)
      setEventName('')
      setEventVenue('')
      setEventAddress('')
      setEventDateAndTime(new Date())
      setFormError(false)
      setEventFlyer('')
      setEventSchedule('')
      // refetch()
      dispatch(eventsApi.endpoints.getEvents.initiate())
    } catch(error) {
      console.log('error: ', error)
    }
    setOpen(false);
  }
}


