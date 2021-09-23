let nClicks = 0;

const clickButton = () => {
  document.querySelector('button').addEventListener('click', () => {
    nClicks += 1;
    document.querySelector('div').innerText = nClicks;
  });
};

window.onload = () => {
  clickButton();
};
