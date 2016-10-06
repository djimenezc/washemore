import React from 'react';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = props;
  }

  changeName(event) {

    this.setState({name: event.target.value});
  }

  changeNumberLevels(event) {
    var nLevels = event.target.value;
    var nNodes = this.state.nNodes;

    this.state.changeGrid(nLevels, nNodes);
  }

  changeNumberNodes(event) {
    var nLevels = this.state.nLevels;
    var nNodes = event.target.value;

    this.state.changeGrid(nLevels, nNodes);
  }

  render() {

    debugger;
    console.log('rendering');

    var createChildren = (node) => {
      if (node) {
        const children = node.nodes ?
          <ul>
            {node.nodes.map(createChildren)}
          </ul> : [];

        return <li key={node.id}>
          {node.name} - {this.state.name}
          {children}
        </li>
      }
    };

    const nodeLines = this.state.nodes ?
      <ul>
        {this.state.nodes.map(createChildren)}
      </ul>
      : [];

    console.log('created children li');

    return (
      <div>
        Hello world {this.state.name} - {this.state.nNodes}
        - {this.state.nLevels}
        <div>
          Name: <input name="filter" type="text" value={this.state.name}
                       onChange={this.changeName.bind(this)}/>
          <br/>
          nNodes: <input name="filter" type="text" value={this.state.nNodes}
                         onChange={this.changeNumberNodes.bind(this)}/>
          <br/>
          nLevels: <input name="filter" type="text" value={this.state.nLevels}
                          onChange={this.changeNumberLevels.bind(this)}/>
          <br/>
          {nodeLines}
        </div>
      </div>
    );
  }
}

MyComponent.defaultProps = {};

export default MyComponent;
