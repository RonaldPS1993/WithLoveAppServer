const Developer = require("../schemas/Developer");

const getDeveloper = async (email) => {
  const findDeveloper = await Developer.where("email", "==", email).get();
  return findDeveloper.docs.length;
};
const createDeveloper = async (payload) => {
  try {
    const res = await Developer.add(payload);
    return res.id;
  } catch (err) {
    console.log(err);
    return null
  }
};

module.exports = { getDeveloper, createDeveloper };
