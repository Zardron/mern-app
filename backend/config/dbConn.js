import mongoose from "mongoose";

const dbConn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if (conn) console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export default dbConn;
