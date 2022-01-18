import { ActionTypes } from "../constants/action-types";

export const fetchQuestions = id => {
    return {
      type: ActionTypes.FETCH_QUESTIONS,
      payload: id,
    };
};
  
export const editQuestion = qustion => {
    return {
        type: ActionTypes.EDIT_QUESTION ,
        payload: product,
    };
};

export const addQuestion = question => {
    return {
      type: ActionTypes.ADD_QUESTION,
      payload: question 
    };
};

export const submitQuestions = (questionWithReview) => {
    return {
      type: ActionTypes.SUBMIT_QUESTIONS,
      payload: questionWithReview 
    };
};

export const removeQuestion = question => {
    return {
        type: ActionTypes.REMOVE_QUESTION,
        payload: question
    }
}