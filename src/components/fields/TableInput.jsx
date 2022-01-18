import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './Row';


const TableInput = ({questionArray,deleteQuestion}) => {
    
    
    
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>Sr No</TableCell>
            <TableCell align="left">Question</TableCell>
            <TableCell align="left">Ratings</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questionArray.map((row,index) => (
            <Row key={index} index ={index} row={row} deleteQuestion={deleteQuestion} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableInput;