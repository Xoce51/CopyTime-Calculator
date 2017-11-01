import React, { Component } from 'react';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

export default class Data extends Component {

  render() {
    let checkbox = <Checkbox
      onChange={this.props.update}
      value={this.props.value}
    />;
    let label = <Tooltip id="tooltip-top" title="Small file extend the transfer time (20% longer)" placement="top">
      <span>Small file <Icon style={{ fontSize: 14 }}>help_outline</Icon></span>
    </Tooltip>;
    return (
      <FormControlLabel className="full-width"
                        control={checkbox}
                        label={label}
      >
      </FormControlLabel>
    );
  }
}