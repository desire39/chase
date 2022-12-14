/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to my login');
});

app.use(require('./modules/login'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
