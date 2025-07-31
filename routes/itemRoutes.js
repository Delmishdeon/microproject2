// routes/itemRoutes.js
import express from 'express';
import Item from '../models/itemModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
