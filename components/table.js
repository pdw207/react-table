import React from 'react';

class Table extends React.Component {
  render() {
    return React.DOM.h1({className: 'header', ref: 'table'}, this.props.name);
  }
};

export default Table;
