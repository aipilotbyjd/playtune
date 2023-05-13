// server with next js + express js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
const app = next({ dev });

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/api", (req, res) => {
      return res.send("Hello World");
    });

    server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error::::", err);
  });
