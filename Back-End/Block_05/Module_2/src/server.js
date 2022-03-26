const express = require('express');

const {
  handleInvalidData,
  handleNotFound,
  handleIternalError,
} = require('./middleware/errorHandles');

const { cepRouter } = require('./routes/cepRoute');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/cep', cepRouter);

app.use(handleInvalidData, handleNotFound, handleIternalError);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
