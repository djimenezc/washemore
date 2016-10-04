import React from 'react';
import SearchBar from './SearchBar';

require('../styles/Style.scss');

class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <header className="catalog-header">
        <div className="header-title">{title}</div>
        <SearchBar/>
      </header>
    );
  }
}


Header.defaultProps = {};

export default Header;
