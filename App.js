import React, { Component } from 'react';
import Navigation from './src/component/Router'
import { store, persistor } from './src/redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation/>
          </PersistGate>
        </Provider>
      </>
    );
  }
}