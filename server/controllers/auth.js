const { ID, Client, Users, Account } = require("node-appwrite");

// sign up controller function
const SignUp = async (req, res) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

  const users = new Users(client);
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
const Login = async (req, res) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

  const users = new Users(client);
  const account = new Account(client);

  try {
    const { email, password } = req.body;

    const user = account.createEmailSession(email, password);

    user
      .then((result) => {
        return res.json({
          status: 1,
          message: "Login success!",
          data: result,
        });
      })
      .catch((error) => {
        console.log("error", error);
        return res.json({
          status: 0,
          message: "Login failed. Try again.",
          data: error,
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

module.exports = {
  SignUp,
  Login,
};
