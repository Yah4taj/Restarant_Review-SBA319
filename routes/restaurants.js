
import express from 'express';
import Restaurant from '../models/Restaurants.js';
const userRouter = express.Router();


router.post("/", (req,res) => {
    const newRestaurant = Restaurant.create(req.body);
    res.json(newRestaurant)
})