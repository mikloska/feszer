import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

import { removeEvent } from './upcomingEventsFunctions';
// import { handleChangePage, handleChangeRowsPerPage, removeEvent } from './upcomingEventsFunctions';
import EventAdditionDialog from '../../../components/Events/EventAdditionDialog'
import { useDeleteEventMutation } from '../../../../redux/slices/eventsSlice';
import { changeLoading } from '../../../../redux/slices/loadingSlice';

const UpcomingEvents = ({ events, refetch }) => {
  const dispatch = useDispatch()
  const [deleteEvent] = useDeleteEventMutation()
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
  const [deleteId, setDeleteId] = useState(null)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const columnsTranslation = {
    'Event' : 'Esemény',
    'Venue' : 'Helyszín',
    'Address' : 'Cím',
    'Date & Time' : 'Dátum és idő',
    'Flyer' : 'Plakát',
    'Schedule' : 'Program'
  }

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

  useEffect(() => {
    if (events.length > 0) refetch()
  }, [deleteId])

  return (
    <Paper>
      <TableContainer sx={{ minHeight: 440 }} style={{overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={loggedIn ? 7 : 6} >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Typography style={{fontSize: 'h6.fontSize', fontWeight: 'bold'}}>
                  {/* {language === 'MAGYAR' ? 'Upcoming Events' : 'Közelgő események'} */}
                  {language === 'MAGYAR' ? 'Events' : 'Események'}
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
                            <IconButton onClick = {()=> {setOpenConfirmationModal(true); setDeleteId(row.id)}}>
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
                                <Button onClick={()=> removeEvent(deleteEvent, deleteId, refetch, setDeleteId, setOpenConfirmationModal, dispatch, changeLoading)}>
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
                              refetch={refetch}
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
      
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onPageChange={() => handleChangePage(event, newPage, setPage)}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default UpcomingEvents