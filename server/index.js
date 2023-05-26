import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./database/database.js";
import { defaultDatabase } from "./default.js";
dotenv.config();
const app = express();
const PORT = process.env.MY_PORT || 4000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server sarted at ${PORT}`);
});
defaultDatabase();
