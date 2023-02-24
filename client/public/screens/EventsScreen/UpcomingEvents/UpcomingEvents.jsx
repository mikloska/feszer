import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {   
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button
} from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material';

import { handleChangePage, handleChangeRowsPerPage, removeEvent } from './upcomingEventsFunctions';
import EventAdditionDialog from '../../../components/Events/EventAdditionDialog'
import { useDeleteEventMutation } from '../../../../redux/slices/eventsSlice';
// import { removeEvent } from '../../../components/Events/eventFunctions';

const UpcomingEvents = ({ events, refetch }) => {
  const [deleteEvent, eventDeletionResponse] = useDeleteEventMutation()
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const language = useSelector((state) => state.language.value)
  const loggedIn = useSelector((state) => state.loggedIn.value) 
  useEffect(()=> {
    if(loggedIn){
      setColumns(current => [...current, { id: 'modify', label: 'Modify', minWidth: 40 }])
    }
    if(!loggedIn && columns.length === 7){
      setColumns([
        ...columns.slice(0, 6)
      ]);
    }
  }, [loggedIn])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([])
  const columnsTranslation = {
    'Event' : 'Esemény',
    'Venue' : 'Helyszín',
    'Address' : 'Cím',
    'Date & Time' : 'Dátum és idő',
    'Flyer' : 'Plakát',
    'Schedule' : 'Program'
  }
  // ()=> removeEvent(deleteEvent, row.id, refetch)}
  const [columns, setColumns] = useState(
    [
      { id: 'name', label: 'Event', minWidth: 100 },
      { id: 'venue', label: 'Venue', minWidth: 100 },
      { id: 'address', label: 'Address', minWidth: 110, maxWidth: 110 },
      { id: 'dateAndTime', label: 'Date & Time', minWidth: 90, maxWidth: 150 },
      { id: 'flyer', label: 'Flyer', minWidth: 90},
      { id: 'schedule', label: 'Schedule', minWidth: 90},
    ] 
  );

  useEffect(() => {
    if(events.length > 0){
      setRows(events)
    }
  }, [events])

  return (
    <Paper>
      <TableContainer sx={{ minHeight: 440 }} style={{overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={loggedIn ? 7 : 6} >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Typography style={{fontSize: 'h6.fontSize', fontWeight: 'bold'}}>
                  {language === 'MAGYAR' ? 'Upcoming Events' : 'Közelgő események'}
                </Typography>
                {loggedIn &&
                  <EventAdditionDialog/>
                }
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map(column => (
                <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth, maxWidth: column.maxWidth, fontWeight: 'bold' }}
              >
                {language === 'MAGYAR' ? column.label : columnsTranslation[column.label]}
              </TableCell>
                    
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, ind) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`${row.name}-${ind}`}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={`${column.id}-${column.label}`} align={column.align}>
                          {(column.id === 'modify' && loggedIn) ?
                          <>
                            <IconButton onClick = {()=> setOpenConfirmationModal(true)}>
                              <DeleteIcon fontSize='small'/>
                            </IconButton>
                            <Dialog
                              open={openConfirmationModal}
                              onClose={()=> setOpenConfirmationModal(false)}
                            >
                              <DialogTitle>
                                Are you sure you'd like to delete this event?
                              </DialogTitle>
                              <DialogActions>
                                <Button onClick={()=> {removeEvent(deleteEvent, row.id, refetch); }}>
                                  Yes
                                </Button>
                                <Button onClick={()=> setOpenConfirmationModal(false)}>
                                  No
                                </Button>
                              </DialogActions>
                            </Dialog>     
                            <EventAdditionDialog edit={true} 
                              config ={
                                {
                                  "id" : row.id,
                                  "name" : row.name,
                                  "venue" : row.venue, 
                                  "address" : row.address, 
                                  "dateAndTime" : row.dateAndTime,
                                  "schedule" : row.schedule.props.href,
                                  "flyer" : row.flyer.props.href,
                                }
                              }
                            />
                          </>
                              :
                            value
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{overflowX: 'hidden'}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default UpcomingEvents