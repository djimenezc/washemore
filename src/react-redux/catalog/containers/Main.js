import React from 'react';

class Main extends React.Component {

  render() {

    return (
      <div className="main-content">
        {this.props.children}
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;
