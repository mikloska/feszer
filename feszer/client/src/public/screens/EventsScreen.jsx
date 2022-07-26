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

const columns = [
  { id: 'name', label: 'Event', minWidth: 170 },
  { id: 'location', label: 'Location', minWidth: 100 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
  },
  {
    id: 'dateAndTime',
    label: 'Date & Time',
    minWidth: 170,
  },
  {
    id: 'modify',
    label: 'Modify',
    minWidth: 170,
  },
];

const createData = (name, location, address, dateAndTime, modify) => {
  return { name, location, address, dateAndTime, modify };
}

const rows = [
  createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('TH 1', 'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Concert',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('TH2',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
  createData('Seven Tribesman',  'HAAC New Brunswick, NJ', '123 Plum St. New Brunswick, NJ 111111', 'April 20, 2023'),
];

const EventsScreen = () => {
  const {loggedIn} = useContext(AppContext)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const finalColumns = []
  for(let i = 0; i < columns.length; i++){
    if(columns[i].id === 'modify' && !loggedIn){
      break
    } else {
      finalColumns.push(
        <TableCell
          key={columns[i].id}
          align={columns[i].align}
          style={{ top: 57, minWidth: columns[i].minWidth, fontWeight: 'bold' }}
        >
          {columns[i].label}
        </TableCell>
      )
    }
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ minHeight: 440 }} style={{overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={loggedIn ? 5 : 4} >
                <Typography style={{fontSize: 'h6.fontSize', fontWeight: 'bold'}}>Upcoming Events</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
            {finalColumns}
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
                            <IconButton style={{paddingBottom:0, height:7}}>
                              <DeleteIcon fontSize='small'/>
                            </IconButton>
                            <IconButton style={{paddingBottom:0, height:7}}>
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
