const { users } = require("../../appwrite.js");
const { ID } = require("node-appwrite");

// sign up controller function
const SignUp = async (req, res) => {
  try {
    // console.log("req.body", req.body);
    const { name, email, password } = req.body;

    // check if user exists with that email
    const user = users.createMD5User(ID.unique(), email, password, name);

    user
      .then((result) => {
        return res.json({
          status: 1,
          message: "Sign up success! Please sign in.",
          data: result,
        });
      })
      .catch((error) => {
        console.log("error", error);
        return res.json({
          status: 0,
          message: "Sign up failed. Try again.",
          data: error,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

// login controller function

module.exports = {
  SignUp,
};
