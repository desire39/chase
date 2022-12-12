const express = require('express');

const app = express();

const fs = require('fs');

app.get('/', (req, res) => {
  res.end('Hello Word!');
});
app.get('/test', (req, res) => {
  fs.readFile(`${__dirname}/` + './config/test.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
