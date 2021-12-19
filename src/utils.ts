const planetsData: [{ [key: string]: any }] = require('ASSETS/data.json');

const getPlanetData = (planetName: string, key: string) => {
  const planetInfo = planetsData.filter(
    planet => planet.name.toLowerCase() === planetName
  );
  return planetInfo[0][key];
};

export { getPlanetData };
