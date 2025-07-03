 import express from "express";
 import cors from "cors";
 import dotenv from "dotenv";
import { Application } from "express";


 dotenv.config();

  const app :Application = express();

  app.get("/", (req, res) =>{
    res.send("welcome");
  });

  app.listen(4004, () => {
    console.log('our app listening 4004');
  })