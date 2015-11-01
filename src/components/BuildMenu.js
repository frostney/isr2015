import React, {Component} from 'react';
import {Build} from '../data';

import Menu from './Menu';

class BuildMenu extends Component {
  render() {
    return <Menu items={Build} />;
  }
}

export default BuildMenu;
