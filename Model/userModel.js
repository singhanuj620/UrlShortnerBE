import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  url: [{ type: Schema.Types.ObjectId, ref: 'UrlShortner'}],
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema)