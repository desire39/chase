import { v4 as uuid } from 'uuid';
import users from '../config/user.json' assert {type: 'json'};


export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User ${user.username} added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

