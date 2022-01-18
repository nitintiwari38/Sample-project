import React,{useState,useEffect} from 'react'
import TableInput from '../fields/TableInput'
import TextField from '@material-ui/core/TextField'
import RatingInput from '../fields/RatingInput';
import ButtonInput from '../fields/ButtonInput';
import Divider from '@mui/material/Divider';

const QuestionForm = () => {

    const [questionArray , setQuestionAraay] =  useState([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [rating, setRating] = useState('Dissatisfied');

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "question")
            setQuestion(value);
        else if(name === "answer")
            setAnswer(value);
        else
            setRating(value);
    }

    const deleteQuestion = (index) => {
        let tempList = [...questionArray]
        tempList.splice(index, 1)
        setQuestionAraay(tempList)
    }

    const handleSave = e => {
        e.preventDefault()
        let tempList = [...questionArray]
        let taskObj = {}
        taskObj["question"] = question
        taskObj["answer"] = answer
        taskObj["rating"] = rating
        tempList.push(taskObj)
        setQuestionAraay(tempList)
    }

    const bottomElement = questionArray.length <=   0 ? <div class='no_elemnt'>Please Add Few Questions</div> : 
    <TableInput questionArray={questionArray} deleteQuestion={deleteQuestion} />
   
      
    return (
        <>
            <div className='questionFormDiv'>
                <Divider variant="middle" />
                <form onSubmit={handleSave} className="questionForm">
                    <div className='question_div input_lable'>
                        <div className="lable">Type a Question</div>
                        <TextField required variant='outlined' type='text' size='small' value={question} onChange={handleChange} name='question' />
                    </div>
                    <div className='answer_div input_lable'>
                        <div className="lable">Answer</div>
                        <TextField required variant='outlined' rows='5' multiline type='text' size='small' value={answer} onChange={handleChange} name='answer' />
                    </div>
                    <div className='rating_div input_lable'>
                        <div className="lable">Rating</div>
                        <RatingInput setRating={setRating}/>
                    </div>
                    <div className='btn_div_question'>
                        <ButtonInput variant='outlined' text='Add Question' type='submit'  />
                    </div>
                </form>
            </div>
            <div className='questionTablesDiv'>
                {bottomElement}
            </div>
        </>
    )
}

export default QuestionForm
