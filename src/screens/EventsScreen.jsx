import React from 'react'

const EventsScreen = () =>{
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23AD1457&ctz=America%2FNew_York&src=Y2oxYzRudDhlODV2ZGtxcDQwcTByN3FicXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%230B8043&showPrint=0&showTabs=1&showNav=1&showCalendars=1&showTz=0"  style={{border: 'solid 1px #777', width: 400, height:600 ,frameborder:0,scrolling:"no"}}></iframe>
    </div>
  )
}

export default EventsScreen



