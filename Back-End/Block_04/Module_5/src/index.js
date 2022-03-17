const express = require('express');

const PORT = 3001;
const api = express();

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
