const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    code: 200,
    status: "Success",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port number ${process.env.PORT}`);
});
