import React from 'react';

import CatalogHeader from './Header'
import CatalogMain from './Main'
import CatalogFooter from './Footer'

class CatalogComponent extends React.Component {

  render() {

    return (
      <div id="root">
        <CatalogHeader/>
        <CatalogMain>

        </CatalogMain>
        <CatalogFooter/>
      </div>
    );
  }
}


CatalogComponent.defaultProps = {};

export default CatalogComponent;
