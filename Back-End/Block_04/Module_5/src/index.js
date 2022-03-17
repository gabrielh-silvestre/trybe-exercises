const express = require('express');

const { userRouter } = require('./routes/userRoute');
const { btcRouter } = require('./routes/btcRoute');

const { auth } = require('./middlewares');

const PORT = 3001;
const api = express();

api.use(express.json());

api.use('/user', userRouter);
api.use('/btc', auth, btcRouter);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
