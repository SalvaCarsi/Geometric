'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ImersivoWrapperGrey from '../components/ImersivoWrapperGrey';
import ImersivoButton from '../components/ImersivoButton';

export class ShapesForm extends Component {

  render = () => {
    return (
      <ImersivoWrapperGrey>
        <ImersivoButton>Square</ImersivoButton>
        <ImersivoButton>Diamond</ImersivoButton>
      </ImersivoWrapperGrey>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;