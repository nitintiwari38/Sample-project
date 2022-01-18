import React from 'react'
import { useState, useEffect } from "react";
import TextFieldInput from '../fields/TextFieldInput'
import SelectInput from '../fields/SelectInput'
import ButtonInput from '../fields/ButtonInput';


const FIlterFrom = () => {
    console.log('re-rending')
    const initialValues = { candidate_name: "",  client_name: "",technology: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(name,value,formValues)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        setIsSubmit(true);
    };
    
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
    }, [formErrors]);
      
    
    return (
        <div className="filter_container">
            <form onSubmit={handleSubmit}>
                <div className="d_flex">
                    <div className="cname_div input_parent">
                        <div className='lable'>Name of Candidate</div>
                        <TextFieldInput div='Candidate Name' variant='outlined' type='text' size='small' value={formValues.candidate_name} handleChange={handleChange} name='candidate_name'/>
                        <p className='error'>{formErrors.candidate_name}</p>
                    </div>
                    <div className="clname_div input_parent">
                        <div className='lable'>Cient Name</div>
                        <TextFieldInput div='Cient Name' variant='outlined' size='small' type='text' value={formValues.client_name} handleChange={handleChange} name='client_name'/>
                        <p className='error'>{formErrors.client_name}</p>
                    </div>
                </div>
                <div className='d_flex'>
                    <div className='technology_div input_parent'>
                        <div className='lable'>Technology</div>
                        <SelectInput div='Technology' setFormValues={setFormValues} formValues={formValues} name='technology'/>
                        <p className='error'>{formErrors.technology}</p>
                    </div>
                    <div className="btn_div ">
                        <ButtonInput variant='contained' text='Clear Filter' type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FIlterFrom
