const express = require('express');
const router = express.Router();
const ClickedData = require('../models/ClickedData');

// Save clicked data
router.post('/save', async (req, res) => {
  try {
    const { market, no, yes, noSub, yesSub } = req.body;

    const newClickedData = new ClickedData({
      market,
      no,
      yes,
      noSub,
      yesSub,
    });

    await newClickedData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
