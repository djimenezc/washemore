import React from 'react';
import classNames from 'classnames';

export default (props) => {

  const {className} = props;
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
};
