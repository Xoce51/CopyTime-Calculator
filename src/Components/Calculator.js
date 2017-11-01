import React, { Component } from 'react';
import Connection from './Calculator/Connection';
import Drive from './Calculator/Drive';
import Data from './Calculator/Data';
import Size from './Calculator/Size';
import File from './Calculator/File';
import Grid from 'material-ui/Grid';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        connection: '',
        drive: '',
        data: 2,
        size: 'to',
        file: 0
      }
    };
  };

  handleChange = key => event => {
    var value = this.state.value;
    value[key] = event.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Connection update={this.handleChange('connection')} value={this.state.value.connection} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Drive update={this.handleChange('drive')} value={this.state.value.drive} />
        </Grid>
        <Grid item xs={10} sm={6}>
          <Data update={this.handleChange('data')} value={this.state.value.data} />
        </Grid>
        <Grid item xs={2} sm={2}>
          <Size update={this.handleChange('size')} value={this.state.value.size} />
        </Grid>
        <Grid item xs={2} sm={4}>
          <File update={this.handleChange('file')} value={this.state.value.file} />
        </Grid>
      </Grid>
    )
  };
}