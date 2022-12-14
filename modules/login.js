/* eslint-disable no-console */
const fs = require('fs');
const express = require('express');
const app = require('../server');

const router = express.Router();

// eslint-disable-next-line import/order
const signin = require('../config/data.json');

app.get('/auth/v1/signin', (req, res) => {
  // eslint-disable-next-line no-useless-concat
  fs.readFile(`${__dirname}/` + './models/data.json', 'utf8', (err, data) => {
    res.end(data);
  });
});
app.post('/auth/v1/signin', (req, res) => {
  signin.User(req, res, (err) => {
    if (err) {
      res.json({ error: true, message: 'Error user exist .. !' });
    } else {
      res.json({ success: true, message: 'User succesfully login ' });
    }
  });
});

module.exports = router;
