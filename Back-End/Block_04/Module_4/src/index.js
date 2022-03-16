const express = require('express');
const { helloRoute } = require('./routes/hello');

const { pingRoute } = require('./routes/ping');

const api = express();
const PORT = 3001;

api.use(express.json());

api.use('/ping', pingRoute);
api.use('/hello', helloRoute);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
