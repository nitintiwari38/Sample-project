import { ActionTypes } from "../constants/action-type";
import {intialState} from "../initialState";

export const questionReducer = (state = intialState ,{type,payload}) => {

    switch(type) {
        case ActionTypes.ADD_QUESTION :
            return { ...state , question:payload};
        default :
            return state 
    }
}