import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, IconButton } from '@mui/material'
import { Image as ImageIcon } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import PastEventsModal from './PastEventsModal';
import { useGetEventsQuery } from '../../../redux/slices/eventsSlice';
import { ErrorModal } from '../../components/ErrorModal';
import { changeLoading } from '../../../redux/slices/loadingSlice';


const EventsScreen = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading, refetch } = useGetEventsQuery()
  const language = useSelector((state) => state.language.value)
  const date = new Date()
  const [sortedPastEvents, setSortedPastEvents] = useState([])
  const [sortedFutureEvents, setSortedFutureEvents] = useState([])
  const [openPastEventsModal, setOpenPastEventsModal] = useState(false);
  const handlePastEventsModal = () => setOpenPastEventsModal(!openPastEventsModal);

  useEffect(() => {
    if(isLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading])

  useEffect(()=> {
    if(data){
      const spread = [...data]
      const futureTemp = []
      let start = null;
      const sorted = spread.sort((date1, date2) => new Date(date2.date_and_time) - new Date(date1.date_and_time))
      console.log(date, new Date(sorted[2].date_and_time))
      for(let i = 0; i < sorted.length; i++){
        const currentDate = new Date(sorted[i].date_and_time)
        console.log(currentDate)
        if(new Date(sorted[i].date_and_time) > date){
          start = i
          futureTemp.push(
            { name: sorted[i].event_name, venue: sorted[i].venue, address: sorted[i].address, dateAndTime: sorted[i].date_and_time, 
              'flyer': <IconButton color='primary' disabled={sorted[i].flyer.length > 1 ? false : true} target="_blank" href={sorted[i].flyer}><ImageIcon/></IconButton>,
              'schedule': <IconButton color='primary' disabled={sorted[i].schedule.length > 1 ? false : true} target="_blank" href={sorted[i].schedule}><AssignmentIcon/></IconButton>,
              id: sorted[i].id
            }
          )
        } else {
          break;
        }
      }
      // if(sortedFutureEvents.length === 1) {
      //   refetch()
      // }
      setSortedPastEvents(start ? sorted.slice(start+1): sorted)
      setSortedFutureEvents(futureTemp)
    }
  }, [data])

  return (
    <>
      {error && 
        <ErrorModal error={error.data.message}/>
      }
      <UpcomingEvents events={sortedFutureEvents} refetch={refetch}/>
      <Button variant = "contained" onClick={handlePastEventsModal} style ={{marginTop: 20}}>
        {language === 'MAGYAR' ? 'View Past Events' : 'Múlt események megtekintése'}
      </Button>
      <PastEventsModal handlePastEventsModal={handlePastEventsModal} openPastEventsModal={openPastEventsModal} events={sortedPastEvents}/>
    </>
  );
}

export default EventsScreen
