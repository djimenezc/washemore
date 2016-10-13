import React from 'react';
import {push, goBack} from 'react-router-redux'
import {increaseNodeNumber} from '../actions'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    nNodes: store.routing.locationBeforeTransitions.query.nNodes
  };
})
class RedirectExample extends React.Component {

  constructor(props) {
    super(props);
  }

  handlerClick() {
    console.log('Redirecting to redux example');
    this.props.dispatch(push('/redux'));
  }

  increaseNodesNumber() {
    console.log('increaseNodesNumber');

    this.props.dispatch(increaseNodeNumber);
  }

  goBack() {
    console.log('goBack');

    this.props.dispatch(goBack());
  }

  render() {
    return <div>
      hello redirect example nNodes from url query params: {this.props.nNodes}
      <div>
        <input type="button" onClick={this.handlerClick.bind(this)}
               value="Redirect to redux example"/>
        <input type="button" onClick={this.increaseNodesNumber.bind(this)}
               value="Increase nNodes query param"/>
        <input type="button" onClick={this.goBack.bind(this)}
               value="Go back"/>
      </div>
    </div>
  }
}

RedirectExample.defaultProps = {};

export default RedirectExample;
