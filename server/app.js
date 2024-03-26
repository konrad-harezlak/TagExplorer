const express = require('express');
const router = express.Router();
const app = express();


app.get('/', (req, res) => {
  res.send('Witaj, świecie!');
});


const port = 4000;
app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
