import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import World from 'store/World';
import Button from '../Button';

class Intro extends Component {
  switchToGame = () => {
    World.trigger('scene', 'Game');
  }

  render() {
    return (
      <Scene name="intro">
        <h2>Well... you are a vampire.</h2>
        <h3>What would you like to be called?</h3>
        <input className="input-name" placeholder="Derpula" />
        <Button onClick={this.switchToGame}>Continue</Button>
      </Scene>
    );
  }
}

export default Intro;
