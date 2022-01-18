import React,{useEffect} from 'react'
import BasicDetailForm from '../../components/forms/BasicDetailForm'
import './BasicDetails.css'
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { fetchBasicDetails } from '../../api/fetchBasicDetails';
import  {useDispatch}  from 'react-redux';

const BasicDetails = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('isAuthenticated',false);
    })

    return (
        <Card className="basicDetailComponent">
            <div className="topheading_basic">Basic Details</div>
            <Divider className='basic_divider ' />
            <div className=''><BasicDetailForm hideSbmit='false'/></div>
        </Card>
    )
}

export default BasicDetails
