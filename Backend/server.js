import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Feedback from "./feedback.js";

const Frontend_URL = process.env.VITE_URL;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(
  cors({
    allowedOrigin: Frontend_URL,
  })
);

app.use(bodyParser.json());

let ConnectionSuccess = false;
const connctDB = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("connection suceessfull");
      ConnectionSuccess = true;
    })
    .catch(() => {
      ConnectionSuccess = false;
      console.log("connection does not build");
    });
};

app.get("/", (req, res) => {
  console.log("server root");
  res.send("server root");
  if (!ConnectionSuccess) connctDB();
});

app.get("/feedback", async (req, res) => {
  const fbs = await Feedback.find({});
  res.send(fbs);
});

app.post("/feedback", async (req, res) => {
  const { username, email, feedback } = req.body;
  const fb = new Feedback({ username, feedback, email });

  console.log("feedback come", fb);
  try {
    await fb.save();
    res.send(fb);
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(3000, (req, res) => {
  console.log("server is listening t port 3000");
  if (!ConnectionSuccess) connctDB();
});
