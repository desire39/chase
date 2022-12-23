
import { v4 as uuid } from 'uuid';

import users from  '../Details/useraccount.json' assert{type:'json'};

export const getUsers = (req, res) => {
    console.log(`Users account in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({ id: uuid()});
    
    res.send({success: true, msg: 'successfully debited an account'})
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

