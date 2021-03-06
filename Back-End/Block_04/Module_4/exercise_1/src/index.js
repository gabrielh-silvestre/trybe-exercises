const express = require('express');

const { pingRoute } = require('./routes/ping');
const { helloRoute } = require('./routes/hello');
const { greetingsRoute } = require('./routes/greetings');
const { usersRoute } = require('./routes/users');

const api = express();
const PORT = 3001;

api.use(express.json());

api.use('/ping', pingRoute);
api.use('/hello', helloRoute);
api.use('/greetings', greetingsRoute);
api.use('/users', usersRoute);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
