import React from 'react'
import { Typography , AppBar, Toolbar , ToggleButton , ToggleButtonGroup } from '@mui/material'
import {NavLink} from 'react-router-dom'

import logo from '../../images/logo.png'
import './Header.css'

export default function Header() {

    const [alignment, setAlignment] = React.useState('feedback');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <AppBar className='bg_header'>
                <Toolbar className='dp_block'>
                    <img src={logo} className='logo'/>
                    <Typography className='header_text'>Interview Feedback Form</Typography>
                    <div className='navbar'>
                    <nav className='nav flex'>
                        <NavLink to={"/basicdetails"} className='anchor' id="basicdetails" activeClassName="active"> Send Feedback Email</NavLink>
                        <NavLink to={"/filter"} className='anchor' activeClassName="active"> Filter</NavLink>
                        </nav>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}


