import express from 'express';

import { getUsers, createUser, getUser, } from '../controller/account.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);


export default router;