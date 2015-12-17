import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table';
import Counter from './components/counter.jsx';
import style from './assets/style.css';

ReactDOM.render(
  React.createElement(Counter),
  document.getElementById('content')
);
