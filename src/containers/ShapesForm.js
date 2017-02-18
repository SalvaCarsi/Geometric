'use strict';

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';
import ButtonsWrapper from '../components/ButtonsWrapper';
import Button from '../components/Button';
import SquareRenderer from '../components/SquareRenderer';
import DiamondRenderer from '../components/DiamondRenderer';

const shapeOptions = {
  none: 'none',
  square:'square',
  diamond: 'diamond'
};

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {activeButton: shapeOptions.none};
  }

  onClickSquareButton = () => {
    this.setState({activeButton: shapeOptions.square});
  };

  onClickDiamondButton = () => {
    this.setState({activeButton: shapeOptions.diamond});
  };

  renderShape = () => {
    switch(this.state.activeButton){
      case shapeOptions.square:
        return <SquareRenderer/>;
      case shapeOptions.diamond:
        return <DiamondRenderer/>;
      default:
        return null
    }
  };

  render = () => {
    return (
      <FormWrapper>
        <ButtonsWrapper>
          <Button onClick={this.onClickSquareButton}>Square</Button>
          <Button onClick={this.onClickDiamondButton}>Diamond</Button>
        </ButtonsWrapper>
        {this.renderShape()}
      </FormWrapper>
    );
  }

}

// Container
// const mapStateToProps = state => ({currentShape: state.currentShape});

// export default connect(mapStateToProps)(Header)

export default ShapesForm;