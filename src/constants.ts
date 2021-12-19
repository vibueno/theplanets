import { ISections, IPlanetnames, IPlanetStats } from './interfaces';

import MERCURY_GEOLOGY_PIC from 'ASSETS/img/geology-mercury.png';
import VENUS_GEOLOGY_PIC from 'ASSETS/img/geology-venus.png';
import EARTH_GEOLOGY_PIC from 'ASSETS/img/geology-earth.png';
import MARS_GEOLOGY_PIC from 'ASSETS/img/geology-mars.png';
import JUPITER_GEOLOGY_PIC from 'ASSETS/img/geology-jupiter.png';
import SATURN_GEOLOGY_PIC from 'ASSETS/img/geology-saturn.png';
import URANUS_GEOLOGY_PIC from 'ASSETS/img/geology-uranus.png';
import NEPTUNE_GEOLOGY_PIC from 'ASSETS/img/geology-neptune.png';

const APP_TITLE = 'the planets';

const SECTIONS: ISections = {
  OVERVIEW: {
    KEY: 'OVERVIEW',
    NAME: 'overview',
    NUMBER: '01',
    BTN_CAPTION: 'overview',
    BTN_CAPTION_LONG: 'overview'
  },
  STRUCTURE: {
    KEY: 'STRUCTURE',
    NAME: 'structure',
    NUMBER: '02',
    BTN_CAPTION: 'structure',
    BTN_CAPTION_LONG: 'internal structure'
  },
  GEOLOGY: {
    KEY: 'GEOLOGY',
    NAME: 'geology',
    NUMBER: '03',
    BTN_CAPTION: 'geology',
    BTN_CAPTION_LONG: 'surface geology'
  }
};

const SECTION_KEYS: string[] = [
  SECTIONS.OVERVIEW.KEY,
  SECTIONS.STRUCTURE.KEY,
  SECTIONS.GEOLOGY.KEY
];

const PLANET_NAMES: IPlanetnames = {
  MERCURY: 'mercury',
  VENUS: 'venus',
  EARTH: 'earth',
  MARS: 'mars',
  JUPITER: 'jupiter',
  SATURN: 'saturn',
  URANUS: 'uranus',
  NEPTUNE: 'neptune'
};

const PLANET_NAMES_KEYS: string[] = [
  PLANET_NAMES.MERCURY,
  PLANET_NAMES.VENUS,
  PLANET_NAMES.EARTH,
  PLANET_NAMES.MARS,
  PLANET_NAMES.JUPITER,
  PLANET_NAMES.SATURN,
  PLANET_NAMES.NEPTUNE
];

const PLANET_PICS = {
  MERCURY: {
    GEOLOGY: MERCURY_GEOLOGY_PIC
  },
  VENUS: {
    GEOLOGY: VENUS_GEOLOGY_PIC
  },
  EARTH: {
    GEOLOGY: EARTH_GEOLOGY_PIC
  },
  MARS: {
    GEOLOGY: MARS_GEOLOGY_PIC
  },
  JUPITER: {
    GEOLOGY: JUPITER_GEOLOGY_PIC
  },
  SATURN: {
    GEOLOGY: SATURN_GEOLOGY_PIC
  },
  URANUS: {
    GEOLOGY: URANUS_GEOLOGY_PIC
  },
  NEPTUNE: {
    GEOLOGY: NEPTUNE_GEOLOGY_PIC
  }
};

const PLANET_STATS: IPlanetStats = {
  ROTATION: {
    KEY: 'ROTATION',
    NAME: 'rotation',
    TITLE: 'rotation time'
  },
  REVOLUTION: {
    KEY: 'REVOLUTION',
    NAME: 'revolution',
    TITLE: 'revolution time'
  },
  RADIUS: {
    KEY: 'RADIUS',
    NAME: 'radius',
    TITLE: 'radius'
  },
  TEMPERATURE: {
    KEY: 'TEMPERATURE',
    NAME: 'temperature',
    TITLE: 'average temp.'
  }
};

const PLANET_STATS_KEYS: string[] = [
  PLANET_STATS.ROTATION.KEY,
  PLANET_STATS.REVOLUTION.KEY,
  PLANET_STATS.RADIUS.KEY,
  PLANET_STATS.TEMPERATURE.KEY
];

export {
  APP_TITLE,
  SECTIONS,
  SECTION_KEYS,
  PLANET_NAMES,
  PLANET_PICS,
  PLANET_NAMES_KEYS,
  PLANET_STATS,
  PLANET_STATS_KEYS
};
