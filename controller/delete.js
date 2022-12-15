/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  console.log(`User [${user.username}] has been added to the database.`);
};

export const getUser = (req, res) => {
  res.send(req.params.id);
};

export const deleteUser = (req, res) => {
  console.log(`Account with id ${req.params.id} has successfully been deleted `);

  users = users.filter((user) => user.id !== req.params.id);
};
