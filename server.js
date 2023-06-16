const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/charts.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/charts.js"));
});
app.get("/utils.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/utils.js"));
});
app.get("/data.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/data.js"));
});

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.send("Data received successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
