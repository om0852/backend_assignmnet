import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb+srv://smartcoder0852:zVWbXMnVgt7dnP0U@cluster0.lfofxmp.mongodb.net/backend_assignment');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB