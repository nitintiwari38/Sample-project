import { ActionTypes } from "../constants/action-type";

export const setBasicDetails = data => {
    return {
      type: ActionTypes.SET_BASIC_DETAILS,
      payload: data,
    };
};

export const submitBasicDetails = data => {
    return {
      type: ActionTypes.SUBMIT_BASIC_DETAILS,
      payload: data,
    };
};

export const fetchBasicRequest = () => {
  return {
    type : ActionTypes.FETCH_BASIC_DETAILS
  }
}

export const fetchBasicSucess = data => {
  return {
    type : ActionTypes.FETCH_BASIC_SUCESS,
    payload : data
  }
}

export const fetcBasicFailuire = error => {
  return {
    type : ActionTypes.FETCH_BASIC_ERROR,
    payload : error
  }
}