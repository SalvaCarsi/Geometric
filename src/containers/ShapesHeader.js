'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImersivoWrapperRed from '../components/ImersivoWrapperRed';

export class ShapesHeader extends Component {

  render = () => {
    return (
      <ImersivoWrapperRed>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </ImersivoWrapperRed>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(ShapesHeader)