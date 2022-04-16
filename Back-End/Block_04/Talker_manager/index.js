const express = require('express');
const bodyParser = require('body-parser');

const { talkerRouter } = require('./src/route/talkerRoute');
const { loginRoute } = require('./src/route/loginRoute');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(bodyParser.json());
app.use('/talker', talkerRouter);
app.use('/login', loginRoute);

app.listen(PORT, () => {
  console.log('Online');
});
