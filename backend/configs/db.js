import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log(`Database Connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database not Connected due to ${error}`);
  }
};

export default connectDB;
