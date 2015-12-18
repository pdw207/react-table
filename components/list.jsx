import React from 'react';
import sortBy from 'sort-by';

class List extends React.Component {
  static get propTypes() {
    return {
      name: React.PropTypes.string,
      items: React.PropTypes.array
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      order: null
    }
  }

  handleClick(name) {
    this.setState({order: name})
  }

  render() {
    let {items=[], name} = this.props;
    var list = items.filter((item)=>{
      return  item.type === 'mexican'
    })
    .sort(sortBy('name'))
    .map((item)=>{
      return  <div key={item.id} onClick={this.handleClick.bind(this, item.name)}>{item.name}</div>
    });

    return (
      <div>
        <h1>{name}</h1>
        <h2>{this.state.order}</h2>
        {list}
      </div>
    );
  }
};

export default List;
