import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
    );
  }
}
