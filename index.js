require("dotenv").config();
const request = require("supertest");
const express = require("express");
const app = express();
const router = require("./Routes/userRoutes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, async () => {
  console.log("Server listening on port " + PORT);
});

module.exports = app;
