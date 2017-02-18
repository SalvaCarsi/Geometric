'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderWrapper from '../components/HeaderWrapper';

import shapeOptions from '../constants';

export class ShapesHeader extends Component {

  renderCurrentShapeLabel = () => {
    switch (this.props.currentShape) {
      case shapeOptions.square: return 'Square';
      case shapeOptions.diamond: return 'Diamond';
      default: return 'Current Shapes';
    }
  };

  render = () => {
    return (
      <HeaderWrapper>
        <h1>Geometric shapes</h1>
        <h3>{this.renderCurrentShapeLabel()}</h3>
      </HeaderWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.shapeReducer.currentShape});

export default connect(mapStateToProps)(ShapesHeader)