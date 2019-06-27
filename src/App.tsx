import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './stores/configure';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';

const store = configureStore();

function Main(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App(props) {
  return (
   // <Dashboard  />
    <Dashboard2 />
  );
}

export default Main;
