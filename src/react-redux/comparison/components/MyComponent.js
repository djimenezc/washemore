import React from 'react';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = props;
  }

  componentWillMount() {
  }

  render() {

    console.log('rendering');

    const name = 'hello';
    var createChildren = function (node) {
      if (node) {
        const children = node.nodes ?
          <ul>
            {node.nodes.map(createChildren)}
          </ul> : [];

        return <li key={node.id}>
          {node.name}
          {children}
        </li>
      }
      // return null;
    };

    const nodeLines = this.state.nodes ?
      <ul>
        {this.state.nodes.map(createChildren)}
      </ul>
      : [];

    console.log('created children li');
    debugger;

    return (
      <div>
        Hello world {name}
        <div>
          <input name="filter" type="input"/>
          {nodeLines}
        </div>
      </div>
    );
  }
}

MyComponent.defaultProps = {};

export default MyComponent;
