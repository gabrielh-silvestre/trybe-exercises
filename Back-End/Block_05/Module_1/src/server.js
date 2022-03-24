const express = require('express');

const { userRoute } = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
