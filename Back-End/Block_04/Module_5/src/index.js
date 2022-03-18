const express = require('express');

const { userRouter } = require('./routes/userRoute');
const { btcRouter } = require('./routes/btcRoute');
const { postRouter } = require('./routes/postRoute');

const { auth } = require('./middlewares');

const PORT = 3001;
const api = express();

api.use(express.json());

api.use('/user', userRouter);
api.use('/btc', auth, btcRouter);
api.use('/posts', postRouter);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
