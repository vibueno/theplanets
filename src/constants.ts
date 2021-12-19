import { ISections, IPlanets, IStats } from './interfaces';

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

const STATS: IStats = {
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

const STATS_KEYS: string[] = [
  STATS.ROTATION.KEY,
  STATS.REVOLUTION.KEY,
  STATS.RADIUS.KEY,
  STATS.TEMPERATURE.KEY
];

const PLANETS: IPlanets = {
  MERCURY: {
    KEY: 'MERCURY',
    NAME: 'mercury',
    PICS: {
      OVERVIEW: 'planet-mercury.svg',
      STRUCTURE: 'planet-mercury-internal.svg',
      GEOLOGY: 'planet-mercury.svg',
      GEOLOGY_ZOOM: MERCURY_GEOLOGY_PIC
    }
  },
  VENUS: {
    KEY: 'VENUS',
    NAME: 'venus',
    PICS: {
      OVERVIEW: 'planet-venus.svg',
      STRUCTURE: 'planet-venus-internal.svg',
      GEOLOGY: 'planet-venus.svg',
      GEOLOGY_ZOOM: VENUS_GEOLOGY_PIC
    }
  },
  EARTH: {
    KEY: 'EARTH',
    NAME: 'earth',
    PICS: {
      OVERVIEW: 'planet-earth.svg',
      STRUCTURE: 'planet-earth-internal.svg',
      GEOLOGY: 'planet-earth.svg',
      GEOLOGY_ZOOM: EARTH_GEOLOGY_PIC
    }
  },
  MARS: {
    KEY: 'MARS',
    NAME: 'mars',
    PICS: {
      OVERVIEW: 'planet-mars.svg',
      STRUCTURE: 'planet-mars-internal.svg',
      GEOLOGY: 'planet-mars.svg',
      GEOLOGY_ZOOM: MARS_GEOLOGY_PIC
    }
  },
  JUPITER: {
    KEY: 'JUPITER',
    NAME: 'jupiter',
    PICS: {
      OVERVIEW: 'planet-jupiter.svg',
      STRUCTURE: 'planet-jupiter-internal.svg',
      GEOLOGY: 'planet-jupiter.svg',
      GEOLOGY_ZOOM: JUPITER_GEOLOGY_PIC
    }
  },
  SATURN: {
    KEY: 'SATURN',
    NAME: 'saturn',
    PICS: {
      OVERVIEW: 'planet-saturn.svg',
      STRUCTURE: 'planet-saturn-internal.svg',
      GEOLOGY: 'planet-saturn.svg',
      GEOLOGY_ZOOM: SATURN_GEOLOGY_PIC
    }
  },
  URANUS: {
    KEY: 'URANUS',
    NAME: 'uranus',
    PICS: {
      OVERVIEW: 'planet-uranus.svg',
      STRUCTURE: 'planet-uranus-internal.svg',
      GEOLOGY: 'planet-uranus.svg',
      GEOLOGY_ZOOM: URANUS_GEOLOGY_PIC
    }
  },
  NEPTUNE: {
    KEY: 'NEPTUNE',
    NAME: 'neptune',
    PICS: {
      OVERVIEW: 'planet-neptune.svg',
      STRUCTURE: 'planet-neptune-internal.svg',
      GEOLOGY: 'planet-neptune.svg',
      GEOLOGY_ZOOM: NEPTUNE_GEOLOGY_PIC
    }
  }
};

const PLANET_KEYS: string[] = [
  PLANETS.MERCURY.KEY,
  PLANETS.VENUS.KEY,
  PLANETS.EARTH.KEY,
  PLANETS.MARS.KEY,
  PLANETS.JUPITER.KEY,
  PLANETS.SATURN.KEY,
  PLANETS.NEPTUNE.KEY
];

export {
  APP_TITLE,
  SECTIONS,
  SECTION_KEYS,
  STATS,
  STATS_KEYS,
  PLANETS,
  PLANET_KEYS
};
