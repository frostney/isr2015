import React, {Component} from 'react';
import {Upgrades} from '../data';

import Menu from './Menu';

class UpgradesMenu extends Component {
  render() {
    return <Menu title="Upgrades" onClose={this.props.onClose} items={Upgrades} />;
  }
}

export default UpgradesMenu;
