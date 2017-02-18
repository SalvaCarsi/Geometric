'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ImersivoWrapperForm from '../components/ImersivoWrapperForm';
import ImersivoButton from '../components/ImersivoButton';

export class ShapesForm extends Component {

  render = () => {
    return (
      <ImersivoWrapperForm>
        <ImersivoButton>Square</ImersivoButton>
        <ImersivoButton>Diamond</ImersivoButton>
      </ImersivoWrapperForm>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;