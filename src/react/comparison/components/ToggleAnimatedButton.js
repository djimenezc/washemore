import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'

function SVGLineIcon(props) {
  let wrapperStyle = {
    cursor: 'pointer'
  };

  let innerStyle = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '3',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  return (
    <svg style={wrapperStyle} height="1.5em" width="1.5em" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
      <g style={innerStyle}>
        {props.children}
      </g>
    </svg>
  )
}

function ToggleButton(props) {
  const TOTAL_LENGTH = 72.7977294921875;
  const CIRCLE_LENGTH = 50.24085998535156;
  const CHECKED_LENGTH = -22.55687141418457;

  let motionProps = {
    defaultStyle: {
      offset: -TOTAL_LENGTH
    },
    style: {
      offset: props.active ?
        spring(CIRCLE_LENGTH, {stiffness: 60, damping: 11}) :
        spring(CHECKED_LENGTH, {stiffness: 120, damping: 13.8})
    }
  };

  return (
    <SVGLineIcon>
      <Motion {...motionProps} >
        { ({offset}) =>
          <path
            style={{
              strokeDasharray: `${TOTAL_LENGTH} ${TOTAL_LENGTH}`,
              strokeDashoffset: offset
            }}
            d="M20 6.7L9.3 17.3 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
          />
        }
      </Motion>
    </SVGLineIcon>
  )
}

class Test extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.style = {
      fontSize: '6em',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#2196F3'
    };
  }

  handleToggle() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <span style={this.style} onClick={this.handleToggle.bind(this)}>
        <ToggleButton active={this.state.active}/>
      </span>
    )
  }
}

export default  Test;
