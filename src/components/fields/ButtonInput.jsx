import React from 'react'
import Button from '@mui/material/Button';

const ButtonInput = ({variant ,text ,type}) => {
    return (
        <Button variant={variant} type={type}>
            {text}
        </Button>
    )
}

export default ButtonInput
