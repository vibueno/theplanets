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

interface IPlanetPics {
  [key: string]: string;
}

interface IPlanetItem {
  KEY: string;
  NAME: string;
  PICS: IPlanetPics;
}

interface IPlanets {
  [key: string]: IPlanetItem;
}

interface IStatsItem {
  KEY: string;
  NAME: string;
  TITLE: string;
}

interface IStats {
  [key: string]: IStatsItem;
}

export type { ISectionItem, ISections, IPlanets, IStatsItem, IStats };
