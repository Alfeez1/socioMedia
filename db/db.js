import mongoose from 'mongoose';

export const Connections = () => {
  const MONGODB_URI =
    'mongodb+srv://alfeez:alfeez@cluster0.sye87sy.mongodb.net/?retryWrites=true&w=majority1';
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('database connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
  });
};
export default Connections;
