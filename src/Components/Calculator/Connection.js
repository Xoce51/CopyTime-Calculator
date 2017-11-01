import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { connection } from '../../utils/data';

export default class Calculator extends Component {

  render() {
    return (
      <FormControl className="full-width">
        <InputLabel htmlFor="connection">Connection</InputLabel>
        <Select
          value={this.props.value}
          onChange={this.props.update}
          input={<Input id="connection" />}
        >
          <MenuItem value="">Choose Connection</MenuItem>
          {
            connection.map(item => (
              <MenuItem value={ item.value }>{ item.label }</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    );
  }
}