const express = require('express');

const { productRouter } = require('./controllers/productControllers');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
