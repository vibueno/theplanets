import axios from 'axios';
import { ApiError, BackendError } from './error';

const planetsData: [{ [key: string]: any }] = require('ASSETS/data.json');

const getPlanetData = (planetName: string, key: string) => {
  const planetInfo = planetsData.filter(
    planet => planet.name.toLowerCase() === planetName
  );
  return planetInfo[0][key];
};

const getPlanetDataApi = async (planetName: string) => {
  let response;
  try {
    response = await axios.get(
      `${process.env.BACKEND_URL}/planets/${planetName}`
    );

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log(e);
    } else {
      console.log(e);
    }
  }

  const planetInfo = planetsData.filter(
    planet => planet.name.toLowerCase() === planetName
  );
  return planetInfo[0];
};

export { getPlanetData, getPlanetDataApi };
