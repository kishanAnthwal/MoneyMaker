const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id },'6ee7a412294365aa43e0b5fe6383da99be789398722555dfc445c17f5a6c2822bc030ae7cd18bf173dc8e817f7d3229b46ff4cac1fb12b35e15e8306a279be2f', { expiresIn: '1h' });
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id },'6ee7a412294365aa43e0b5fe6383da99be789398722555dfc445c17f5a6c2822bc030ae7cd18bf173dc8e817f7d3229b46ff4cac1fb12b35e15e8306a279be2f', { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
