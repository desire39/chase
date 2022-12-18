/* eslint-disable no-unused-vars */
import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
  res.send(req.params.id);
};
export const updateUser = (req, res) => {
  // eslint-disable-next-line no-shadow
  const user = users.find((user) => user.id === req.params.id);
  user.username = req.body.username;
  user.age = req.body.age;

  console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`);
};
