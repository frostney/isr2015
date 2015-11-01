import React, {Component} from 'react';
import {Quests} from '../data';

import Menu from './Menu';

class QuestsMenu extends Component {
  render() {
    return <Menu title="Quests" onClose={this.props.onClose} items={Quests} />;
  }
}

export default QuestsMenu;
