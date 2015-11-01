import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.onClick}>
        <div className={`icon icon-name-${this.props.icon}`} />
        <h3>{this.props.name}</h3>
        <div className="menu-item-description">{this.props.description}</div>
      </div>
    )
  }
}

export default MenuItem;
