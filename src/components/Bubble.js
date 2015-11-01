import React, {Component} from 'react';

class Bubble extends Component {
  static defaultProps = {
    row: 1,
  }

  render() {
    return (
      <div className={`bubble bubble-row-${this.props.row}`}>
        <div className={`icon icon-${this.props.icon}`} />
        <div className="text">{this.props.children}</div>
      </div>
    );
  }
}

export default Bubble;
