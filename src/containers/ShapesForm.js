'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';
import Button from '../components/Button';

export class ShapesForm extends Component {

  render = () => {
    return (
      <FormWrapper>
        <Button>Square</Button>
        <Button>Diamond</Button>
      </FormWrapper>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;