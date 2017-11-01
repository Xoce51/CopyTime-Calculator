import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';

export default class Size extends Component {

  render() {
    return (
      <FormControl className="full-width">
        <TextField
          id="size"
          select
          value={this.props.value}
          onChange={this.props.update}
          margin="normal"
        >
          <MenuItem value="po">Po</MenuItem>
          <MenuItem value="to">To</MenuItem>
          <MenuItem value="go">Go</MenuItem>
        </TextField>
      </FormControl>
    );
  }
}