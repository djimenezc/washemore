import React from 'react';
import SearchBar from './SearchBar';
import Menu from './Menu';

require('../styles/Style.scss');

class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <header className="header">
        <div className="header-title">{title}</div>
        <SearchBar placeholder="SEARCH"/>
        <Menu className="float-right"/>
      </header>
    );
  }
}

Header.defaultProps = {};

export default Header;
