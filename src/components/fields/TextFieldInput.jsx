
import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextFieldInput = ({
    label,
    variant,
    value,
    handleChange,
    name,
    type,
    multiline
  }) => {
    return (
        <TextField 
            required
            fullWidth
            name={name}
            type={type}
            placeholder={label}
            variant={variant}
            {... name =='answer' ? multiline: ''}
            size = 'small' value={value} onChange={handleChange}     />
    )
}
export default TextFieldInput
