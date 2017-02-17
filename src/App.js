import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export default class App extends Component {

  configureStore = () => {
    return createStore(combineReducers((state = {}, action) => {
      return state;
    }));
  };

  render = () => {
    return (
      <Provider store={this.configureStore()}>
        <h1>Hi there!</h1>
      </Provider>
    );
  }
}
