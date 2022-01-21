import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store  from "./redux/store"

import {  ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
     primary: {
        main: "#0FB9B9" // This is an orange looking color
               },
     secondary: {
        main: "#0FB9B9" //Another orange-ish color
                }
           }, // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>  
        </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
