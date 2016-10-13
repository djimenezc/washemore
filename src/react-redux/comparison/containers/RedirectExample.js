import React from 'react';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    store.dispatch(push('/foo'));
  }

}

AppComponent.defaultProps = {};

export default AppComponent;
