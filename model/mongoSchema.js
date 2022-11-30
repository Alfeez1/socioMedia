import mongoose from 'mongoose';
const { Schema } = mongoose;

const socialmedia = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Please provide a password!'],
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { collection: 'Signup' }
);

const User = mongoose.model('userData', socialmedia);
export default User;
