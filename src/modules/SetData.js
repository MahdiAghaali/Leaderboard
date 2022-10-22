import { message } from './ShowData.js';

const axios = require('axios').default;

const setGame = async (name = 'leaderBoard') => {
  let response = null;
  try {
    response = await axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
      { name },
    );
    const gameID = response.data.result.split(' ')[3];
    localStorage.setItem('game', gameID);
    return response;
  } catch (error) {
    message(error);
  }
  return response;
};

const store = async (userName = '', userScore = 0, gameID) => {
  try {
    const response = await axios.post(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
      { user: userName, score: userScore },
    );
    await message(response.data.result);
  } catch (error) {
    message(error);
  }
};

export { setGame, store };
