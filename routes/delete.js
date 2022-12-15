import express from 'express';

// eslint-disable-next-line import/extensions
import {
  getUsers, createUser, getUser, deleteUser,
// eslint-disable-next-line import/extensions
} from '../controller/delete.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

export default router;
