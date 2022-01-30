import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globlaStyles';
import Router from './routes'


ReactDOM.render(
  <React.StrictMode>
     <Router/>
     <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

