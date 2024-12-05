const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Uncommon bug: In this simple Express.js app, there's a potential for an uncommon error if the port 3000 is already in use. This might not always throw a clear exception or error message, causing the server to appear unresponsive.