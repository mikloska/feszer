import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { AppContext } from '../../App';
import EventAdditionDialog from '../components/Events/EventAdditionDialog';



const EventsScreen = () => {
  const {loggedIn} = useContext(AppContext)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columns, setColumns] = useState([
      { id: 'name', label: 'Event', minWidth: 100 },
      { id: 'location', label: 'Location', minWidth: 100 },
      { id: 'address', label: 'Address', minWidth: 110, maxWidth: 110 },
      { id: 'dateAndTime', label: 'Date & Time', minWidth: 90, maxWidth: 150 },
    ] 
  );

  
  const createData = (name, location, address, dateAndTime, modify) => {
    return { name, location, address, dateAndTime, modify };
  }
  
  const rows = [
    createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023 4:20 PM'),
    createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023 4:20 PM'),
    createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023 4:20 PM'),
    createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
    createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023 4:20 PM'),
  ];

  useEffect(()=> {
    if(loggedIn){
      setColumns(current => [...current, { id: 'modify', label: 'Modify', minWidth: 40 }])
    }
    if(!loggedIn && columns.length === 5){
      setColumns([
        ...columns.slice(0, 4)
      ]);
    }
  }, [loggedIn])



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper > 
      {/* sx={{ width: '100%' }} */}
      <TableContainer sx={{ minHeight: 440 }} style={{overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={loggedIn ? 5 : 4} >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Typography style={{fontSize: 'h6.fontSize', fontWeight: 'bold'}}>Upcoming Events</Typography>
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
                {column.label}
              </TableCell>
                    
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, ind) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`${row.code}-${ind}`}>
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
  );
}

export default EventsScreen
