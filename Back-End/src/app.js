const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const cookieParser = require("cookie-parser");

const server = express();
server.name = "";

server.use(morgan("dev"));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(cache("2 minutes"))

server.use(
  cors({
    origin: [
      "exp://192.168.100.2:8081",
      "https://canchascba-dev-etpm.1.us-1.fl0.io",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// PROCESS ROUTES ELSEWHERE
server.use("/", routes);

// ERROR-CATCHING ENDWARE
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
