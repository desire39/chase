const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');

const auth = require('./auth/authenticate');

const app = express();
const port = 3000;

const users = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('users registration!')
});

app.get('/users', auth, (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'register a users.',
        data: {
          user: {
              email: req.user.email,
          },
        },
      });
});

app.post('/auth/v1/register', async (req, res) => {
    try {
        if (users.some(user => user.email === req.body.email)) {
            const err = new Error('Email Taken!')
            err.status = 400;
            throw err;
        }

        const user = {
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 12),
        }

        users.push(user);

        res.status(201).json({
          status: 'success',
          message: 'User Registered!',
          data: {
            user: {
                email: user.email,
            },
          },
        });
      } catch (err) {
        res.status(err.status).json({
            status: 'fail',
            message: err.message,
          });
      }
});

app.listen(port, () => {
  console.log(`app running on http://127.0.0.1:${port}`)
});