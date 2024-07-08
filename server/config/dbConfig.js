import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://jainmrinal140:${process.env.DATABASE_PASSWORD}@cluster0.5yymuvg.mongodb.net/bookmyshow?retryWrites=true&w=majority&appName=Cluster0`
    );

    if (connection) {
      console.table(connection);
    }
  } catch (error) {
    console.log(error.message);
  }
  
};

export default dbConnect;
