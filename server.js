
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome users'
  });
});

app.post('/auth/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'users login successful',
        authData
      });
    }
  });
});

app.post('/auth/v1/login', (req, res) => {
 
  const user = [{
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  },
  {
    id: 2, 
    username: 'daisy',
    email: 'daisy@gmail.com'
  }
]


  jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    });
  });
});

function verifyToken(req, res, next) {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }

}

app.listen(5000, () => console.log('Server started on port 5000'));

