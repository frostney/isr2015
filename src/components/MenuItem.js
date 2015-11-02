import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    const description = this.props.description.split('\n').map((line, index) => {
      return <div className="line" key={index}>{line}</div>;
    });

    let className = 'menu-item';

    if (!this.props.enabled) {
      className += ' disabled';
    }

    const costs = (() => {
      const {gold, health, blood} = this.props;
      let arr = [];

      if (gold < 0) {
        arr.push(<div key={0}>Gold: {gold * (-1)}</div>);
      }

      if (health < 0) {
        arr.push(<div key={1}>Health: {health * (-1)}</div>);
      }

      if (blood < 0) {
        arr.push(<div key={2}>Blood: {blood * (-1)}</div>);
      }

      return arr;
    })();

    return (
      <div className={className} onClick={this.props.onClick}>
        <div className={`menu-item-icon menu-item-icon-${this.props.icon}`} />
        <div className="menu-item-text">
          <h3>{this.props.name}</h3>
          <div className="menu-item-description">{description}</div>
        </div>
        <div className="menu-item-costs">{costs}</div>
      </div>
    )
  }
}

export default MenuItem;
