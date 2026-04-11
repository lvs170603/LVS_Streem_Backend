import express from 'express';
import Channel from '../models/Channel.js';

const router = express.Router();

// GET all channels
router.get('/', async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new channel
router.post('/', async (req, res) => {
  const channel = new Channel({
    name: req.body.name,
    icon: req.body.icon,
    url: req.body.url,
    category: req.body.category,
    isActive: req.body.isActive !== undefined ? req.body.isActive : true
  });

  try {
    const newChannel = await channel.save();
    res.status(201).json(newChannel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a channel
router.put('/:id', async (req, res) => {
  try {
    const updatedChannel = await Channel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedChannel) return res.status(404).json({ message: 'Channel not found' });
    res.json(updatedChannel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a channel
router.delete('/:id', async (req, res) => {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.json({ message: 'Channel deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
