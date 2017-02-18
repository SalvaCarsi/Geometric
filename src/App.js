'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Header from './containers/Header';
import ImersivoButton from './components/Button';

function shapeReducer(state = {currentShape: ''}, action) {
  switch (action.type) {
    case 'SQUARE': return state.merge({currentShape: 'Square'});
    case 'DIAMOND': return state.merge({currentShape: 'diamond'});
  }
  return state;
}

export default class App extends Component {

  configureStore = () => {
    return createStore(combineReducers({shapeReducer}));
  };

  render = () => {
    return (
      <Provider store={this.configureStore()}>
        <div>
          <Header />
          <ImersivoButton>Button</ImersivoButton>
        </div>
      </Provider>
    );
  }
}
