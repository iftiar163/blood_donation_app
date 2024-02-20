import mongoose from "mongoose";

// Create Database Connections
const mongodbConnections = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected`.bgBlue.black);
  } catch (error) {
    console.log(`Database Connection Failed`.bgRed.black);
  }
};

// Export MongoConnections
export default mongodbConnections;
