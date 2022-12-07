// const Joi = require('joi'); 
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'},
// ];

// app.get('/', (req, res) => {
//     res.send('Hello Word');
// });

// app.get('/api/courses', (req, res) => { 
//     res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
//     const {error} = validateCourse(req.body); 
//     if (error) return res.status(400).send(result.error.details[0].message);
       
    
      
//       const course ={
//         id: courses.lenth + 1, 
//         name : req.body.name

//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('The course with the given ID was not found.');
    
//     const {error} = validateCourse(req.body); 
//     if (error)return res.status(400).send(result.error.details[0].message);
  
//     course.name =req.body.name;
//     res.send(course);
// });
 
// app.delete( '/api/courses/:id',(req,res) =>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return  res.status(404).send('The course with the given ID was not found.');
    

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// });

// app.get('/api/courses/:id', (req, res) => {
// const course = courses.find(c => c.id === parseInt(req.params.id));
// if (!course) return res.status(404).send('The course with the given ID was not found.');
// res.send(course);
// });

// //PORT
// const port = process.env.PORT || 3000;
// app.listen(port,() => console.log(`listening on port ${port}...`));

const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const users = require('./data').userDB;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});


app.post('/register', async (req, res) => {
    try{
        let foundUser = users.find((data) => req.body.email === data.email);
        if (!foundUser) {
    
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
    
            let newUser = {
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            };
            users.push(newUser);
            console.log('User list', users);
    
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch{
        res.send("Internal server error");
    }
});

app.post('/login', async (req, res) => {
    try{
        let foundUser = users.find((data) => req.body.email === data.email);
        if (foundUser) {
    
            let submittedPass = req.body.password; 
            let storedPass = foundUser.password; 
    
            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                let usrname = foundUser.username;
                res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
            } else {
            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
        }
        else {
    
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);
    
            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch{
        res.send("Internal server error");
    }
});


const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
