const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

try {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.error(`Failed to start server: ${error.message}`);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
  }
}
