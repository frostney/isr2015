import EventMap from 'eventmap';
import {Defaults} from '../data';

let World = new EventMap();

World.reset = function(key) {
  World.trigger(key, Defaults[key]);
};

World.resetAll = function() {
  Object.keys(Defaults).forEach(key => World.reset(key));
};

export default World;
