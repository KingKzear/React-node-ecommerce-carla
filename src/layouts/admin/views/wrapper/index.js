import React, { Component } from 'react';
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import { icons } from './../../assets/icons'
import './../../scss/style.scss';

React.icons = icons

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


class AdminWrapper extends Component {

  render() {
    return (
      <React.Suspense fallback={loading}>
        {this.props.children}
      </React.Suspense>
    );
  }
}

export default AdminWrapper;
