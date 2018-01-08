import React from 'react';
import {push, goBack, goForward} from 'react-router-redux'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    nNodes: store.routing.locationBeforeTransitions.query.nNodes,
    nLevels: store.settings.nLevels
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

    this.props.dispatch(push({
      pathname: '/redux/redirectExample',
      query: {
        nNodes: parseInt(this.props.nNodes || 0) + 1
      }
    }));
  }

  increaseLevelNumber() {
    console.log('increaseLevelNumber');

    this.props.dispatch(push({
      pathname: '/redux/redirectExample',
      query: {
        nLevel: parseInt(this.props.nLevels || 0) + 1
      }
    }));
  }

  goBack() {
    console.log('go back');

    this.props.dispatch(goBack());
  }

  goForward() {
    console.log('go forward');

    this.props.dispatch(goForward());
  }

  render() {
    return <div>
      hello redirect example nNodes from url query params: {this.props.nNodes}
      nLevels {this.props.nLevels}
      <div>
        <input type="button" onClick={this.handlerClick.bind(this)}
               value="Redirect to redux example"/>
        <input type="button" onClick={this.increaseNodesNumber.bind(this)}
               value="Increase nNodes query param"/>
        <input type="button" onClick={this.increaseLevelNumber.bind(this)}
               value="Increase nLevels query param using settings reducer"/>
        <input type="button" onClick={this.goBack.bind(this)}
               value="Go back"/>
        <input type="button" onClick={this.goForward.bind(this)}
               value="Go forward"/>
      </div>
    </div>
  }
}

RedirectExample.defaultProps = {};

export default RedirectExample;
