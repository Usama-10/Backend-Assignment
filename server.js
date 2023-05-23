
const fs = require("fs");

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const InstituteRouter = require("./routes/instituteRouter");
const courseRouter = require("./routes/courseRouter");
app.use(express.json());
app.use("/api/course", courseRouter);
console.log("connection sucessfull");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database Connected SucessFully");
    app.listen(process.env.PORT, () => {
      console.log("server is listning on the port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

