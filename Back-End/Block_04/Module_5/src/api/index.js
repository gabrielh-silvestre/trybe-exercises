const express = require('express');

const { userRouter } = require('../routes/userRoute');
const { btcRouter } = require('../routes/btcRoute');
const { postRouter } = require('../routes/postRoute');

const { auth } = require('../middlewares');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/btc', auth, btcRouter);
app.use('/posts', postRouter);

module.exports = {
  app,
};
