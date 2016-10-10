require('normalize.css/normalize.css');

import React from 'react';

class AppComponent extends React.Component {

  static sayHello(name = '') {
    return `Hello ${name} from comparison redux`;
  }

  render() {

    return (
      <div className="index">

        <h1 className="notice">{AppComponent.sayHello(this.props.name)}</h1>
        <div>
          {/*<ul>route params: {this.props.location.query.nNodes}*/}
          {/*<li>nNodes: {this.props.location.query.nNodes}</li>*/}
          {/*</ul>*/}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
