import React from 'react';
//noinspection JSUnresolvedVariable
import {connect} from 'react-redux';

import CatalogHeader from './Header'
import CatalogMain from './Main'
import CatalogFooter from './Footer'
import {labels}from '../constants'

//noinspection ES6UnusedImports
import {user} from '../actions'

@connect((store) => {
  return {
    user: store.user.user
  }
})
export default class Catalog extends React.Component {

  componentWillMount() {
    this.props.dispatch(user.fetchUser1());
  }

  render() {

    const {user} = this.props;

    console.log('hello ', user);

    return (
      <div className="catalog">
        <CatalogHeader title={labels.TITLE} placeHolder={labels.PLACEHOLDER}/>
        <CatalogMain>
          <div>
            <h1>{user.name}</h1>
          </div>
        </CatalogMain>

        <CatalogFooter/>
      </div>
    );
  }
}
