require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get all users
// Get users from specific collection
app.get('/api/users', async (req, res) => {
    try {
      // Explicitly specify the collection name
      const users = await mongoose.connection.db
        .collection('users')
        .find({})
        .toArray();
      
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));