const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const router = express.Router();

router.post("/login", (req, res) => {
  // Handle login logic here
});

router.post("/signup", (req, res) => {
  // Handle signup logic here
});

module.exports = router;
