const express = require('express');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./Routes/Route');

app.use('/', routes);

app.listen(3000, () => {
  console.log('listeniing at port:3000');
});
