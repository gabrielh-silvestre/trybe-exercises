const coinURL = 'https://api.coincap.io/v2/assets';

const cryptoContainer = document.querySelector('#cryptoContainer');

const template = ({ id, symbol, priceUsd }) => {
  return `<li>${id} (${symbol}): ${Number.parseFloat(priceUsd).toFixed(2)}</li>`;
};

const showCryptos = (data) => {
  for (let i = 0; i < 10; i += 1) {
    cryptoContainer.innerHTML += template(data[i]);
  }
};

const getFetch = () => {
  fetch(coinURL)
    .then((data) => data.json())
    .then(({ data }) => showCryptos(data))
    .catch((error) => {
      alert('ERRO! A página será recarregada!');
      window.location.reload(true);
    });
}

window.onload = () => getFetch();
