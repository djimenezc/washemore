/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';
// const leche = require ('leche');

// const withData = leche.withData;

describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  it('should have its component name as default className', () => {
    expect(MainComponent.props.className).to.equal('index');
  });


  it('should render the component', () => {

    const name = 'david';

    const component = TestUtils.renderIntoDocument(
      <Main name={name}/>
    );
    const domComponent = ReactDom.findDOMNode(component);

    expect(domComponent.textContent).to.equal(`Hello ${name}`);
  });
});
