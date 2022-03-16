const express = require('express');

const api = express();
const PORT = 3001;

api.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
