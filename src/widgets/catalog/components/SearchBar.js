import React from 'react';
import _ from 'lodash';

class SearchBar extends React.Component {

  render() {

    const placeholder = _.get(this, 'props.placeHolder');

    return (
      <form className="search-input-wrapper">
        <input type="text" name="search" placeholder={placeholder}/>
      </form>
    );
  }
}

SearchBar.defaultProps = {};

export default SearchBar;
