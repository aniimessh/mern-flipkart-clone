import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function dbConnect() {
  const URL = `mongodb+srv://${process.env.MY_USERNAME}:${process.env.MY_PASSWORD}@flipkarcluster.rewwqsd.mongodb.net/FlipkarDB`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Error while connecting with Database");
    console.log(err.message);
  }
}
