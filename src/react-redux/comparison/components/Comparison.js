require('normalize.css/normalize.css');

import React from 'react';


class AppComponent extends React.Component {

  static sayHello(name = '') {
    return `Hello ${name}`;
  }

  render() {

    return (
      <div className="index">
        <h1 className="notice">{AppComponent.sayHello(this.props.name)}</h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
