import mongoose from "mongoose";

const dbConnect = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://jainmrinal140:${process.env.DATABASE_PASSWORD}@cluster0.5yymuvg.mongodb.net/bookmyshow?retryWrites=true&w=majority&appName=Cluster0`
  );

  if (connection) {
    console.log(`Welcome to connected Database : ${connection.host}`);
  }
};

export default dbConnect;
