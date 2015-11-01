import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import Dialog from '../Dialog';
import World from 'store/World';
import GameObject from '../GameObject';

import data from 'data';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: 'intro',
      dialogIndex: 0,
      dialogVisible: true,
    };
  }

  componentDidMount() {
    World.on('dialog', dialogState => {
      this.setState({
        dialog: dialogState,
      });
    });

    World.on('dialogIndex', dialogIndex => {
      this.setState({
        dialogIndex: dialogIndex,
      });
    });
  }

  render() {
    return (
      <Scene name="game">

      </Scene>
    );
  }
}

export default Bar;
