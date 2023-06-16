const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/src/charts.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/charts.js"));
});
app.get("/src/utils.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/utils.js"));
});
app.get("/src/data.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/data.js"));
});

// experimental post req handling
// not receiving data as of now
// needs fixing
app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.send("Data received successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
