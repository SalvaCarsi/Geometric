'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormWrapper from '../../components/FormWrapper';
import ButtonsWrapper from '../../components/ButtonsWrapper';
import Button from '../../components/Button';
import SquareRenderer from '../../components/SquareRenderer';
import DiamondRenderer from '../../components/DiamondRenderer';

import shapeOptions from '../../constants';

import * as actionsCreator from './actions';

export class ShapesForm extends Component {

  constructor(props) {
    super(props);
  }

  onClickSquareButton = () => {
    this.props.actions.updateShape(shapeOptions.square);
  };

  onClickDiamondButton = () => {
    this.props.actions.updateShape(shapeOptions.diamond);
  };

  renderShape = () => {
    switch(this.props.currentShape){
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
const mapStateToProps = state => ({currentShape: state.shapeReducer.currentShape});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actionsCreator, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(ShapesForm);