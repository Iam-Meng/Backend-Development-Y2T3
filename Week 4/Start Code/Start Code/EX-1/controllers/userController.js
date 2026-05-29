import {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '../models/userModel.js';

export const listUsers = (req, res) => {
    res.json(getUsers());
};

export const getUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = getUserById(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email, role } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = addUser({ name, email, role });
    res.status(201).json(newUser);
};

export const editUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const updates = req.body;
    const updatedUser = updateUser(userId, updates);
    if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
};

export const removeUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (!deleteUser(userId)) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
};
