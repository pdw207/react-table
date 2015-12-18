import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list.jsx';
import style from './assets/style.css';

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};
ReactDOM.render(
  React.createElement(List, {
    name: DATA.title,
    items: DATA.items
  }),
  document.getElementById('content')
);
