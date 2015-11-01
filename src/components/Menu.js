import React, {Component} from 'react';
import MenuItem from './MenuItem';
import Button from './Button';

class Menu extends Component {
  render() {
    const items = this.props.items.map(item => <MenuItem {...item} />);

    return (
      <div className="menu">
        <div className="menu-inner">{items}</div>
        <div className="menu-bottom"><Button>Close</Button></div>
      </div>
    );
  }
}

export default Menu;
