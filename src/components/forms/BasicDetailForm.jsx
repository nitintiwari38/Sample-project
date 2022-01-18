import React from 'react'
import { useState, useEffect } from "react";
import TextFieldInput from '../fields/TextFieldInput'
import SelectInput from '../fields/SelectInput'
import DateTimeInput from '../fields/DateTimeInput';
import ButtonInput from '../fields/ButtonInput';
import { useSelector , useDispatch} from 'react-redux';
import { fetchBasicDetails } from '../../api/fetchBasicDetails';


const BasicDetailForm = ({hideSbmit,classname}) => {
    let initialValues = {candidate_name: "", candidate_email: "", client_name:'',technology: "", role: "", date_time: '', duration:0 ,pannel:"" }
    
    // console.log("initialValues",initialValues)
    const dispatch = useDispatch();
    //const intialValues = useSelector(state => state.detailR.basicdetials)

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    const btn = (hideSbmit ==='true') ? <></> : <ButtonInput variant='contained' text='Send Email' type='submit' />
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          
        }
        dispatch(fetchBasicDetails());
    },[formValues]);
      
    
    return (
        <div className="Basiccontainer">
            <form onSubmit={handleSubmit} className={classname}>
                <div className="cname_div input_parent">
                    <div className='lable'>Candidate Name</div>
                    <TextFieldInput div='Candidate Name' variant='outlined' type='text' size='small' value={formValues.candidate_name} handleChange={handleChange} name='candidate_name'/>
                    <p className='error'>{formErrors.candidate_name}</p>
                </div>
                <div className="cmail_div input_parent">
                    <div className='lable'>Candidate Email ID</div>
                    <TextFieldInput div='Candidate Email ID' variant='outlined' type='email' size='small' value={formValues.candidate_email} handleChange={handleChange} name='candidate_email'/>
                    <p className='error'>{formErrors.candidate_email}</p>
                </div>
                <div className="clname_div input_parent">
                    <div className='lable'>Cient Name</div>
                    <TextFieldInput div='Cient Name' variant='outlined' size='small' type='text' value={formValues.client_name} handleChange={handleChange} name='client_name'/>
                    <p className='error'>{formErrors.client_name}</p>
                </div>
                <div className='d_flex filter_width'>
                    <div className='technology_div input_parent'>
                        <div className='lable'>Technology</div>
                        <SelectInput div='Technology' setFormValues={setFormValues} formValues={formValues} name='technology'/>
                        <p className='error'>{formErrors.technology}</p>
                    </div>
                    <div className='role_div input_parent' >
                        <div className='lable'>Role / Designation</div>
                        <SelectInput div='Role / Designation' setFormValues={setFormValues} formValues={formValues} name='role' />
                        <p className='error'>{formErrors.role}</p>
                    </div>
                </div>
                <div className="d_flex">
                    <div className='datetime_div input_parent'>
                        <div className="lable">Date and Time</div>
                        <DateTimeInput />
                        
                    </div>
                    <div className='duration_div input_parent'>
                        <div className="lable">Duration</div>
                        <TextFieldInput type='number' variant='outlined' size='small'  value={formValues.duration} handleChange={handleChange} name='duration'/>
                        <p className="error">{formErrors.duration}</p>
                    </div>
                    
                </div>
                <div className="pannel_div input_parent">
                    <div className='lable'>Interview Pannel</div>
                    <TextFieldInput div='Interview Pannel' type='text' variant='outlined' size='small' value={formValues.pannel} handleChange={handleChange} name='pannel'/>
                </div>
                <div className="btn_div input_parent">
                    {btn}
                </div>
            </form>
        </div>
    )
}

export default BasicDetailForm
