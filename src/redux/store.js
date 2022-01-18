import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers/index";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import { fetchBasicDetails } from "../api/fetchBasicDetails";


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

//  store.dispatch(fetchBasicDetails())
//   store.subscribe(() => { console.log('--->',store.getState()) })


export default store;