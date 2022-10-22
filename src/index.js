import './style.css';
import { setGame, store } from './modules/SetData.js';
import getData from './modules/GetData.js';
import { showData } from './modules/ShowData.js';

const submitBtn = document.getElementById('submit');
const nameInput = document.getElementById('nameInput');
const scoreInput = document.getElementById('scoreInput');
const scores = document.getElementById('scores');
const refresh = document.getElementById('refresh');
const gameID = (() => localStorage.getItem('game'))();

submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const score = scoreInput.value;
  if (gameID) {
    store(name, score, gameID);
  } else {
    setGame('LeaderBoard Game').then((response) => {
      const ID = response.data.result.split(' ')[3];
      store(name, score, ID);
    });
  }
  nameInput.value = null;
  scoreInput.value = null;
});

window.addEventListener('load', () => {
  if (gameID) {
    getData(gameID).then((response) => {
      const toBeShowed = response.data.result;
      const received = showData(toBeShowed);
      scores.innerHTML = received;
    });
  } else {
    scores.innerHTML = `
    <tr>
      <td colspan='3'>Nothing To Show!</td>
    </tr>
    `;
  }
});

refresh.addEventListener('click', () => {
  if (gameID) {
    getData(gameID).then((response) => {
      const toBeShowed = response.data.result;
      const received = showData(toBeShowed);
      scores.innerHTML = received;
    });
  } else {
    scores.innerHTML = `
    <tr>
      <td colspan='3'>Nothing To Show!</td>
    </tr>
    `;
  }
});
