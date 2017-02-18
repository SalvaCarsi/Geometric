'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderWrapper from '../components/HeaderWrapper';

export class ShapesHeader extends Component {

  render = () => {
    return (
      <HeaderWrapper>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </HeaderWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(ShapesHeader)