 import express from "express";
 import cors from "cors";
 import dotenv from "dotenv";
import { Application } from "express";


 dotenv.config();

  const app :Application = express();
  const PORT = process.env.PORT || 4000
  app.use (cors())

  app.get("/", (req, res) =>{
    res.send("welcome");
  });

  app.listen(PORT, () => {
    console.log(`our app ---- ${PORT}`);
  })