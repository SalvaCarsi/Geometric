'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImersivoWrapper from '../components/ImersivoWrapper';

export class Header extends Component {

  render = () => {
    return (
      <ImersivoWrapper>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </ImersivoWrapper>
    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(Header)