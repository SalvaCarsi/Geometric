'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from './Section';

export class Header extends Component {

  render = () => {
    return (
      <Section>
        <h1>Geometric shapes</h1>
        <h3>Current shapes {this.props.currentShape}</h3>
      </Section>

    );
  }

}

// Container
const mapStateToProps = state => ({currentShape: state.currentShape});

export default connect(mapStateToProps)(Header)