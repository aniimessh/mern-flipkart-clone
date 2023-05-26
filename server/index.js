import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { dbConnect } from "./database/database.js";
import { defaultDatabase } from "./default.js";
import Router from "./routes/route.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);
const PORT = process.env.MY_PORT || 4000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server sarted at ${PORT}`);
});
defaultDatabase();
