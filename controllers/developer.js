const service = require("../services/developerService");

const controller = async (req, res) => {
  const { body: data } = req;

  const serviceResponse = await service(data);

  res.json({
    code: serviceResponse.code,
    message: serviceResponse.message,
    body: serviceResponse.body,
  });
};

module.exports = controller;
