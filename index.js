const express = require("express");

require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    code: 200,
    status: "Success",
  });
});

//Controllers
const developerController = require("./controllers/developer");

app.post("/api", developerController);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port number ${process.env.PORT}`);
});
