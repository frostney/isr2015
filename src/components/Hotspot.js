import React, {Component} from 'react';
import GameObject from './GameObject';

class Hotspot extends Component {
  render() {
    return <GameObject onClick={this.props.onClick} />;
  }
}

export default Hotspot;
