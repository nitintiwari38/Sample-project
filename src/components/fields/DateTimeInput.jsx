import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';

const DateTimeInput = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} size='small'>
            <DateTimePicker            
            onChange={handleChange}
            value={value}
            renderInput={(params) => <TextField {...params} />}
            size='small'
            className="dattimepicker"
            />
        </LocalizationProvider>
    )
}

export default DateTimeInput
