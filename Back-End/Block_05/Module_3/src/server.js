const express = require('express');

const { productRouter } = require('./controllers/productControllers');

const PORT = 3001;
const V1API = '/api/v1';
const app = express();

app.use(express.json());
app.use(`${V1API}/products`, productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
