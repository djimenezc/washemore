import React from 'react';
import classNames from 'classnames';

class Menu extends React.Component {

  render() {

    const {className} = this.props;
    const classNamesList = classNames(className, 'menu-wrapper');

    //noinspection CheckTagEmptyBody
    return (
      <div className={classNamesList}>
        <div>Menu</div>
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
             className="hamburger-wrapper">
          <g>
            <path d="m3 20h20v-2h-20v2m0-7h20v-2h-20v2m0-9v2h20v-2h-20"></path>
          </g>
        </svg>
      </div>
    );
  }
}


Menu.defaultProps = {};

export default Menu;
