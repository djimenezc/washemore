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

  changeGrid(nLevels, nNodes) {

    debugger;
    console.log(`changeGrid ${nLevels} ${nNodes}`);
    this.setState({
      nodes: this.state.createNodeTree(nLevels, nNodes),
      nNodes: parseInt(nNodes),
      nLevels: parseInt(nLevels)
    });
  }

  render() {
    debugger;
    return (
      <div>
        <ComparisonReact name={this.state.name}
                         nodes={this.state.nodes}
                         nNodes={this.state.nNodes}
                         nLevels={this.state.nLevels}
                         changeGrid={this.changeGrid.bind(this)}
        />
      </div>
    );
  }
}

MyComponentContainer.defaultProps = {};

export default MyComponentContainer;
