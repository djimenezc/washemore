import React from 'react'
import {Link} from 'react-router'

const nNodes = 30;
const nLevels = 2;
import Breadcrumbs from 'react-breadcrumbs';


const queryParams = {
  nNodes: nNodes,
  nLevels: nLevels
};

export default React.createClass({
  render() {
    return (
      <div>

        <Breadcrumbs
          separator=" | "
          routes={this.props.routes}
          params={this.props.params}
          setDocumentTitle={false}
          breadcrumbName="My breadcrumb name"
        />

        <h1>Route links</h1>
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

        {this.props.children}

      </div>
    )
  }
})
