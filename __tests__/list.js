jest.dontMock('../components/list.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import List from '../components/list.jsx';

var component, refs;

describe('item list', () => {

  beforeEach( () => {
    var data = {
      title: 'test',
      items: [
        { id: 1, name: 'tacos', type: 'mexican' },
        { id: 2, name: 'burrito', type: 'mexican' },
        { id: 3, name: 'tostada', type: 'mexican' },
        { id: 4, name: 'hush puppies', type: 'southern' }
      ]
    };

    let element =  React.createElement(List, {data: data});
    component = TestUtils.renderIntoDocument(element);
    refs = component.refs;
  })

  it('Should have title property', () => {
    expect(refs.title.tagName).toBe('H1');
    expect(refs.title.className).toBe('')
    expect(refs.title.textContent).toBe('test')
  });

  it('filters list to mexican food only', () => {
    expect(refs.items.textContent).toContain('tacos');
    expect(refs.items.textContent).toNotContain('hush puppies');
  });

  it('creates selection on click', () => {
    TestUtils.Simulate.click(refs.burrito);

    expect(component.state.order).toBe('burrito');
    expect(refs.order.textContent).toBe('burrito');
  });

  describe('can be sorted', () => {
    it('defaults to alphabetical sort', () => {
      let items = refs.items.childNodes;
      expect(items[0].textContent).toBe('burrito');
      expect(items[2].textContent).toBe('tostada');
    });

    it('button reverses sort order', () => {
      TestUtils.Simulate.click(refs.reverse);

      let items = refs.items.childNodes;
      expect(items[0].textContent).toBe('tostada');
      expect(items[2].textContent).toBe('burrito');
    });
  })

});


