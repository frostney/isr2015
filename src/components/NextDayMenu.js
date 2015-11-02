import React, {Component} from 'react';

import Menu from './Menu';

class NextDayMenu extends Component {
  render() {
    let itemNames = ['Intruders', 'Blood'];

    let items = itemNames.map(name => {
      return {
        name,
        description: 'A few people tried to get in but no one succeded.'
      };
    });

    return <Menu title="It's the next day" onClose={this.props.onClose} items={items} />;
  }
}

export default NextDayMenu;
