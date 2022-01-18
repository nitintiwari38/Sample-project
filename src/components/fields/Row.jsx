
import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { dividerClasses } from '@mui/material';

const customIcons = {
    'Very Dissatisfied': {
      icon: <SentimentVeryDissatisfiedIcon fontSize='large'/>
    },
    'Dissatisfied': {
      icon: <SentimentDissatisfiedIcon fontSize='large'/>
    },
    'Neutral': {
      icon: <SentimentSatisfiedIcon fontSize='large'/>
    },
    'Satisfied': {
      icon: <SentimentSatisfiedAltIcon fontSize='large'/>
    },
    'Very Satisfied': {
      icon: <SentimentVerySatisfiedIcon fontSize='large'/>
    },
};

const Row = props => {
    const { row ,index , deleteQuestion} = props;
    const rating = row.rating;
    const Ratingspan = customIcons[rating]
    const [open, setOpen] = useState(false);
     
    const handleCick = () => {
        deleteQuestion(index)
    }
    
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"  
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="left">{row.question}</TableCell>
          <TableCell>{Ratingspan.icon}</TableCell>
          <TableCell  align="left"><DeleteIcon onClick={handleCick}/></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                  <div>
                      
                      <div className='answer'>
                          Answer : {row.answer}
                      </div>
                  </div>              
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
export default Row;
  