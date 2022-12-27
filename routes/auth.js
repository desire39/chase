const express = require("express");

const router = express.Router();

const uuid = require("uuid");

const users = require("../data/user.json");

app.post('login', async (req, res) => {
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
            res.status(201).json({
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


// router.get("auth/login", (req, res) => {
//   res.json(users);

// });

// router.get("/:id", (req, res) => {

//   const found = users.some(user => user.id === parseInt(req.params.id));

//   if (found) {

//     res.json(users.filter(user => user.id === parseInt(req.params.id)));

//   } else {

//     res.sendStatus(400); 

//   }

// });

// router.post("/auth/v1/login", (req, res) => {

//   const user = {

//     id: uuid.v4(),

//     name: req.body.name,

//     email: req.body.email


//   };

//   if (!user.name || !user.email) {

//     return res.sendStatus(400);
    

//   }

//   users.push(user);

//   res.json({ msg: "User login sucessfull", user });

//   return res.sendStatus(200);
// });



// module.exports = router;