import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

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
        <h1>Hi there!</h1>
      </Provider>
    );
  }
}
