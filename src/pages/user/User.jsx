import React, { useState ,useEffect } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
  } from "@material-ui/core";

import BasicDetailForm from '../../components/forms/BasicDetailForm';
import QuestionForm from '../../components/forms/QuestionForm';
import './User.css';
import CommentForm from '../../components/forms/CommentForm';
import {setBasicDetails} from '../../redux/actions/detailsAction';

const getSteps = () => {
    return [
        "Basic Details",
        "Questions Asked",
        "Experince / Comments"
    ];
}


const User = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const dispatch = useDispatch();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const getStepContent = step => {
        switch (step) {
            case 0: 
                return  <BasicDetailForm hideSbmit='true' classname='user_basicForm' />;
            case 1 :
                return <QuestionForm />;
            case 2 :
                return <CommentForm />;
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    useEffect(() => {
        localStorage.setItem('isAuthenticated',false);
        const basicNav = document.getElementById('basicdetails');
        basicNav.classList.add('hide');
    }, [])

    return (
        <div className='user_container'>
           <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                return (
                    <Step {...stepProps} key={index}>
                    <StepLabel {...labelProps}>{step}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center" className='thankyou'>
                Thank You
                </Typography>
            ) : (
                <>
                <div className='content_div'>{getStepContent(activeStep)}</div>
                <div className="bottombtngroup">
                    <Button
                        className='back_btn'
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                    Previous
                    </Button>
                    <Button
                        className='front_btn'
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? "Submit Feedback" : "Next"}
                    </Button>
                </div>
                </>
            )}
        </div>
    )
}

export default User
