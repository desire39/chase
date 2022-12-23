import express from 'express';

import { getUsers, createUser, getUser } from '../controller/signup.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);




export default router;