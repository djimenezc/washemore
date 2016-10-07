import React from 'react';
import ComparisonReact from './MyComponent'

class MyComponentContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillMount() {
    this.changeGrid(this.state.nLevels, this.state.nNodes);
  }

  changeName(name) {
    this.setState({
      name: name
    });
  }

  changeGrid(nLevels, nNodes) {

    console.log(`changeGrid ${nLevels} ${nNodes}`);

    const nodes = nNodes && nLevels
      ? this.state.createNodeTree(nLevels, nNodes)
      : this.state.nodes;

    this.setState({
      nodes: nodes,
      nNodes: nNodes ? parseInt(nNodes) : '',
      nLevels: nLevels ? parseInt(nLevels) : ''
    });
  }

  render() {

    return (
      <div>
        <ComparisonReact name={this.state.name}
                         nodes={this.state.nodes}
                         nNodes={this.state.nNodes}
                         nLevels={this.state.nLevels}
                         changeGrid={this.changeGrid.bind(this)}
                         changeName={this.changeName.bind(this)}
        />
      </div>
    );
  }
}

MyComponentContainer.defaultProps = {};

export default MyComponentContainer;
