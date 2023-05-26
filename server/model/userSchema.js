import mongoose, { model } from "mongoose";
const userSchema = mongoose.Schema({
  userNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  userPassword: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model('user', userSchema);
export default User;