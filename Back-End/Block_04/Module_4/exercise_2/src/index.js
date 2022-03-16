const express = require('express');
const { simpsonsRoute } = require('./routes/simpsonsRoute');

const api = express();
const PORT = 3001;

api.use('/simpsons', simpsonsRoute);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
