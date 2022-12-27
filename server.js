const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');

const auth = require('./authenticate');


const users = require("./data/user.json");

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello, World!')
});


app.get('/auth', auth, (req, res) => {
  res.status(200).json({
      status: 'success',
      message: 'Logged In User Information.',
      data: {
        user: {
            email: req.user.email,
        },
      },
    });
});


app.post('/auth/v1/login', async (req, res) => {
    try {
        const user = users.find(user => user.email === req.body.email);
        if (!user) {
            const err = new Error('User Not Found!')
            err.status = 400;
            throw err;
        } else if (await bcrypt.compare(req.body.password, user.password)) {
            const tokenPayload = {
              email: user.email,
            };
            const accessToken = jwt.sign(tokenPayload, 'SECRET');
            res.status(200).json({
                status: 'success',
                message: 'User Logged In!',
                data: {
                  accessToken,
                },
              });
        } else {
            const err = new Error('Wrong Password!');
            err.status = 400;
            throw err;
          }
      } catch (err) {
        res.status(err.status).json({
            status: 'fail',
            message: err.message,
          });
      }
  });

app.listen(4000, ()=>{
       console.log("listeniing at port:4000")
    }) 



