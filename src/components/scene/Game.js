import React, {Component} from 'react';

import Scene from './Scene';
import BackgroundImage from '../BackgroundImage';
import Credits from '../Credits';
import World from 'store/World';
import GameObject from '../GameObject';
import Button from '../Button';
import Bubble from '../Bubble';
import ProgressBar from '../ProgressBar';
import BuildMenu from '../BuildMenu';
import QuestsMenu from '../QuestsMenu';
import UpgradesMenu from '../UpgradesMenu';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      health: 100,
      blood: 100,
      gold: 150,
      fame: 10,
      innerPeace: 50,
      menu: 'none',
    };
  }

  componentDidMount() {
    World.on('day', value => this.setState({day: value}));
    World.on('health', value => this.setState({health: value}));
    World.on('blood', value => this.setState({blood: value}));
    World.on('gold', value => this.setState({gold: value}));
    World.on('fame', value => this.setState({fame: value}));
    World.on('innerPeace', value => this.setState({innerPeace: value}));
  }

  onCloseMenu = () => {
    this.setState({menu: 'none'});
  }

  onBuild = () => this.setState({menu: 'build'});
  onQuests = () => this.setState({menu: 'quests'});
  onUpgrades = () => this.setState({menu: 'upgrades'});
  onNextDay = () => this.setState({menu: 'nextday'});

  render() {
    const menu = (() => {
      switch (this.state.menu) {
        case 'none': return null;
        case 'build': return <BuildMenu onClose={this.onCloseMenu} />;
        case 'quests': return <QuestsMenu onClose={this.onCloseMenu} />;
        case 'upgrades': return <UpgradesMenu onClose={this.onCloseMenu} />;
        default:
          return null;
      }
    })();

    const bubbles = ['day', 'health', 'blood', 'gold', 'fame'].map((value, index) => {
      return <Bubble key={index} icon={value} row={index + 1}>{this.state[value]}</Bubble>;
    });

    return (
      <Scene name="game">
        <div className="tower" />
        {bubbles}
        <ProgressBar progress={this.state.innerPeace} />
        <Button className="button-build" onClick={this.onBuild}>Defenses</Button>
        <Button className="button-quests" onClick={this.onQuests}>Quests</Button>
        <Button className="button-upgrades" onClick={this.onUpgrades}>Upgrades</Button>
        <Button className="button-next" onClick={this.onNextDay}>Next day</Button>
        {menu}
      </Scene>
    );
  }
}

export default Bar;
