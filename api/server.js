const express = require("express"); // CommonJS modules
const server = express();
// server.use(express.json()); // remember to invoke json()

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello", port: `${process.env.PORT}` });
});

module.exports = server;
// const express = require("express");
// const server = express();
// server.get("/", (req, res) => {
//     res.status(200).json({ hello: "node 34" });
// });
// module.exports = server;
