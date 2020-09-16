import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

import LoginContainer from './src/containers/index';
import { View } from 'react-native';
import Login from './src/components/Login';

//Middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default function App() {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
}