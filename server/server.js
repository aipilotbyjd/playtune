// server with next js + express js
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
const app = next({ dev });
const handle = app.getRequestHandler();

const authRoutes = require("./routes/auth");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    // Handle Next.js pages
    server.get("*", (req, res) => handle(req, res));

    server.use("/api/auth", authRoutes);

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
