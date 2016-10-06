import React from 'react';
import ComparisonReact from './MyComponent'

class MyComponentContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillMount() {
    this.changeGrid();
  }

  changeGrid() {

    this.setState({
      nodes: this.state.createNodeTree(this.state.nLevels, this.state.nNodes)
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
