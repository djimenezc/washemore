import React from 'react';

class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <header className="catalog-main">
        {title}
      </header>
    );
  }
}


Header.defaultProps = {};

export default Header;
