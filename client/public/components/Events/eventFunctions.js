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
  const date = dateAndTime.toDateString();
  const time = dateAndTime.toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ')
  const newEvent = `${date} ${time}`
  return newEvent;
}

export const saveEvent = async (
    eventName, eventVenue, eventAddress, eventDateAndTime, eventFlyer, eventSchedule, eventVideo, 
    setEventName, setEventVenue, setEventAddress, setEventDateAndTime, setFormError, setEventFlyer, setEventSchedule, setOpen, addEvent, refetch
  ) => {
    console.log('refetch: ', refetch)
  if(eventName === '' || eventVenue === '' || eventAddress === ''){
    setFormError(true)
  } else {
    const newEventDateAndTime = setEvent(eventDateAndTime, setEventDateAndTime)

    // console.log('eventName: ', eventName, 'eventVenue: ', eventVenue, 'eventAddress: ', eventAddress, 'eventFlyer: ', eventFlyer, 'eventSchedule: ', eventSchedule, 'eventVideo: ', eventVideo, 'newEventDateAndTime: ', newEventDateAndTime, )
    const data = {name:  eventName, venue: eventVenue, address:  eventAddress, flyer:  eventFlyer, schedule: eventSchedule, video:  eventVideo, dateAndTime:  newEventDateAndTime}
    try {
      const result = await addEvent(data)
      setEventName('')
      setEventVenue('')
      setEventAddress('')
      setEventDateAndTime(new Date())
      setFormError(false)
      setEventFlyer('')
      setEventSchedule('')
      refetch()
    } catch(error) {
      console.log('error: ', error)
    }
    setOpen(false);
  }
}


export const removeEvent = async (deleteEvent, id, refetch) => {
  try {
    await deleteEvent({id: id})
    refetch()
  } catch(error) {
     console.log('error: ', error)
  }
}