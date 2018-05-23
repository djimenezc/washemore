import React from 'react';

import NodeStore from '../stores/NodeStore'
import * as NodeActions from '../actions/NodeActions'

class MyComponent extends React.Component {

  constructor(props) {
    super(props);

    this.getNodes = this.getNodes.bind(this);
    this.attributesChanged = this.attributesChanged.bind(this);
    const {nNodes, nLevels, name} = props;

    NodeStore.setName(name);
    this.NodeStore = NodeStore;

    this.state = {
      nodes: NodeStore.buildNodes(nNodes, nLevels),
      name: NodeStore.name,
      nNodes: NodeStore.nNodes,
      nLevels: NodeStore.nLevels
    }
  }

  changeNumberLevels(event) {
    NodeActions.setLevelsNumber(event.target.value);

  }

  changeNumberNodes(event) {
    NodeActions.setNodesNumber(event.target.value);
  }

  changeName(event) {
    NodeActions.changeName(event.target.value);
  }

  getNodes() {
    this.setState({
      nNodes: this.NodeStore.nNodes,
      nLevels: this.NodeStore.nLevels,
      nodes: NodeStore.buildNodes(this.NodeStore.nNodes, this.NodeStore.nLevels)
    });
  }

  attributesChanged() {
    this.setState({
      name: this.NodeStore.name
    })
  }

  componentWillMount() {
    NodeStore.on('change', this.getNodes);
    NodeStore.on('attributeChanged', this.attributesChanged);
  }

  componentWillUnmount() {
    NodeStore.removeListener('change', this.getNodes);
    NodeStore.removeListener('attributeChanged', this.attributesChanged);
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

    const nodeLines = this.state.nodes ?
      <ul>
        {this.state.nodes.map(createChildren)}
      </ul>
      : [];

    console.log('created children li');

    return (
      <div>
        <h2>Hello world {this.state.name} - {this.state.nNodes}
          - {this.state.nLevels}</h2>
        <div>
          <p>Name: <input name="filter" type="text" value={this.state.name}
                          onChange={ this.changeName.bind(this)}/>
          </p>
          <p>nNodes: <input name="filter" type="text" value={this.state.nNodes}
                            onChange={this.changeNumberNodes.bind(this)}/>
          </p>

          <p>nLevels: <input name="filter" type="text"
                             value={this.state.nLevels}
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
