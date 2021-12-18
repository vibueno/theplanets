const sections = {
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

const planetNames = {
  mercury: 'mercury',
  venus: 'venus',
  earth: 'earth',
  mars: 'mars',
  jupiter: 'jupiter',
  saturn: 'saturn',
  uranus: 'uranus',
  neptune: 'neptune'
};

interface IPlanetKeyDataItem {
  id: string;
  title: string;
}

interface IPlanetKeyData {
  [key: string]: IPlanetKeyDataItem;
}

const planetKeyData: IPlanetKeyData = {
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

const planetKeyDataKeys = [
  planetKeyData.rotation.id,
  planetKeyData.revolution.id,
  planetKeyData.radius.id,
  planetKeyData.temperature.id
];
export { sections, planetNames, planetKeyData, planetKeyDataKeys };
