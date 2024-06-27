import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://localhost:27017/assignment_task');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB