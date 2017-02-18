'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../../components/ImersivoWrapper';

export class Header extends Component {

  render = () => {
    return (
      <Wrapper>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </Wrapper>

    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(Header)