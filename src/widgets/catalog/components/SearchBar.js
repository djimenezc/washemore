import React from 'react';

class SearchBar extends React.Component {

  render() {

    const {placeholder} = this.props;

    console.log(`placeholder ${placeholder}`);

    return (
      <form className="search-input-wrapper">
        <input type="text" name="search" placeholder={placeholder}/>
      </form>
    );
  }
}

SearchBar.defaultProps = {};

export default SearchBar;
