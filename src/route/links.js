import React from 'react'
import {Link} from 'react-router'

const nNodes = 30;
const nLevels = 2;

const queryParams = {
  nNodes: nNodes,
  nLevels: nLevels
};

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>
            <Link to={{
              pathname: '/react',
              query: queryParams
            }}>
              React demo
            </Link>
          </li>
          <li>
            <Link to={{
              pathname: '/redux',
              query: queryParams
            }}>
              Redux
            </Link>
          </li>
        </ul>
      </div>
    )
  }
})
