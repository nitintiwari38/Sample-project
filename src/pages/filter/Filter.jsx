import React,{useEffect} from 'react'
import FIlterFrom from '../../components/forms/FIlterFrom'
import './Filter.css';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

const Filter = () => {

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if(isAuthenticated  && isAuthenticated === 'false') {
            const basicNav = document.getElementById('basicdetails');
            basicNav.classList.add('hide');
        }
    })

    return (
        <Card className='FIlterCOmpoent'>
            <div>
                <div className="topheading_filter">Filter</div>
                <Divider className='basic_divider'/>
                <div className='filter_card'>  <FIlterFrom /></div>
            </div>
            <div>

            </div>
        </Card>
    )
}

export default Filter
