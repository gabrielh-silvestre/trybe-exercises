export default function setlocalStorage(key, data) {
  const convertedData = JSON.stringify(data);
  localStorage.setItem(key, convertedData);
}

export function createNewPlayer(player) {
  setlocalStorage('player', player);
}

export function addPlayerToRanking() {
  const newPlayer = JSON.parse(localStorage.getItem('player'));
  const ranking = localStorage.getItem('ranking')
    ? JSON.parse(localStorage.getItem('ranking'))
    : undefined;

  if (ranking) {
    const newRanking = [...ranking, newPlayer];
    setlocalStorage('ranking', newRanking);
  } else {
    setlocalStorage('ranking', [newPlayer]);
  }
}
