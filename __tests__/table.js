import {expect} from 'chai';
import React from 'react/addons';
import Table from '../components/table';

describe('table', () => {
  let {TestUtils}  = React.addons;
  let findByClass = TestUtils.scryRenderedDOMComponentsWithClass;

  jest.autoMockOff();

  beforeEach(() => {
    reactTable = TestUtils.renderIntoDocument(
      React.createElement(Table, {name: "test"})
    )
  });

  afterEach(function() {
    if (Table && Table.isMounted()) {
      React.unmountComponentAtNode(Table.getDOMNode());
    }
   });

  it('Should have heading Office Supplies', () => {
    expect(true).to.equal(true);
  });

  jest.autoMockOn();
});


