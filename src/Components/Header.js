import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <h1>Copy Time Calculator</h1>
        </Toolbar>
      </AppBar>
    );
  }
}