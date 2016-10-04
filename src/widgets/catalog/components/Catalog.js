import React from 'react';

import CatalogHeader from './Header'
import CatalogMain from './Main'
import CatalogFooter from './Footer'
import {labels}from '../constants'

class Catalog extends React.Component {

  render() {

    return (
      <div className="catalog">
        <CatalogHeader title={labels.TITLE} placeHolder={labels.PLACEHOLDER}/>
        <CatalogMain>

        </CatalogMain>
        <CatalogFooter/>
      </div>
    );
  }
}

Catalog.defaultProps = {};

export default Catalog;
