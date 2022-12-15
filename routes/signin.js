import express from 'express';

// eslint-disable-next-line import/extensions
import { createUser, getUsers, getUser } from '../controller/signin.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

export default router;
