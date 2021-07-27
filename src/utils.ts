const planetsData: [{ [key: string]: any }] = require('./assets/data.json');

const getPlanetInfo = (planetName: string, planetSection: string) => {
  const planetInfo = planetsData.filter(
    planet => planet.name.toLowerCase() === planetName
  );
  return planetInfo[0][planetSection];
};

export { getPlanetInfo };
