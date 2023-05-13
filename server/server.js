// server with next js + express js

import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });

app
  .prepare()
  .then(() => {
    const server = express();

    server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error::::", err);
  });
