import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
jest.dontMock('../components/table');
import Table from '../components/table';


describe('table', () => {

  it('Should have name property', () => {
    let Name = React.createClass({
      render() {
        return React.DOM.h1({className: 'header', ref: 'tabe'}, this.props.name)
      }
    });
    let element =  React.createElement(Table, {name: 'test'})
    var component = TestUtils.renderIntoDocument(element);
    var node = ReactDOM.findDOMNode(component);
    expect(node.textContent).toBe('test');
  });

});


