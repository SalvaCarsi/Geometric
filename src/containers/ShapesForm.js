'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';
import ButtonsWrapper from '../components/ButtonsWrapper';
import Button from '../components/Button';

export class ShapesForm extends Component {

  render = () => {
    return (
      <FormWrapper>
        <ButtonsWrapper>
          <Button>Square</Button>
          <Button>Diamond</Button>
        </ButtonsWrapper>
      </FormWrapper>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;