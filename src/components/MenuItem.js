import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.onClick}>
        <div className={`menu-item-icon menu-item-icon-${this.props.icon}`} />
        <div className="menu-item-text">
          <h3>{this.props.name}</h3>
          <div className="menu-item-description">{this.props.description}</div>
        </div>
      </div>
    )
  }
}

export default MenuItem;
