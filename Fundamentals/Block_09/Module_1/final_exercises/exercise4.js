const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (callback) => {
  const randomTime = Math.floor(Math.random() * 5000);
  const temperature = callback();

  setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), randomTime);
}

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
