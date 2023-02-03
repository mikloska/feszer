import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import UpcomingEvents from './UpcomingEvents';
import PastEventsModal from './PastEventsModal';
import { useGetEventsQuery, useAddEventMutation, useUpdateEventMutation, useDeleteEventMutation } from '../../../redux/slices/eventsSlice';
import { ErrorModal } from '../../components/ErrorModal';
import { changeLoading } from '../../../redux/slices/loadingSlice';


const EventsScreen = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetEventsQuery()
  const { addEvent, response } = useAddEventMutation()
  const language = useSelector((state) => state.language.value)
  const date = new Date()
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const loggedIn = useSelector((state) => state.loggedIn.value) 
  const currentDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  const [sortedPastEvents, setSortedPastEvents] = useState([])

  const [openPastEventsModal, setOpenPastEventsModal] = useState(false);
  const handlePastEventsModal = () => setOpenPastEventsModal(!openPastEventsModal);
  const createData = ([name, location, address, dateAndTime, modify]) => {
    return { name, location, address, dateAndTime, modify };
  }


  const pastEvenets = [{uri: 'https://feszer-band.s3.amazonaws.com/past-events.docx'}]
  useEffect(() => {
    if(isLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading])

  // const rows = [
  //   createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2030 4:20 PM'),
  //   createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'October 22, 2022'),
  //   createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'September 20, 2022'),
  //   createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023 4:20 PM'),
  //   createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  //   createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  //   createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  //   createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2035'),
  //   createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 21, 2035 4:20 PM'),
  //   createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'August 20, 2022'),
  //   createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2024'),
  //   createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'February 20, 2032 4:20 PM'),
  // ];

  useEffect(()=> {
    if(data){
      const spread = [...data]
      const sorted = spread.sort((date1, date2) => new Date(date2.date_and_time) - new Date(date1.date_and_time))
      setSortedPastEvents(sorted)
    }
  }, [data])

  return (
    <>
      {error && 
        <ErrorModal error={error.data.message}/>
      }
      <UpcomingEvents/>
      <Button variant = "contained" onClick={handlePastEventsModal} style ={{marginTop: 20}}>
        {language === 'MAGYAR' ? 'View Past Events' : 'Múlt események megtekintése'}
      </Button>
      <PastEventsModal handlePastEventsModal={handlePastEventsModal} openPastEventsModal={openPastEventsModal} events={sortedPastEvents}/>
    </>
  );
}

export default EventsScreen
