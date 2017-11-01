import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

export default class Data extends Component {

  render() {
    return (
      <FormControl className="full-width">
        <InputLabel htmlFor="data">Type of Drive</InputLabel>
        <Input
          value={this.props.value}
          onChange={this.props.update}
          id="data"
        />
      </FormControl>
    );
  }
}