import express from "express";
const app = express()

const port = 5000


const dataPath = './config/user.json' 

// util functions 

const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}

//use different middleware
// app.use(express.json())



//all users get 
app.get('/users', (req, res) => {
  res.send(users)
})

// get only one user 
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.filter(u => u.id === id)[0]
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({ error: "User does not exist" })
  }

})
// add a new user
app.post('/users', (req, res) => {

  console.log("req.body", req.body)

  //generate new id 
  const id = users.length + 1

  //payload for posting new user
  const payload = {
    ...req.body,
    id: id
  }
  users.push(payload)

  res.send(payload)
})

// update information for a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)

  //index of that user in users array
  const index = users.findIndex(u => u.id === id)
  if (index < 0) {
    res.status(404).send({ error: "user does not exist" })
  }

  const name = req.body.name

  users[index].name = name


  res.send(users[index])
})


// delete user 
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)

  //index of that user in users array
  const index = users.findIndex(u => u.id === id)

  if (index < 0) {
    res.status(404).send({ error: "user does not exist" })
  }

  users = users.filter(u => u.id !== id)

  res.status(200).send("User deleted")


})

app.listen(port, () => {
  console.log("app is running in port:", port)
})