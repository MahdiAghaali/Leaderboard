import { message } from './ShowData.js';

const axios = require('axios').default;

const GetData = async (gameID) => {
  let response = null;
  try {
    response = await axios.get(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    );
    return response;
  } catch (error) {
    message(error);
  }
  return response;
};

export default GetData;