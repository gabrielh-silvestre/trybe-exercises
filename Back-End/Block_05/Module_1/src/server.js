const express = require('express');

const {
  rescueUserAlreadyExists,
  rescueUserNotFount,
  rescueErrors,
} = require('./middleware/errors');

const { userRoute } = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/user', userRoute);

app.use(rescueUserAlreadyExists, rescueUserNotFount, rescueErrors);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
