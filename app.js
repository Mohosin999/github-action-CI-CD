const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/health", (_req, res) => {
  res.status(200).json({message: "Server is Healthy"});
});

module.exports = app;
