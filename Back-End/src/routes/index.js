const { Router } = require("express");
const users = require("./users");
const deportes = require("./deportes");

const router = Router();

router.use("/users", users);

router.use("/deportes", deportes);

module.exports = router;
