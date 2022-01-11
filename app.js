const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// This sets our app to be accessed at port 3000
app.listen(3000);
