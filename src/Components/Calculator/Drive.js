import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { hdd } from '../../utils/data';

export default class Drive extends Component {

  render() {
    return (
      <FormControl className="full-width">
        <InputLabel htmlFor="drive">Type of Drive</InputLabel>
        <Select
          value={this.props.value}
          onChange={this.props.update}
          input={<Input id="drive" />}
        >
          <MenuItem value="">Choose Drive</MenuItem>
          {
            hdd.map(item => (
              <MenuItem value={ item.value }>{ item.label }</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    );
  }
}