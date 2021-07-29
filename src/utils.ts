const planetsData: [{ [key: string]: any }] = require('./assets/data.json');

const getPlanetData = (planetName: string, data: string) => {
  const planetInfo = planetsData.filter(
    planet => planet.name.toLowerCase() === planetName
  );
  return planetInfo[0][data];
};

export { getPlanetData };
