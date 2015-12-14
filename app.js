import React from 'react';
import Table from './components/table';
import style from './style.css';

React.render(
  React.createElement(Table, {name: 'Office Supplies'}),
  document.getElementById('content')
);
