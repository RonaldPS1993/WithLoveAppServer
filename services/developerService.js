const developerModules = require("../modules/developerModule");
const { v4: uuidv4 } = require("uuid");
const myCrypto = require("crypto");
const { log } = require("console");
const generateApiKey = uuidv4;

const hash = (value) => {
  const algorithm = "sha512";
  return myCrypto.createHash(algorithm).update(value).digest("hex");
};

const validateDeveloper = (data) => {
  if (!data.name) {
    return { code: 400, message: "Name is required" };
  }
  if (!data.email) {
    return { code: 400, message: "Email is required" };
  }
  if (!data.password) {
    return { code: 400, message: "Password is required" };
  }

  return { code: 200, message: "Success" };
};

const developerService = async (data) => {
  const validate = validateDeveloper(data);
  if (validate.code == 200) {
    const findres = await developerModules.getDeveloper(data.email);
    console.log(findres, "Developers found with email");
    if (findres == 0) {
      const apiKey = generateApiKey();
      const hashedApiKey = hash(apiKey);
      const hashedPassword = hash(data.password);

      const payload = {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        apiKey: hashedApiKey,
      };
      const createRes = await developerModules.createDeveloper(payload);
      if (createRes != null) {
        return { code: 200, body: { id: createRes, apiKey: apiKey } };
      } else {
        return { code: 401, message: "Cannot create new developer entry" };
      }
    } else {
      return { code: 400, message: "Email already in use." };
    }
  } else {
    return validate;
  }
};

module.exports = developerService;
