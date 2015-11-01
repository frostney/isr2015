import React, {Component} from 'react';
import MenuItem from './MenuItem';
import Button from './Button';

class Menu extends Component {
  render() {
    const items = this.props.items.map(item => <MenuItem {...item} />);

    return (
      <div>
        <div className="menu-overlay" />
        <div className="menu">
          <h2>{this.props.title}</h2>
          <div className="menu-inner">{items}</div>
          <div className="menu-bottom"><Button onClick={this.props.onClose}>Close</Button></div>
        </div>
      </div>
    );
  }
}

export default Menu;
