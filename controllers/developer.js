const { v4: uuidv4 } = require("uuid");
const myCrypto = require("crypto");

const generateApiKey = uuidv4;

const hash = (value) => {
  const algorithm = "sha512";
  return myCrypto.createHash(algorithm).update(value).digest("hex");
};

const controller = async (req, res) => {
  const { body: data } = req;

  console.log(data);

  res.json({
    code: 200,
    body: "Success",
  });
};

module.exports = controller;
