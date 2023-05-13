import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express.js" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
