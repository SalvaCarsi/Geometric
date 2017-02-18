'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImersivoWrapperHeader from '../components/ImersivoWrapperHeader';

export class ShapesHeader extends Component {

  render = () => {
    return (
      <ImersivoWrapperHeader>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </ImersivoWrapperHeader>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(ShapesHeader)