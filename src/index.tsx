import React from 'react';
import ReactDOM from 'react-dom';
import { Content } from './Content';

import { Heading } from './Heading'
const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)