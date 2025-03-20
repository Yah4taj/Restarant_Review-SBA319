
import express from 'express';
import Review from '../models/Reviews.js';
const router = express.Router();

// POST - Create a new review
router.post('/', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
});