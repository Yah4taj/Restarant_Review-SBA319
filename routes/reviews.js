
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

// GET - Retrieve all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// GET - Retrieve reviews by restaurant ID
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const reviews = await Review.find({ restaurantId: req.params.restaurantId });
        res.status(200).json(reviews);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// GET - Retrieve reviews by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const reviews = await Review.find({ userId: req.params.userId });
        res.status(200).json(reviews);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

// PUT - Update a review
router.put('/:id', async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
});

// DELETE - Delete a review
router.delete('/:id', async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message });
    }
});

export default router;