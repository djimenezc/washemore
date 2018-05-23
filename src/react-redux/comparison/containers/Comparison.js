require('normalize.css/normalize.css');

import React from 'react';
import Comparison from '../components/Comparison'
import {changeName, changeNodesNumber, changeLevelsNumber} from '../actions'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    nodes: store.nodes.nodes,
    name: store.settings.name,
    nNodes: store.settings.nNodes,
    nLevels: store.settings.nLevels
  };
})
class AppComponent extends React.Component {

  static sayHello(name = '') {
    return `Hello ${name} from comparison redux`;
  }

  changeName(name) {
    console.log('changing name to', name);
    this.props.dispatch(changeName(name))
  }

  changeNumberNodes(nNodes) {
    this.props.dispatch(changeNodesNumber(nNodes));
  }

  changeNumberLevels(nLevels) {
    this.props.dispatch(changeLevelsNumber(nLevels));
  }

  render() {

    return (
      <div className="index">

        <h1 className="notice">{AppComponent.sayHello(this.props.name)}</h1>
        <div>
          <Comparison props={this.props}
                      changeName={this.changeName.bind(this)}
                      changeNumberNodes={this.changeNumberNodes.bind(this)}
                      changeNumberLevels={this.changeNumberLevels.bind(this)}/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
