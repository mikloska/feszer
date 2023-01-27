import React, { useState, useEffect, useContext } from 'react'
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
  IconButton 
} from '@mui/material'
import { 
  Delete as DeleteIcon,
  Edit as EditIcon,
  Image as ImageIcon 
} from '@mui/icons-material';

import { AppContext } from '../../../../App';
import { handleChangePage, handleChangeRowsPerPage } from './upcomingEventsFunctions';
import EventAdditionDialog from '../../../components/Events/EventAdditionDialog';

const UpcomingEvents = ({ loggedIn }) => {
  const {language} = useContext(AppContext)
  useEffect(()=> {
    if(loggedIn){
      setColumns(current => [...current, { id: 'modify', label: 'Modify', minWidth: 40 }])
    }
    if(!loggedIn && columns.length === 6){
      setColumns([
        ...columns.slice(0, 5)
      ]);
    }
  }, [loggedIn])

  useEffect(() => {

  }, [language])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const columnsTranslation = {
    'Event' : 'Esemény',
    'Location' : 'Helyszín',
    'Address' : 'Cím',
    'Date & Time' : 'Dátum és idő'
  }
  const [columns, setColumns] = useState(
    [
      { id: 'name', label: 'Event', minWidth: 100 },
      { id: 'location', label: 'Location', minWidth: 100 },
      { id: 'address', label: 'Address', minWidth: 110, maxWidth: 110 },
      { id: 'dateAndTime', label: 'Date & Time', minWidth: 90, maxWidth: 150 },
      { id: 'flyer', label: 'Flyer', minWidth: 90},
    ] 
  );

  const [rows, setRows] = useState([
    {name: 'Christmas Concert', 'location': 'Magyar Tanya', 'address': '1495 Huffs Church Rd, Barto, PA 19504', 'dateAndTime': 'December 4, 2022 2:00 PM', 'flyer': <ImageIcon/>},
    {name: 'Dance House', 'location': 'Hungarian House', 'address': '213 E 82nd St, New York, NY 10028', 'dateAndTime': 'December 3, 2022 7:00 PM', 'flyer': <ImageIcon/>},
    {name: 'Mikulás (Santa Claus)', 'location': 'Reka Darida Foundation', 'address': '1065 Madison Ave, New York, NY 10028', 'dateAndTime': 'December 3, 2022', 'flyer': <ImageIcon/>},
    {name: 'Hungarian Bazaar', 'location': 'Women\'s Club of Chevy Chase', 'address': '7931 Connecticut Ave, Chevy Chase, MD 20815', 'dateAndTime': 'December 19, 2022 1:00 PM', 'flyer': <ImageIcon/>},
  ])
  return (
    <Paper>
      <TableContainer sx={{ minHeight: 440 }} style={{overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={loggedIn ? 6 : 5} >
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
                            <IconButton>
                              <DeleteIcon fontSize='small'/>
                            </IconButton>
                            <IconButton>
                              <EditIcon fontSize='small'/>
                            </IconButton>
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