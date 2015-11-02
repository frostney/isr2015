import React, {Component} from 'react';
import {Build} from '../data';

import Menu from './Menu';

class BuildMenu extends Component {
  render() {
    return <Menu title="Defenses" onClose={this.props.onClose} items={Build} />;
  }
}

export default BuildMenu;
