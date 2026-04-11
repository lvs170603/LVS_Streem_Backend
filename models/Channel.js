import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

export default mongoose.model('Channel', channelSchema);
