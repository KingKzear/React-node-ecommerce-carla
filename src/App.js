import React from 'react';
import store from './store/store'
import Routes from './routes'
import { Provider } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <Provider store={store}>
      {/* <React.Fragment> */}
        <Routes {...props}/>
      {/* </React.Fragment> */}
    </Provider>
  );
}

export default App;