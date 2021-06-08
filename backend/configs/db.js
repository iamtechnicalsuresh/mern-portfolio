import mongoose from "mongoose";

// console.log(db);
const connectDB = async () => {
  let db;

  if (process.env.NODE_ENV === "production") {
    db = process.env.prodMongoURI;
  } else {
    db = process.env.devMongoURI;
  }
  try {
    const conn = await mongoose.connect(db, {
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
