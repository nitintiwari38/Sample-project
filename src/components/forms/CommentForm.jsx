import React ,{useState,useEffect}from 'react'
import Divider from '@mui/material/Divider';
import TextField from '@material-ui/core/TextField'

const CommentForm = () => {
    const forEach = Array.prototype.forEach;
    const [inteviewRating, setInterviewRating] = useState(0);
    const [comment , setComment] = useState('');
    const ratingArray = [1,2,3,4,5,6,7,8,9,10];

    const handleComment = e => {
        const {value} = e.target;
            setComment(value);
    }

    const handleRating = e => {
        resetRatingSelector(document.getElementsByClassName('circle'))
        const value = e.target.getAttribute('value');
        e.target.classList.add('rating_number_active');
        setInterviewRating(value)
        console.log(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted ->",inteviewRating,comment)
    }

    const resetRatingSelector = elements => {
        forEach.call(elements, element => { 
            if(element.classList.contains("rating_number_active"))
                element.classList.remove("rating_number_active");
        })
    }

    return (
        <div className='questionFormDiv'>
            <Divider variant="middle" />
            <form className='comment_form'>
                <div className='interviewRating_div input_lable'>
                    <div className="lable">Interview Ratings</div>
                    <div className='d_flex'>
                    {ratingArray.map((value,index) => (
                        <div key={index} value={value}  className='circle' onClick={handleRating} name='interviewRating'>{value}</div>
                    ))}
                    </div>
                </div>
                <div className='comment_div input_lable'>
                    <div className="lable">Candidate Feedback(if any)</div>
                    <TextField variant='outlined' rows='5' multiline type='text' size='small' value={comment} onChange={handleComment} name='comment' />
                </div>
            </form>
        </div>
    )
}

export default CommentForm
