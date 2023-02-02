import React from 'react'
import { Typography } from '@mui/material'

const PastEvents = ({events}) => {

  return (
    <>
      {events.map(event => (
        <Typography id="modal-modal-description" sx={{ mt: 2 }} key={`${event.event_name}-${event.date_and_time}`}>
          {`${event.date_and_time.slice(4, event.date_and_time[14] === ' ' ? 14: 15)}: ${event.event_name} - ${event.venue}`}
          { event.video.length > 1 && 
            <>
              {' - Click '}
              <a href = {event.video} target="_blank">
                here
              </a>
              {' to see the video.'}
            </>
          }
          { event.flyer.length > 1 && 
            <>
              {' - Click '}
              <a href = {event.flyer} target="_blank">
                here
              </a>
              {' to see the flyer.'}
            </>
          }
          { event.schedule.length > 1 && 
            <>
              {' - Click '}
              <a href = {event.schedule} target="_blank">
                here
              </a>
              {' to see the schedule.'}
            </>
          }
        </Typography>
      ))}
    </>
  )
}

export default PastEvents