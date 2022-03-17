const express = require('express');

const { singUpRoute } = require('./routes/singUpRoute');
const { simpsonsRoute } = require('./routes/simpsonsRoute');

const api = express();
const PORT = 3001;

api.use(express.json());
api.use('/simpsons', simpsonsRoute);
api.use('/singup', singUpRoute);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
