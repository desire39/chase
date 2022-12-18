/* eslint-disable import/extensions */
import express from 'express';

import {
  getUsers, createUser, getUser, updateUser,
} from '../controller/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleeUser);

router.patch('/:id', updateUser)
export default router;
