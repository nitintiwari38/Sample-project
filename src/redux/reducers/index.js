import { combineReducers } from "redux";
import { questionReducer } from "./questionReducers";
import { detailReducer } from "./detailReducers";

const reducers = combineReducers({
  questionR: questionReducer,
  detailR: detailReducer,
});

export default reducers;