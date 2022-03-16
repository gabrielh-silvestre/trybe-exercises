const express = require('express');

const { pingRoute } = require('./routes/ping');

const api = express();
const PORT = 3001;

api.use('/ping', pingRoute);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
