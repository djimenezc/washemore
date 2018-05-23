var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/Animation.scss');

import React from 'react'

export default class Animation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    var newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const style = {
      padding: '20px'
    };
    const styleItem = {
      padding: '10px'
    };

    const items = this.state.items.map((item, i) => (
      <div key={item} style={styleItem} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div style={style}>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
