import React from 'react';
import sortBy from 'sort-by';

class List extends React.Component {
  static get propTypes() {
    return {
      data : React.PropTypes.object
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      order: null,
      descending: true
    }
  }

  handleReverseSort() {
    this.setState({descending: !this.state.descending})
  }

  handleSelect(name) {
    this.setState({order: name})
  }

  render() {
    let {data={}} = this.props
    let descending = this.state.descending
    let listItems = data.items.filter((item)=>{
      return item.type === 'mexican'
    })
    .sort(sortBy(descending ? 'name' : '-name'))
    .map((item)=>{
      return (
        <li
          key={item.id}
          ref={item.name}
          onClick={this.handleSelect.bind(this, item.name)}
        >
          {item.name}
        </li>
      )
    })
    return (
      <div>
        <h1 ref="title">{data.title}</h1>
        <button ref="reverse" onClick={this.handleReverseSort.bind(this)}>
          {descending ? 'Sort Reverse Alpha' : 'Sort Alpha'}
        </button>
        <ul ref="items">
          {listItems}
        </ul>
        <h2 ref="order">{this.state.order}</h2>
      </div>
    );
  }
};

export default List;
