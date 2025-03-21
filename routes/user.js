import express from 'express';
import User from '../models/Users.js'; // Ensure correct path

const router = express.Router();

// POST - Create a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
});

// GET all users

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// PATCH - Update a user
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// DELETE - Remove a user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).end();
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// Export using ES Modules

export default router;
