import React from 'react';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  changeNumberLevels(event) {
    var nLevels = event.target.value;
    var nNodes = this.state.nNodes;

    this.props.changeGrid(nLevels, nNodes);
  }

  changeNumberNodes(event) {
    var nLevels = this.props.nLevels;
    var nNodes = event.target.value;

    this.props.changeGrid(nLevels, nNodes);
  }

  changeName(event) {
    this.props.changeName(event.target.value)
  }

  render() {

    console.log('rendering');

    var createChildren = (node) => {
      if (node) {
        const children = node.nodes ?
          <ul>
            {node.nodes.map(createChildren)}
          </ul> : [];

        return <li key={node.id}>
          {node.name} - {this.props.name}
          {children}
        </li>
      }
    };

    const nodeLines = this.props.nodes ?
      <ul>
        {this.props.nodes.map(createChildren)}
      </ul>
      : [];

    console.log('created children li');

    return (
      <div>
        <h2>Hello world {this.props.name} - {this.props.nNodes}
          - {this.props.nLevels}</h2>
        <div>
          <p>Name: <input name="filter" type="text" value={this.props.name}
                          onChange={ this.changeName.bind(this)}/>
          </p>
          <p>nNodes: <input name="filter" type="text" value={this.props.nNodes}
                            onChange={this.changeNumberNodes.bind(this)}/>
          </p>
          <p> nLevels: <input name="filter" type="text"
                              value={this.props.nLevels}
                              onChange={this.changeNumberLevels.bind(this)}/>
          </p>

          {nodeLines}
        </div>
      </div>
    );
  }
}

MyComponent.defaultProps = {};

export default MyComponent;
