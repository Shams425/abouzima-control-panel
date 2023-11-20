const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

//starting the server
app.listen(5000, () => {
  console.log("app listening in 5000");
});
