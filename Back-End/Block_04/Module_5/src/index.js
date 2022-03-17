const express = require('express');

const { userRouter } = require('./routes/userRoute');

const PORT = 3001;
const api = express();

api.use(express.json());

api.use('/user', userRouter);

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
