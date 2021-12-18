interface ISectionItem {
  id: string;
  number: string;
  btnCaption: string;
  btnCaptionExtended: string;
}

interface ISections {
  [key: string]: ISectionItem;
}

interface IPlanetnames {
  [key: string]: string;
}

interface IPlanetStatsItem {
  id: string;
  title: string;
}

interface IPlanetStats {
  [key: string]: IPlanetStatsItem;
}

export type {
  ISectionItem,
  ISections,
  IPlanetnames,
  IPlanetStatsItem,
  IPlanetStats
};
