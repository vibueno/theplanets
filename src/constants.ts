interface ISectionItem {
  id: string;
  number: string;
  btnCaption: string;
  btnCaptionExtended: string;
}

interface ISections {
  [key: string]: ISectionItem;
}

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

interface IPlanetnames {
  [key: string]: string;
}

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

interface IPlanetStatsItem {
  id: string;
  title: string;
}

interface IPlanetStats {
  [key: string]: IPlanetStatsItem;
}

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

export { sections, sectionKeys, planetNames, planetStats, planetStatsKeys };
