import React, {Component} from 'react';
import MenuItem from './MenuItem';
import Button from './Button';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fading: false,
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const items = this.props.items.map((item, index) => <MenuItem key={index} {...item} />);

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
