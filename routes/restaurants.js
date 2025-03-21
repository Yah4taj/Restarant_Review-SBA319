
import express from 'express';
import Restaurant from '../models/Restaurants.js';
const router = express.Router();


router.post("/", (req,res) => {
    const newRestaurant = Restaurant.create(req.body);
    res.json(newRestaurant)
})
export default router;
