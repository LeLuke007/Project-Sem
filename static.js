const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
