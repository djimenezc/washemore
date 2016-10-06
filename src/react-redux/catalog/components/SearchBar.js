import React from 'react';

export default (props) => {

  const {placeholder} = props;

  console.log(`placeholder ${placeholder}`);

  return (
    <form className="search-input-wrapper">
      <input type="text" name="search" placeholder={placeholder}/>
    </form>
  );
};
