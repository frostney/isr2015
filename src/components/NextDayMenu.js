import React, {Component} from 'react';

import World from 'store/World';

import Menu from './Menu';

class NextDayMenu extends Component {
  componentDidMount() {
    World.trigger('day', 1);
    World.trigger('blood', -10);
  }

  render() {
    let itemNames = ['Intruders', 'Blood'];

    let items = itemNames.map(name => {
      return {
        name,
        description: 'A few people tried to get in but no one succeded.'
      };
    });

    return <Menu className="nextday" title="It's the next day" onClose={this.props.onClose} items={items} />;
  }
}

export default NextDayMenu;
