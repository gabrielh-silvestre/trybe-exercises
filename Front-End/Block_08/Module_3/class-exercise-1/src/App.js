import { useState, useEffect } from 'react';

const TIME_TO_RANDOM_NUMBER = 10000;
const TIME_TO_RESET = 4000;

function App() {
  const [randomNumber, setRandomNumber] = useState(undefined);

  const showMessage = () =>
    randomNumber % 3 === 0 || randomNumber % 5 === 0 ? 'Acerto' : 'Erro';

  useEffect(() => {
    setTimeout(() => {
      const newRandomNumber = Math.floor(Math.random() * 100);
      setRandomNumber(newRandomNumber);
      console.log('trem');
    }, TIME_TO_RANDOM_NUMBER);
  }, []);

  useEffect(() => {
    if (randomNumber) {
      setTimeout(() => {
        setRandomNumber(0);
      }, TIME_TO_RESET);
    }
  }, [randomNumber]);

  return (
    <div>
      {randomNumber && showMessage()}
      <p>O número é {randomNumber}</p>
    </div>
  );
}

export default App;
