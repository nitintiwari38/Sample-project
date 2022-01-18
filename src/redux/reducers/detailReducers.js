import { ActionTypes } from "../constants/action-type";
import {intialState} from "../initialState";

export const detailReducer = (state = intialState ,{type,payload}) => {

    switch(type) {
        case ActionTypes.SUBMIT_BASIC_DETAILS : 
            return { ...state , detials:payload};
        case ActionTypes.SET_BASIC_DETAILS :
            return { ...state , basicdetials:payload};
        case ActionTypes.FETCH_BASIC_DETAILS : 
            return { ...state , loading : true}
        case ActionTypes.FETCH_BASIC_SUCESS :
            return {...state , loading : false , basicdetials:payload , error : ''}
        case ActionTypes.FETCH_BASIC_ERROR :
            return { ...state , loading : false , basicdetials: [] , error :payload }
        default :
            return state 
    }
}