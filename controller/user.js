import { v4 as uuidv4 } from 'uuid';

uuidv4();

const users = [];

export const getUsers = (req, res) => {
  // eslint-disable-next-line no-console
  console.log(users);

  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.name} has been added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line eqeqeq
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};
