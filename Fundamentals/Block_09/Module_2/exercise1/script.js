// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.querySelector('#jokeContainer');

const showJoke = ({joke}) => jokeContainer.innerText = joke;

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data));
};

window.onload = () =>fetchJoke();
