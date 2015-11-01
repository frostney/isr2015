import React, {Component} from 'react';

import Menu from './Menu';

class NextDayMenu extends Component {
  render() {
    return <Menu title="It's the next day" onClose={this.props.onClose} items={[]} />;
  }
}

export default NextDayMenu;
