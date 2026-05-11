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
    default: '',  // optional if webPlayerUrl is set
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  webPlayerUrl: {
    type: String,
    default: '',   // optional: AIO player / embed URL for WebView playback
  },
  dns: {
    type: String,
    default: '',   // optional: custom DNS/IP for prepending to relative URLs
  }
}, { timestamps: true });

export default mongoose.model('Channel', channelSchema);
