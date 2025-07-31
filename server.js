import itemRoutes from './routes/itemRoutes.js';

import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

import express from 'express';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/items', itemRoutes);

connectDB();

app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
