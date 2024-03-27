const express = require('express');
const routes = require('./routes')
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/', routes);


const port = 4000;
app.listen(port, () => {
  console.log(`Serwer listen on port: ${port}`);
});
