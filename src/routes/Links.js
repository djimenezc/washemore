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
            <ul>
              <li>
                <Link to={{
                  pathname: '/react/animation',
                  query: queryParams
                }}>
                  Animation
                </Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/react/toggleButton',
                  query: queryParams
                }}>
                  Toggle Animated Button
                </Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/react/sortablePane',
                  query: queryParams
                }}>
                  Sortable pane
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={{
              pathname: '/redux',
              query: queryParams
            }}>
              Redux
            </Link>
            <ul>
              <li>
                <Link to={{
                  pathname: '/redux/redirect'
                }}>
                  Redirect
                </Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/redux/redirectExample',
                  query: {
                    nNodes: 20
                  }
                }}>
                  Redirect action with push
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={{
              pathname: '/flux',
              query: queryParams
            }}>
              Flux
            </Link>
          </li>
        </ul>

        {this.props.children}

      </div>
    )
  }
})
