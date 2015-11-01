import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import World from 'store/World';
import GameObject from '../GameObject';
import Button from '../Button';
import Bubble from '../Bubble';
import ProgressBar from '../ProgressBar';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      health: 100,
      blood: 100,
      fame: 10,
      innerPeace: 50,
    };
  }

  componentDidMount() {
    World.on('day', value => this.setState({day: value}));
    World.on('health', value => this.setState({health: value}));
    World.on('blood', value => this.setState({blood: value}));
    World.on('fame', value => this.setState({fame: value}));
    World.on('innerPeace', value => this.setState({innerPeace: value}));
  }

  render() {
    return (
      <Scene name="game">
        <Bubble>Day: {this.state.day}</Bubble>
        <Bubble>Health: {this.state.health}</Bubble>
        <Bubble>Blood: {this.state.blood}</Bubble>
        <Bubble>Fame: {this.state.fame}</Bubble>
        <ProgressBar progress={this.state.innerPeace} />
        <div>Inner Peace: {this.state.innerPeace} / 100</div>
        <Button>Quests</Button>
        <Button>Next day</Button>
      </Scene>
    );
  }
}

export default Bar;
