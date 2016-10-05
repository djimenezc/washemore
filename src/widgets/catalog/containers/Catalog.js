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
    //   this.props.dispatch({
    // type: actionTypes.FETCH_USERS,
    //     payload: fetch('http://rest.learncode.academy/api/wstern/users')
    //   });

    this.props.dispatch(user.fetchUser())
  }

  render() {

    console.log('hello ', this.props.user);
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
