const express = require("express");
const next = require("next");
const SignUp = require("../controllers/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const router = express.Router();

router.post("/login", (req, res) => {
  // Handle login logic here
  const { name, email, password } = req.body;
  res.send({ name, email, password });
});

router.post("/signup", SignUp);

module.exports = router;
