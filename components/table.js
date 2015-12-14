import React from 'react';

export default React.createClass({
  render() {
    return React.DOM.h1({className: 'header'}, this.props.name);
  }
});

