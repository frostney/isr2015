import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import World from 'store/World';
import GameObject from '../GameObject';
import Button from '../Button';

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
        <div>Health: 100</div>
        <div>Blood: 100</div>
        <div>Fame: 150</div>
        <div>Inner Peace: 50 / 100</div>
        <Button>Quests</Button>
        <Button>Next day</Button>
      </Scene>
    );
  }
}

export default Bar;
