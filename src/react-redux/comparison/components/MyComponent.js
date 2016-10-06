import React from 'react';

class MyComponent extends React.Component {

  render() {

    const name = 'hello';

    return (
      <div>
        Hello world {name}
      </div>
    );
  }
}

MyComponent.defaultProps = {};

export default MyComponent;
