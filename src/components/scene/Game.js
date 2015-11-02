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
import NextDayMenu from '../NextDayMenu';
import IntroductionDialog from '../IntroductionDialog';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: World.stateData.day,
      health: World.stateData.health,
      blood: World.stateData.blood,
      gold: World.stateData.gold,
      fame: World.stateData.fame,
      innerPeace: World.stateData.innerPeace,
      menu: 'introduction',
    };
  }

  componentDidMount() {
    World.on('day', value => this.setState({day: this.state.day + value}));
    World.on('health', value => this.setState({health: this.state.health + value}));
    World.on('blood', value => this.setState({blood: this.state.blood + value}));
    World.on('gold', value => this.setState({gold: this.state.gold + value}));
    World.on('fame', value => this.setState({fame: this.state.fame + value}));
    World.on('innerPeace', value => this.setState({innerPeace: this.state.innerPeace + value}));

    World.on('health', () => {
      if (this.state.health < 0) {
        World.trigger('scene', 'GameLost');
      }
    });

    World.on('blood', () => {
      if (this.state.health < 0) {
        World.trigger('scene', 'GameLost');
      }
    });

    World.on('innerPeace', () => {
      if (this.state.innerPeace <= 0) {
        World.trigger('scene', 'GameLost');
      }

      if (this.state.innerPeace >= 100) {
        World.trigger('scene', 'GameWon');
      }
    });
  }

  onCloseMenu = () => {
    this.setState({menu: 'none'});
  }

  onBuild = () => this.setState({menu: 'build'});
  onQuests = () => this.setState({menu: 'quests'});
  onUpgrades = () => this.setState({menu: 'upgrades'});
  onNextDay = () => this.setState({menu: 'nextday'});
  onHelp = () => this.setState({menu: 'introduction'});

  onFilterEnabled = (item) => {
    if (this.state.gold + item.gold < 0) {
      return false;
    }

    if (this.state.health + item.health < 0) {
      return false;
    }

    if (this.state.blood + item.blood < 0) {
      return false;
    }

    return true;
  }

  onMenuItem = (item) => {
    if (item.gold) {
      World.trigger('gold', item.gold);
    }

    if (item.blood) {
      World.trigger('blood', item.blood);
    }

    if (item.health) {
      World.trigger('health', item.health);
    }

    if (item.gold) {
      World.trigger('gold', item.gold);
    }

    if (item.fame) {
      World.trigger('fame', item.fame);
    }

    if (item.innerPeace) {
      World.trigger('innerPeace', item.innerPeace);
    }
  }

  render() {
    const menu = (() => {
      switch (this.state.menu) {
        case 'none': return null;
        case 'introduction': return <IntroductionDialog onFilterEnabled={this.onFilterEnabled} onMenuItem={this.onMenuItem} onClose={this.onCloseMenu} />;
        case 'build': return <BuildMenu onFilterEnabled={this.onFilterEnabled} onMenuItem={this.onMenuItem} onClose={this.onCloseMenu} />;
        case 'quests': return <QuestsMenu onFilterEnabled={this.onFilterEnabled} onMenuItem={this.onMenuItem} onClose={this.onCloseMenu} />;
        case 'upgrades': return <UpgradesMenu onFilterEnabled={this.onFilterEnabled} onMenuItem={this.onMenuItem} onClose={this.onCloseMenu} />;
        case 'nextday': return <NextDayMenu onFilterEnabled={this.onFilterEnabled} onMenuItem={this.onMenuItem} onClose={this.onCloseMenu} />;
        default:
          return null;
      }
    })();

    const bubbles = ['day', 'health', 'blood', 'gold', 'fame'].map((value, index) => {
      const valueCapitalized = value.charAt(0).toUpperCase() + value.slice(1);

      return <Bubble key={index} icon={value} row={index + 1}>{valueCapitalized}: {this.state[value]}</Bubble>;
    });

    return (
      <Scene name="game">
        <div className="tower" />
        {bubbles}
        <ProgressBar progress={this.state.innerPeace} />
        <Button className="button-build" onClick={this.onBuild}>Defenses</Button>
        <Button className="button-quests" onClick={this.onQuests}>Quests</Button>
        <Button className="button-upgrades" onClick={this.onUpgrades}>Upgrades</Button>
        <Button className="button-help" onClick={this.onHelp}>Help</Button>
        <Button className="button-next" onClick={this.onNextDay}>Next day</Button>
        {menu}
      </Scene>
    );
  }
}

export default Bar;
