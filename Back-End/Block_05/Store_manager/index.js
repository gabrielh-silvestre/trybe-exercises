require('dotenv').config();
const express = require('express');

const { errorHandler } = require('./middlewares/errorHandler');
const { productRouter } = require('./routes/productRoute');
const { salesRouter } = require('./routes/salesRoute');

const PORT = process.env.PORT || 3001;
const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/products', productRouter);
app.use('/sales', salesRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
