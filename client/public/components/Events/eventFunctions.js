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

export const saveEvent = (
    eventName, eventVenue, eventAddress, eventDateAndTime, eventFlyer, eventSchedule, eventVideo, 
    setEventName, setEventVenue, setEventAddress, setEventDateAndTime, setFormError, setEventFlyer, setEventSchedule, setOpen
  ) => {
  if(eventName === '' || eventVenue === '' || eventAddress === ''){
    setFormError(true)
  } else {
    const newEventDateAndTime = setEvent(eventDateAndTime, setEventDateAndTime)
    setEventName('')
    setEventVenue('')
    setEventAddress('')
    setEventDateAndTime(new Date())
    setFormError(false)
    setEventFlyer('')
    setEventSchedule('')
    console.log('eventName: ', eventName, 'eventVenue: ', eventVenue, 'eventAddress: ', eventAddress, 'eventFlyer: ', eventFlyer, 'eventSchedule: ', eventSchedule, 'eventVideo: ', eventVideo, 'newEventDateAndTime: ', newEventDateAndTime, )
    setOpen(false);
  }
}