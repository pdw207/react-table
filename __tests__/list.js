import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
jest.dontMock('../components/list.jsx');
import List from '../components/list.jsx';


describe('list', () => {

  it('Should have name property', () => {
    let element =  React.createElement(List, {name: 'test'})
    var component = TestUtils.renderIntoDocument(element);
    var node = ReactDOM.findDOMNode(component);
    expect(node.textContent).toBe('test');
  });

});


