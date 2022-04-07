const express = require('express');
const { bookRouter } = require('./routes/bookRoute');

const PORT = process.env.PORT || 3301;
const app = express();

app.use(express.json());
app.use('/api/v1/books', bookRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
