interface ISectionItem {
  KEY: string;
  NAME: string;
  NUMBER: string;
  BTN_CAPTION: string;
  BTN_CAPTION_LONG: string;
}

interface ISections {
  [key: string]: ISectionItem;
}

interface IPlanetnames {
  [key: string]: string;
}

interface IPlanetStatsItem {
  KEY: string;
  NAME: string;
  TITLE: string;
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
