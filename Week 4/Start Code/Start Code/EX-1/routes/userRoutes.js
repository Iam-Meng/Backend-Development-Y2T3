import express from 'express';
import {
    listUsers,
    getUser,
    createUser,
    editUser,
    removeUser
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

export default router;
