import mongoose from 'mongoose';
const { Schema } = mongoose;

const urlShortnerSchema = new Schema({
  longUrl: String,
  shortUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const UrlShortner = mongoose.model('UrlShortner', urlShortnerSchema)