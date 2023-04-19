const { Router } = require("express");
const users = require("./users");
const deportes = require("./deportes");
const canchas = require("./canchas");
const empresas= require("./empresas");
const reservas = require("./reservas");

const router = Router();

router.use("/users", users);

router.use("/deportes", deportes);

router.use("/canchas", canchas);

router.use("/empresas", empresas);

router.use("/reservas", reservas);



module.exports = router;
