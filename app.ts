import { mongoose } from "@typegoose/typegoose";
import express, { Request, Response, NextFunction } from "express";
import { MongoClient } from "mongodb";
import { MONGO_URI, PORT } from "./config";
import { getComunaData } from "./controllers/getComunaData";
import { getMetaData } from "./controllers/getComunas";
var cors = require("cors");

const app = express();

app.use(cors());
app.options("*", cors());

app.get("/metadata", getMetaData);
app.get("/data", getComunaData);

let server;

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
