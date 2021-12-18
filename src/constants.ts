import { ISections, IPlanetnames, IPlanetStats } from './interfaces';

const sections: ISections = {
  overview: {
    id: 'overview',
    number: '01',
    btnCaption: 'overview',
    btnCaptionExtended: 'overview'
  },
  structure: {
    id: 'structure',
    number: '02',
    btnCaption: 'structure',
    btnCaptionExtended: 'internal structure'
  },
  geology: {
    id: 'geology',
    number: '03',
    btnCaption: 'geology',
    btnCaptionExtended: 'surface geology'
  }
};

const sectionKeys: string[] = [
  sections.overview.id,
  sections.structure.id,
  sections.geology.id
];

const planetNames: IPlanetnames = {
  mercury: 'mercury',
  venus: 'venus',
  earth: 'earth',
  mars: 'mars',
  jupiter: 'jupiter',
  saturn: 'saturn',
  uranus: 'uranus',
  neptune: 'neptune'
};

const planetNamesKeys: string[] = [
  planetNames.mercury,
  planetNames.venus,
  planetNames.earth,
  planetNames.mars,
  planetNames.jupiter,
  planetNames.saturn,
  planetNames.neptune
];

const planetStats: IPlanetStats = {
  rotation: {
    id: 'rotation',
    title: 'rotation time'
  },
  revolution: {
    id: 'revolution',
    title: 'rotation time'
  },
  radius: {
    id: 'radius',
    title: 'radius'
  },
  temperature: {
    id: 'temperature',
    title: 'average temp.'
  }
};

const planetStatsKeys: string[] = [
  planetStats.rotation.id,
  planetStats.revolution.id,
  planetStats.radius.id,
  planetStats.temperature.id
];

export {
  sections,
  sectionKeys,
  planetNames,
  planetNamesKeys,
  planetStats,
  planetStatsKeys
};
