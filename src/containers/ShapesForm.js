'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ImersivoWrapper from '../components/ImersivoWrapper';
import ImersivoButton from '../components/ImersivoButton';

export class ShapesForm extends Component {

  render = () => {
    return (
      <ImersivoWrapper>
        <ImersivoButton>Square</ImersivoButton>
        <ImersivoButton>Diamond</ImersivoButton>
      </ImersivoWrapper>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;